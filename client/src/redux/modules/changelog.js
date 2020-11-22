const LOAD = 'redux-example/changelog/LOAD';
const LOAD_SUCCESS = 'redux-example/changelog/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/changelog/LOAD_FAIL';

const initialState = {
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
      const { markdown } = result;
      return {
        ...state,
        loading: false,
        loaded: true,
        markdown
      };
    }
    case LOAD_FAIL: {
      const { error } = action;
      return {
        ...state,
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
  return globalState.changelog && globalState.changelog.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=packageinfo-changelog`)
  };
}

