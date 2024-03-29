const SETCODE = 'redux-example/angularhowotuse/SETCODE';
const SETCODE_SUCCESS = 'redux-example/angularhowotuse/SETCODE_SUCCESS';
const SETCODE_FAIL = 'redux-example/angularhowotuse/SETCODE_FAIL';
const LOAD = 'redux-example/angularhowotuse/LOAD';
const LOAD_SUCCESS = 'redux-example/angularhowotuse/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/angularhowotuse/LOAD_FAIL';

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
    case SETCODE: {
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
    case SETCODE_SUCCESS: {
      const { files } = state;
      const {
        fileName, groupKey, sampleKey, content, result
      } = action;
      const file = files[fileName];
      const { groups } = file;
      const group = groups[groupKey];
      const { samples } = group;
      const { url } = result;
      return {
        ...state,
        files: {
          ...files,
          [fileName]: {
            ...file,
            loading: false,
            loaded: true,
            groups: {
              ...groups,
              [groupKey]: {
                activeKey: sampleKey,
                samples: (samples.map((sample, index) => {
                  if (index === sampleKey) {
                    return {
                      ...sample,
                      url,
                      content
                    };
                  }
                  return sample;
                }))
              }
            }
          }
        }
      };
    }
    case SETCODE_FAIL: {
      const { files } = state;
      const { fileName } = action;
      const file = files[fileName];
      return {
        ...state,
        files: {
          ...files,
          [fileName]: {
            ...file,
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
  return globalState.angularhowtouse && globalState.angularhowtouse[fileName] && globalState.angularhowtouse[fileName].loaded;
}

export function load(fileName) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=angular-${fileName}`),
    fileName
  };
}

export function setCode(fileName, groupKey, sampleKey, content) {
  return {
    type: SETCODE,
    types: [SETCODE, SETCODE_SUCCESS, SETCODE_FAIL],
    promise: ({ client }) => client.post('/save-code', {
      content
    }),
    fileName,
    groupKey,
    sampleKey,
    content
  };
}
