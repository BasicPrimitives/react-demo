const LOAD = 'redux-example/license/LOAD';
const LOAD_SUCCESS = 'redux-example/license/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/license/LOAD_FAIL';

const initialState = {
  markdown: "",
  loaded: false,
  licenses: []
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
      const { files, licenses } = result;
      return {
        ...state,
        loading: false,
        loaded: true,
        markdown: files.markdown,
        licenses
      };
    }
    case LOAD_FAIL: {
      const { error } = action;
      return {
        ...state,
        markdown: 'File not found',
        licenses: [],
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
  return globalState.license && globalState.license.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => Promise.all([client.get('/load-markdown?name=info-policy'), client.get('/licenses.json')]).then(results => ({
      files: results[0],
      licenses: results[1]
    }))
  };
}