const LOAD = 'redux-example/videos/LOAD';
const LOAD_SUCCESS = 'redux-example/videos/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/videos/LOAD_FAIL';

const initialState = {
  markdown: "",
  loaded: false,
  videos: []
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
      const { files, videos } = result;
      return {
        ...state,
        loading: false,
        loaded: true,
        markdown: files.markdown,
        videos
      };
    }
    case LOAD_FAIL: {
      const { error } = action;
      return {
        ...state,
        markdown: 'File not found',
        videos: [],
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
  return globalState.videos && globalState.videos.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => Promise.all([client.get('/load-markdown?name=info-videos'), client.get('/videos.json')]).then(results => ({
      files: results[0],
      videos: results[1]
    }))
  };
}