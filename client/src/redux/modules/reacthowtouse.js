const LOAD = 'redux-example/reacthowtouse/LOAD';
const LOAD_SUCCESS = 'redux-example/reacthowtouse/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/reacthowtouse/LOAD_FAIL';

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
      const { markdown, groups } = result;
      return {
        ...state,
        files: {
          ...files,
          [fileName]: {
            loading: false,
            loaded: true,
            markdown,
            groups: Object.keys(groups).reduce((agg, groupKey) => {
              agg[groupKey] = {
                activeKey: 0,
                samples: groups[groupKey].map(sample => {
                  const { url, content } = sample;
                  return {
                    ...sample,
                    defaultUrl: url,
                    defaultContent: content
                  };
                })
              };
              return agg;
            }, {})
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
            groups: {},
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
  return globalState.reacthowtouse && globalState.reacthowtouse[fileName] && globalState.reacthowtouse[fileName].loaded;
}

export function load(fileName) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=react-${fileName}`),
    fileName
  };
}

