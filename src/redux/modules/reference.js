const LOAD = 'redux-example/reference/LOAD';
const LOAD_SUCCESS = 'redux-example/reference/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/reference/LOAD_FAIL';

const initialState = {
  files: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      const { files } = state;
      const { fileName } = action;
      const file = files[fileName];
      return {
        ...state,
        files: {
          ...files,
          [fileName]: {
            ...file,
            loading: true
          }
        }
      };
    }
    case LOAD_SUCCESS: {
      const { files } = state;
      const { fileName, result } = action;
      let { markdown } = result;
      markdown = markdown.replace(/``/g, match => ' ');
      return {
        ...state,
        files: {
          ...files,
          [fileName]: {
            loading: false,
            loaded: true,
            markdown
          }
        }
      };
    }
    case LOAD_FAIL: {
      const { files } = state;
      const { fileName } = action;
      const file = files[fileName];
      return {
        ...state,
        files: {
          ...files,
          [fileName]: {
            ...file,
            markdown: 'File not found',
            loading: false,
            loaded: false,
            error: action.error
          }
        }
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState, fileName) {
  return globalState.reference && globalState.reference[fileName] && globalState.reference[fileName].loaded;
}

export function load(fileName) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=reference-${fileName}`),
    fileName
  };
}

