const LOAD = 'redux-example/downloads/LOAD';
const LOAD_SUCCESS = 'redux-example/downloads/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/downloads/LOAD_FAIL';
const SHOWLICENSEDIALOG = 'redux-example/downloads/SHOWLICENSEDIALOG';
const HIDELICENSEDIALOG = 'redux-example/downloads/HIDELICENSEDIALOG';
const ACCEPTLICENSE = 'redux-example/downloads/ACCEPTLICENSE';

const initialState = {
  markdown: "",
  license: "",
  loaded: false,
  isLicenseAccepted: false,
  isLicenseDialogVisible: false,
  fileName: ""
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
      const { files, license } = result;
      return {
        ...state,
        loading: false,
        loaded: true,
        markdown: files.markdown,
        license: license.markdown
      };
    }
    case LOAD_FAIL: {
      const { error } = action;
      return {
        ...state,
        markdown: 'File not found',
        license: 'File not found',
        loading: false,
        loaded: false,
        error
      };
    }
    case SHOWLICENSEDIALOG: {
      const { fileName } = action;
      return {
        ...state,
        isLicenseDialogVisible: true,
        fileName
      };
    }
    case HIDELICENSEDIALOG: {
      return {
        ...state,
        isLicenseDialogVisible: false,
        isLicenseAccepted: false
      };
    }
    case ACCEPTLICENSE: {
      const { isLicenseAccepted } = action;
      return {
        ...state,
        isLicenseAccepted
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.downloads && globalState.downloads.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => Promise.all([client.get('/load-markdown?name=info-downloads'), client.get('/load-markdown?name=info-license')]).then(results => ({
      files: results[0],
      license: results[1]
    }))
  };
}

export function showLicenseDialog(fileName) {
  return {
    type: SHOWLICENSEDIALOG,
    fileName
  };
}

export function hideLicenseDialog() {
  return {
    type: HIDELICENSEDIALOG
  };
}

export function acceptLicense(isLicenseAccepted) {
  return {
    type: ACCEPTLICENSE,
    isLicenseAccepted
  };
}