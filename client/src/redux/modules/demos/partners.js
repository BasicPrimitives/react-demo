import { OrgConfig, TemplateConfig, Size, Thickness, PageFitMode,
  Enabled, ShapeType, LineType, OrientationType, VerticalAlignmentType, HorizontalAlignmentType,
  ChildrenPlacementType, Visibility, SelectionPathMode, Colors,
  AdviserPlacementType, TextOrientationType, GroupByType, ConnectorType,
  ElbowType, PlacementType, NavigationMode} from 'basicprimitives';

const LOAD = 'redux-example/partners/LOAD';
const LOAD_SUCCESS = 'redux-example/partners/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/partners/LOAD_FAIL';
const LOAD_MARKDOWN = 'redux-example/partners/LOAD_MARKDOWN';
const LOAD_MARKDOWN_SUCCESS = 'redux-example/partners/LOAD_SUCCESS_MARKDOWN';
const LOAD_MARKDOWN_FAIL = 'redux-example/partners/LOAD_FAIL_MARKDOWN';
const SETCURSORITEM = 'redux-example/partners/setCursorItem';
const SETSELECTEDITEMS = 'redux-example/partners/setSelectedItems';
const SETCLICKEDBUTTON = 'redux-example/partners/setClickedButton';
const SETCONFIGOPTION = 'redux-example/partners/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/partners/setTemplateOption';

const chartName = 'partners';

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
    cursorItem: 0,
    defaultTemplateName: 'defaultTemplate',
    templates: [
      {
        ...new TemplateConfig(),
        name: 'defaultTemplate',
        minimizedItemCornerRadius: 8,
        minimizedItemSize: new Size(16, 16),
        highlightPadding: new Thickness(6, 6, 6, 6),
        minimizedItemShapeType: ShapeType.Rhombus,
        minimizedItemLineWidth: 0,
        minimizedItemLineType: LineType.Solid,
        minimizedItemBorderColor: null,
        minimizedItemFillColor: null,
        minimizedItemOpacity: 1
      },
      {
        ...new TemplateConfig(),
        name: 'contactTemplate',
        itemSize: new Size(220, 120)
      }
    ],
    pageFitMode: PageFitMode.FitToPage,
    alignBranches: true,
    orientationType: OrientationType.Top,
    verticalAlignment: VerticalAlignmentType.Middle,
    horizontalAlignment: HorizontalAlignmentType.Center,
    childrenPlacementType: ChildrenPlacementType.Horizontal,
    leavesPlacementType: ChildrenPlacementType.Horizontal,
    maximumColumnsInMatrix: 6,
    minimalVisibility: Visibility.Dot,
    selectionPathMode: SelectionPathMode.FullStack,

    hasButtons: Enabled.Auto,
    hasSelectorCheckbox: Enabled.True,
    selectCheckBoxLabel: 'Selected',
    itemTitleFirstFontColor: Colors.White,
    itemTitleSecondFontColor: Colors.White,
    buttonsPanelSize: 42,
    groupTitlePanelSize: 24,
    checkBoxPanelSize: 24,

    /* group title options */
    groupTitlePlacementType: AdviserPlacementType.Left,
    groupTitleOrientation: TextOrientationType.RotateRight,
    groupTitleVerticalAlignment: VerticalAlignmentType.Middle,
    groupTitleHorizontalAlignment: HorizontalAlignmentType.Center,
    groupTitleFontSize: '12px',
    groupTitleFontFamily: 'Arial',
    groupTitleColor: Colors.RoyalBlue,
    groupTitleFontWeight: 'normal',
    groupTitleFontStyle: 'normal',

    /* Intervals */
    normalLevelShift: 30,
    dotLevelShift: 24,
    lineLevelShift: 24,
    normalItemsInterval: 20,
    dotItemsInterval: 10,
    lineItemsInterval: 5,
    cousinsIntervalMultiplier: 0,

    /* Connectors */
    arrowsDirection: GroupByType.None,
    showExtraArrows: true,
    extraArrowsMinimumSpace: 30,
    connectorType: ConnectorType.Squared,
    elbowType: ElbowType.None,
    bevelSize: 4,
    elbowDotSize: 4,
    linesType: LineType.Solid,
    linesColor: Colors.Silver,
    linesWidth: 1,

    /* Labels */
    showLabels: Enabled.Auto,
    labelSize: new Size(10, 14),
    labelOrientation: TextOrientationType.Horizontal,
    labelPlacement: PlacementType.Bottom,
    labelOffset: 3,
    labelFontSize: '10px',
    labelFontFamily: 'Arial',
    labelColor: Colors.Black,
    labelFontWeight: 'normal',
    labelFontStyle: 'normal',

    /* Callout */
    calloutMaximumVisibility: Visibility.Dot,
    showCallout: true,
    calloutPlacementOffset: 100,
    calloutfillColor: '#000000',
    calloutBorderColor: null,
    calloutOffset: 4,
    calloutCornerRadius: 4,
    calloutPointerWidth: '10%',
    calloutLineWidth: 1,
    calloutOpacity: 0.2,

    /* Interactivity */
    navigationMode: NavigationMode.Default,
    highlightGravityRadius: 40,
    enablePanning: true,

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
      const { config } = initialState;
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
            ...config,
            ...action.result,
            scale
          },
          config.cursorItem
        ),
        ...getItemsHash(action.result.items)
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
  return globalState.partners && globalState.partners.loaded;
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
    promise: ({ client }) => client.get(`/load-markdown?name=info-partners`)
  };
}