import { OrgConfig, TemplateConfig, Size, Thickness, PageFitMode,
  Enabled, ShapeType, LineType} from 'basicprimitives';

const LOAD = 'redux-example/largeorganizationalchart/LOAD';
const LOAD_SUCCESS = 'redux-example/largeorganizationalchart/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/largeorganizationalchart/LOAD_FAIL';
const LOAD_MARKDOWN = 'redux-example/largeorganizationalchart/LOAD_MARKDOWN';
const LOAD_MARKDOWN_SUCCESS = 'redux-example/largeorganizationalchart/LOAD_SUCCESS_MARKDOWN';
const LOAD_MARKDOWN_FAIL = 'redux-example/largeorganizationalchart/LOAD_FAIL_MARKDOWN';
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
  markdown: "",
  markdownLoaded: false,
  userAction: {
    type: UserActionType.None,
    buttonName: null,
    itemId: null
  },
  centerOnCursor: true,
  config: {
    ...new OrgConfig(),
    pageFitMode: PageFitMode.FitToPage,
    alignBranches: true,
    cursorItem: 0,
    hasSelectorCheckbox: Enabled.True,
    hasButtons: Enabled.Auto,
    buttonsPanelSize: 42,
    padding: new Thickness(10, 10, 10, 10),
    minimumVisibleLevels : 2,
    defaultTemplateName: 'defaultTemplate',
    templates: [
      {
        ...new TemplateConfig(),
        name: 'defaultTemplate',
        minimizedItemCornerRadius: null,
        minimizedItemSize: new Size(4, 4),
        highlightPadding: new Thickness(2, 2, 2, 2),
        minimizedItemShapeType: ShapeType.None,
        minimizedItemLineWidth: 1,
        minimizedItemLineType: LineType.Solid,
        minimizedItemBorderColor: null,
        minimizedItemFillColor: null,
        minimizedItemOpacity: 1.0
      },
      {
        ...new TemplateConfig(),
        name: 'contactTemplate',
        itemSize: new Size(220, 120)
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
            showCallout: Enabled.True
          };
        }
        if (item.templateName != null) {
          return {
            ...item,
            templateName: null,
            showCallout: Enabled.Auto
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
        ...state,
        userAction: {
          type: UserActionType.None,
          buttonName: null,
          itemId: null
        },
        centerOnCursor: true,
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

    case LOAD_MARKDOWN: {
      return {
        ...state,
        markdownLoading: true
      };
    }

    case LOAD_MARKDOWN_SUCCESS: {
      const { result } = action;
      const { markdown } = result;
      return {
        ...state,
        markdownLoading: false,
        markdownLoaded: true,
        markdown
      };
    }
    case LOAD_MARKDOWN_FAIL: {
      const { error } = action;
      return {
        ...state,
        markdown: 'File not found',
        markdownLoading: false,
        markdownLoaded: false,
        markdownError: error
      };
    }

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

export function loadMarkdown() {
  return {
    types: [LOAD_MARKDOWN, LOAD_MARKDOWN_SUCCESS, LOAD_MARKDOWN_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=info-largehierarchy`)
  };
}