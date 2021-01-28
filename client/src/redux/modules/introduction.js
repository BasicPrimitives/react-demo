const LOAD = 'redux-example/introduction/LOAD';
const LOAD_SUCCESS = 'redux-example/introduction/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/introduction/LOAD_FAIL';

const initialState = {
  products: "",
  markdown: "",
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_SUCCESS: {
      const { result } = action;
      let { markdown } = result;
      let products = "";
      const contentStart = markdown.indexOf("## Products");
      const contentMid = markdown.indexOf("## Open Source");
      const contentEnd = markdown.indexOf("Copyright (c)");
      if(contentStart > 0) {
        products = markdown.substring(contentStart, contentMid);
        markdown = markdown.substring(contentMid, contentEnd);
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        products,
        markdown
      };
    }
    case LOAD_FAIL: {
      const { error } = action;
      return {
        ...state,
        products: 'File not found',
        markdown: 'File not found',
        loading: false,
        loaded: false,
        error
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.introduction && globalState.introduction.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=packageinfo-readme`)
  };
}

