import { OrgConfig, TemplateConfig, Size, Thickness, PageFitMode,
  Enabled, ShapeType, LineType, ConnectorAnnotationConfig, ConnectorPlacementType} from 'basicprimitives';

const LOAD = 'redux-example/highlightannotations/LOAD';
const LOAD_SUCCESS = 'redux-example/highlightannotations/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/highlightannotations/LOAD_FAIL';
const LOAD_MARKDOWN = 'redux-example/highlightannotations/LOAD_MARKDOWN';
const LOAD_MARKDOWN_SUCCESS = 'redux-example/highlightannotations/LOAD_SUCCESS_MARKDOWN';
const LOAD_MARKDOWN_FAIL = 'redux-example/highlightannotations/LOAD_FAIL_MARKDOWN';
const SETCURSORITEM = 'redux-example/highlightannotations/setCursorItem';
const SETHIGHLIGHTITEM = 'redux-example/highlightannotations/setHighlightItem';
const SETSELECTEDITEMS = 'redux-example/highlightannotations/setSelectedItems';
const SETCLICKEDBUTTON = 'redux-example/highlightannotations/setClickedButton';
const SETCONFIGOPTION = 'redux-example/highlightannotations/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/highlightannotations/setTemplateOption';

const chartName = 'smalldataset';

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
    defaultTemplateName: 'defaultTemplate',
    templates: [
      {
        ...new TemplateConfig(),
        name: 'defaultTemplate',
        minimizedItemCornerRadius: 8,
        minimizedItemSize: new Size(6, 6),
        highlightPadding: new Thickness(6, 6, 6, 6),
        minimizedItemShapeType: ShapeType.None,
        minimizedItemLineWidth: 0,
        minimizedItemLineType: LineType.Solid,
        minimizedItemBorderColor: null,
        minimizedItemFillColor: null,
        minimizedItemOpacity: 1.0
      },
      {
        ...new TemplateConfig(),
        name: 'defaultConnectedItemTemplate',
        minimizedItemCornerRadius: 12,
        minimizedItemSize: new Size(12, 12),
        highlightPadding: new Thickness(6, 6, 6, 6),
        minimizedItemShapeType: ShapeType.None,
        minimizedItemLineWidth: 0,
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
    normalLevelShift: 30,
    dotLevelShift: 20,
    lineLevelShift: 10,
    normalItemsInterval: 10,
    dotItemsInterval: 4,
    lineItemsInterval: 4,
    cousinsIntervalMultiplier: 0,
    padding: new Thickness(10, 10, 10, 10),
    minimumVisibleLevels: 1,
    buttonsPanelSize: 42,
    items: []
  },
  annotations: [],
  annotationsHash: [],
  itemsHash: {}
};

function getAnnotationsHash(links = []) {
  const annotationsHash = {};
  const annotations = links.map(({
    fromItem, toItem, lineType, color, connectorShapeType
  }, index) => {
    const annotation = new ConnectorAnnotationConfig(fromItem, toItem);
    annotation.id = index;
    annotation.selectItems = true;
    annotation.lineType = lineType;
    annotation.color = color;
    annotation.connectorPlacementType = ConnectorPlacementType.Straight;
    annotation.connectorShapeType = connectorShapeType;

    annotationsHash[fromItem] = annotationsHash[fromItem] || [];
    annotationsHash[toItem] = annotationsHash[toItem] || [];
    annotationsHash[fromItem].push(index);
    annotationsHash[toItem].push(index);

    return annotation;
  });

  return {
    annotations,
    annotationsHash
  };
}

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

function getCursorItem(config, centerOnCursor, cursorItem, highlightItem, annotations, annotationsHash) {
  const cursorAnnoattions = new Set(annotationsHash[cursorItem] || []);
  const highlightAnnoattions = new Set(annotationsHash[highlightItem] || []);

  return {
    centerOnCursor,
    config: {
      ...config,
      cursorItem,
      highlightItem,
      annotations: annotations.reduce((agg, annotation) => {
        if (cursorAnnoattions.has(annotation.id)) {
          agg.push({
            ...annotation,
            selectItems: true
          });
        } else if (highlightAnnoattions.has(annotation.id)) {
          agg.push({
            ...annotation,
            selectItems: false
          });
        }
        return agg;
      }, []),
      items: config.items.map(item => {
        const { id, templateName, ...restItem } = item;
        if (id === cursorItem) {
          return {
            ...item,
            templateName: 'contactTemplate',
            showCallout: Enabled.True
          };
        }
        if (annotationsHash[id] != null) {
          return {
            ...item,
            templateName: 'defaultConnectedItemTemplate',
            showCallout: Enabled.Auto
          };
        }
        if (item.templateName != null) {
          return {
            id,
            ...restItem,
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
      const { cursorItem, highlightItem } = defaultConfig;
      const { items, links } = action.result;
      const { annotations, annotationsHash } = getAnnotationsHash(links);
      const newConfig = {
        ...defaultConfig,
        scale
      };
      return {
        ...state,
        loading: false,
        loaded: true,
        userAction: {
          type: UserActionType.None,
          buttonName: null,
          itemId: null
        },
        centerOnCursor: true,
        ...getCursorItem(
          {
            ...newConfig,
            items
          },
          true,
          cursorItem,
          highlightItem,
          annotations,
          annotationsHash
        ),
        ...getItemsHash(items),
        annotations,
        annotationsHash
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
        centerOnCursor: false,
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
      const { config, annotations, annotationsHash } = state;
      const { cursorItem } = action;
      const { highlightItem } = config;
      return {
        ...state,
        ...getCursorItem(config, true, cursorItem, highlightItem, annotations, annotationsHash),
        ...getUserAction(UserActionType.ChangedCursor)
      };
    }

    case SETHIGHLIGHTITEM: {
      const { config, annotations, annotationsHash } = state;
      const { cursorItem } = config;
      const { highlightItem } = action;
      return {
        ...state,
        ...getCursorItem(config, false, cursorItem, highlightItem, annotations, annotationsHash)
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
  return globalState.highlightannotations && globalState.highlightannotations.loaded;
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

export function setHighlightItem(highlightItem) {
  return {
    type: SETHIGHLIGHTITEM,
    highlightItem
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
    promise: ({ client }) => client.get(`/load-markdown?name=info-highlightannotations`)
  };
}