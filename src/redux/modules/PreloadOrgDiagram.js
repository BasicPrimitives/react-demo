const primitives = require('basicprimitives');

const SETCURSORITEM = 'redux-example/preloadorgdiagram/setCursorItem';
const LOAD = 'redux-example/preloadorgdiagram/LOAD';
const LOAD_SUCCESS = 'redux-example/preloadorgdiagram/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/preloadorgdiagram/LOAD_FAIL';

const initialState = {
  loaded: false,
  pageFitMode: primitives.common.PageFitMode.FitToPage,
  cursorItem: 0,
  hasSelectorCheckbox: primitives.common.Enabled.True,
  items: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        ...action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case SETCURSORITEM: {
      const { cursorItem, ...rest } = state;
      return {
        cursorItem: action.cursorItem,
        ...rest
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.preloadOrgDiagram && globalState.preloadOrgDiagram.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get('/load-tutorialorganizationalchart')
  };
}

export function setCursorItem(cursorItem) {
  return {
    type: SETCURSORITEM,
    cursorItem
  };
}
