import { OrgConfig, TemplateConfig, Size, Thickness, PageFitMode,
  Enabled, ShapeType, LineType, OrientationType, VerticalAlignmentType, HorizontalAlignmentType,
  ChildrenPlacementType, Visibility, SelectionPathMode, Colors,
  AdviserPlacementType, TextOrientationType, GroupByType, ConnectorType,
  ElbowType, PlacementType, NavigationMode, AnnotationType} from 'basicprimitives';

const LOAD = 'redux-example/crossteamgroup/LOAD';
const LOAD_SUCCESS = 'redux-example/crossteamgroup/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/crossteamgroup/LOAD_FAIL';
const LOAD_MARKDOWN = 'redux-example/crossteamgroup/LOAD_MARKDOWN';
const LOAD_MARKDOWN_SUCCESS = 'redux-example/crossteamgroup/LOAD_SUCCESS_MARKDOWN';
const LOAD_MARKDOWN_FAIL = 'redux-example/crossteamgroup/LOAD_FAIL_MARKDOWN';
const SETCURSORITEM = 'redux-example/crossteamgroup/setCursorItem';
const SETSELECTEDITEMS = 'redux-example/crossteamgroup/setSelectedItems';
const SETCLICKEDBUTTON = 'redux-example/crossteamgroup/setClickedButton';
const SETCONFIGOPTION = 'redux-example/crossteamgroup/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/crossteamgroup/setTemplateOption';

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
    cursorItem: 0,
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
    items: [],
    selectedItems: [41, 48, 181, 189, 276, 338],
    pageFitMode: PageFitMode.FitToPage,
    orientationType: OrientationType.Left,
    verticalAlignment: VerticalAlignmentType.Middle,
    horizontalAlignment: HorizontalAlignmentType.Left,
    alignBranches: true,
    childrenPlacementType: ChildrenPlacementType.Horizontal,
    leavesPlacementType: ChildrenPlacementType.Horizontal,
    maximumColumnsInMatrix: 6,
    minimalVisibility: Visibility.Dot,
    selectionPathMode: SelectionPathMode.FullStack,
    minimumVisibleLevels : 1,

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
    dotLevelShift: 100,
    lineLevelShift: 10,
    normalItemsInterval: 10,
    dotItemsInterval: 7,
    lineItemsInterval: 5,
    cousinsIntervalMultiplier: 0,
    padding: new Thickness(10, 10, 10, 10),

    /* Connectors */
    arrowsDirection: GroupByType.Children,
    showExtraArrows: false,
    extraArrowsMinimumSpace: 30,
    connectorType: ConnectorType.Curved,
    elbowType: ElbowType.None,
    bevelSize: 4,
    elbowDotSize: 4,
    linesType: LineType.Solid,
    linesColor: Colors.Silver,
    linesWidth: 1,

    /* Labels */
    showLabels: Enabled.True,
    labelSize: new Size(100, 10),
    labelOrientation: TextOrientationType.Horizontal,
    labelPlacement: PlacementType.Right,
    labelOffset: 4,
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

    /* Frame */
    showFrame: true,

    scale: 1.0
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

function getSelectedItems(config, selectedItems) {
  const hash = selectedItems.reduce((accumulator, currrentValue) => {
    accumulator[currrentValue] = true;
    return accumulator;
  }, {});
  return {
    config: {
      ...config,
      selectedItems,
      items: config.items.map(item => {
        if (hash[item.id] === true) {
          return {
            ...item,
            templateName: 'contactTemplate',
            showCallout: (Enabled.True),
            groupTitle: 'General Audit',
            groupTitleColor: 'Green'
          };
        }
        if (item.templateName != null) {
          return {
            ...item,
            templateName: null,
            showCallout: (Enabled.Auto),
            groupTitle: null,
            groupTitleColor: null
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

      var annotations = [];
      for(var index = 0; index < 10; index+=1) {
        annotations.push({
          annotationType: AnnotationType.Level,
          levels: [index],
          title: "Level " + index,
          titleColor: Colors.RoyalBlue,
          offset: new Thickness(0, 4, 0, -5),
          lineWidth: new Thickness(0, 0, 0, 0),
          opacity: (index % 2 > 0 ? 0.08 : 0),
          borderColor: Colors.Black,
          fillColor: Colors.Gray,
          lineType: LineType.Dotted
        })
      }

      const newConfig = {
        ...defaultConfig,
        ...config,
        annotations,
        scale
      };

      return {
        ...state,
        loading: false,
        loaded: true,
        centerOnCursor: true,
        ...getSelectedItems(
          newConfig,
          newConfig.selectedItems
        ),
        ...getItemsHash(config.items),
        ...getUserAction(UserActionType.SelectedItems)
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
        centerOnCursor: true,
        config: {
          ...config,
          cursorItem: action.cursorItem
        },
        ...getUserAction(UserActionType.ChangedCursor)
      };
    }

    case SETSELECTEDITEMS: {
      const { config, ...restState } = state;
      return {
        ...restState,
        centerOnCursor: false,
        ...getSelectedItems(config, action.selectedItems),
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
  return globalState.crossteamgroup && globalState.crossteamgroup.loaded;
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
    promise: ({ client }) => client.get(`/load-markdown?name=info-crossteamgroup`)
  };
}