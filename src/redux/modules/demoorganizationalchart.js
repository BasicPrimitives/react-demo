const primitives = require('basicprimitives');

const SETCURSORITEM = 'redux-example/demoorganizationalchart/setCursorItem';
const SETITEMOPTIONS = 'redux-example/demoorganizationalchart/setItemOptions';
const SETSELECTEDITEMS = 'redux-example/demoorganizationalchart/setSelectedItems';
const SETUSERACTION = 'redux-example/demoorganizationalchart/setUserAction';
const SETCONFIG = 'redux-example/demoorganizationalchart/setConfig';
const SETCONFIGOPTION = 'redux-example/demoorganizationalchart/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/demoorganizationalchart/setTemplateOption';
const LOAD = 'redux-example/demoorganizationalchart/LOAD';
const LOAD_SUCCESS = 'redux-example/demoorganizationalchart/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/demoorganizationalchart/LOAD_FAIL';

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
  config: {
    items: []
  },
  itemsHash: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS: {
      const { config, itemsHash, ...restState } = state;
      const { items, ...restConfig } = config;

      // create items map by item id
      const newItemsHash = {};
      action.result.reduce((result, item) => {
        result[item.id] = item;
        return result;
      }, newItemsHash);

      return {
        ...restState,
        loading: false,
        loaded: true,
        config: {
          ...restConfig,
          items: action.result
        },
        itemsHash: newItemsHash
      };
    }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case SETCONFIG: {
      const { config, ...restState } = state;
      const result = {
        ...restState,
        config: {
          ...(new primitives.orgdiagram.Config()),
          ...action.config,
          templates: (Array.isArray(action.config.templates)
            ? action.config.templates.map(template => ({ ...(new primitives.orgdiagram.TemplateConfig()), ...template }))
            : [])
        }
      };
      return result;
    }
    case SETCONFIGOPTION: {
      const { config, ...restState } = state;
      const newConfig = { ...config };
      newConfig[action.name] = action.value;
      return {
        ...restState,
        config: newConfig
      };
    }
    case SETTEMPLATEOPTION: {
      const { config, ...restState } = state;
      const { templates, ...restConfig } = config;
      return {
        ...restState,
        config: {
          ...restConfig,
          templates: templates.map(
            template => {
              if (template.name === action.templateName) {
                const newTemplate = { ...template };
                newTemplate[action.name] = action.value;
                return newTemplate;
              }
              return template;
            }
          )
        }
      };
    }
    case SETCURSORITEM: {
      const { config, ...restState } = state;
      const { cursorItem, ...restConfig } = config;
      return {
        ...restState,
        config: {
          ...restConfig,
          cursorItem: action.cursorItem
        }
      };
    }
    case SETITEMOPTIONS: {
      const { config, ...restState } = state;
      const { items, ...restConfig } = config;
      return {
        ...restState,
        config: {
          ...restConfig,
          items: config.items.map(item => {
            if (item.id === action.itemId) {
              return {
                ...item,
                ...action.options
              };
            }
            return item;
          }),
        }
      };
    }
    case SETSELECTEDITEMS: {
      const { config, ...restState } = state;
      const { selectedItems, ...restConfig } = config;
      return {
        ...restState,
        config: {
          ...restConfig,
          selectedItems: action.selectedItems
        }
      };
    }
    case SETUSERACTION: {
      const { userAction, ...restState } = state;
      return {
        ...restState,
        userAction: {
          ...action.userAction
        }
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.demoOrganizationalChart && globalState.demoOrganizationalChart.loaded;
}

export function load(name) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/load-demoorganizationalchart?name=${name}`)
  };
}

export function setCursorItem(cursorItem) {
  return {
    type: SETCURSORITEM,
    cursorItem
  };
}

export function setItemOptions(itemId, options) {
  return {
    type: SETITEMOPTIONS,
    itemId,
    options
  };
}

export function setSelectedItems(selectedItems = []) {
  return {
    type: SETSELECTEDITEMS,
    selectedItems
  };
}

export function setUserAction(type, buttonName, itemId) {
  return {
    type: SETUSERACTION,
    userAction: {
      type,
      buttonName,
      itemId
    }
  };
}

export function setConfig(config) {
  return {
    type: SETCONFIG,
    config
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

export function loadAndSetConfig(name, config) {
  return [
    load(name),
    setConfig(config)
  ];
}
