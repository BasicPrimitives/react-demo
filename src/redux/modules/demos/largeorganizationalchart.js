const primitives = require('basicprimitives');

const LOAD = 'redux-example/largeorganizationalchart/LOAD';
const LOAD_SUCCESS = 'redux-example/largeorganizationalchart/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/largeorganizationalchart/LOAD_FAIL';
const SETCURSORITEM = 'redux-example/largeorganizationalchart/setCursorItem';
const SETSELECTEDITEMS = 'redux-example/largeorganizationalchart/setSelectedItems';
const SETCLICKEDBUTTON = 'redux-example/largeorganizationalchart/setClickedButton';
const SETCONFIGOPTION = 'redux-example/largeorganizationalchart/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/largeorganizationalchart/setTemplateOption';

const chartName = 'largeorganizationalchart';

export const UserActionType = {
  None: 0,
  ContextButtonClick: 1,
  SelectedItems: 2,
  ChangedCursor: 3
};

const initialState = {
  loaded: false,
  userAction: {
    type: UserActionType.None,
    buttonName: null,
    itemId: null
  },
  centerOnCursor: true,
  config: {
    ...new primitives.orgdiagram.Config(),
    pageFitMode: primitives.common.PageFitMode.FitToPage,
    cursorItem: 0,
    hasSelectorCheckbox: primitives.common.Enabled.True,
    hasButtons: primitives.common.Enabled.Auto,
    buttonsPanelSize: 42,
    defaultTemplateName: 'defaultTemplate',
    templates: [
      {
        ...new primitives.orgdiagram.TemplateConfig(),
        name: 'defaultTemplate',
        minimizedItemCornerRadius: null,
        minimizedItemSize: new primitives.common.Size(4, 4),
        highlightPadding: new primitives.common.Thickness(2, 2, 2, 2),
        minimizedItemShapeType: primitives.common.ShapeType.None,
        minimizedItemLineWidth: 1,
        minimizedItemLineType: primitives.common.LineType.Solid,
        minimizedItemBorderColor: null,
        minimizedItemFillColor: null,
        minimizedItemOpacity: 1.0
      },
      {
        ...new primitives.orgdiagram.TemplateConfig(),
        name: 'contactTemplate',
        itemSize: new primitives.common.Size(220, 120)
      }
    ],
    items: []
  },
  itemsHash: {}
};

function getItemsHash(items = []) {
  const newItemsHash = {};
  items.reduce((agg, item) => {
    agg[item.id] = item;
    return agg;
  }, newItemsHash);
  return {
    itemsHash: newItemsHash
  };
}

function getUserAction(type, buttonName, itemId) {
  return {
    userAction: {
      type,
      buttonName,
      itemId
    }
  };
}

function getCursorItem(config, cursorItem) {
  return {
    centerOnCursor: true,
    config: {
      ...config,
      cursorItem,
      items: config.items.map(item => {
        if (item.id === cursorItem) {
          return {
            ...item,
            templateName: 'contactTemplate',
            showCallout: primitives.common.Enabled.True
          };
        }
        if (item.templateName != null) {
          return {
            ...item,
            templateName: null,
            showCallout: primitives.common.Enabled.Auto
          };
        }
        return item;
      })
    }
  };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        loading: true
      };
    }

    case LOAD_SUCCESS: {
      const { config: { scale } } = state;
      const { config: defaultConfig } = initialState;
      const config = action.result;
      const newConfig = {
        ...defaultConfig,
        ...config,
        scale
      };
      return {
        ...initialState,
        loading: false,
        loaded: true,
        ...getCursorItem(
          newConfig,
          newConfig.cursorItem
        ),
        ...getItemsHash(config.items)
      };
    }

    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };

    case SETCONFIGOPTION: {
      const { config, ...restState } = state;
      const newConfig = { ...config };
      newConfig[action.name] = action.value;
      return {
        ...restState,
        centerOnCursor: true,
        config: newConfig
      };
    }

    case SETTEMPLATEOPTION: {
      const { config, ...restState } = state;
      const { templates, ...restConfig } = config;
      return {
        ...restState,
        c: false,
        config: {
          ...restConfig,
          templates: templates.map(template => {
            if (template.name === action.templateName) {
              const newTemplate = { ...template };
              newTemplate[action.name] = action.value;
              return newTemplate;
            }
            return template;
          })
        }
      };
    }

    case SETCURSORITEM: {
      const { config, ...restState } = state;
      return {
        ...restState,
        ...getCursorItem(config, action.cursorItem),
        ...getUserAction(UserActionType.ChangedCursor)
      };
    }

    case SETSELECTEDITEMS: {
      const { config, ...restState } = state;
      return {
        ...restState,
        centerOnCursor: false,
        config: {
          ...config,
          selectedItems: action.selectedItems
        },
        ...getUserAction(UserActionType.SelectedItems)
      };
    }

    case SETCLICKEDBUTTON: {
      return {
        ...state,
        centerOnCursor: false,
        ...getUserAction(UserActionType.ContextButtonClick, action.buttonName, action.itemId)
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.largeorganizationalchart && globalState.largeorganizationalchart.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/load-demoorganizationalchart?name=${chartName}`)
  };
}

export function setCursorItem(cursorItem) {
  return {
    type: SETCURSORITEM,
    cursorItem
  };
}

export function setSelectedItems(selectedItems = []) {
  return {
    type: SETSELECTEDITEMS,
    selectedItems
  };
}

export function setClickedButton(buttonName, itemId) {
  return {
    type: SETCLICKEDBUTTON,
    buttonName,
    itemId
  };
}

export function setConfigOption(name, value) {
  return {
    type: SETCONFIGOPTION,
    name,
    value
  };
}

export function setTemplateOption(templateName, name, value) {
  return {
    type: SETTEMPLATEOPTION,
    templateName,
    name,
    value
  };
}
