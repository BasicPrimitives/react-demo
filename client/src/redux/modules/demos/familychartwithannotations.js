import { FamConfig, TemplateConfig, Size, Thickness, PageFitMode,
  Enabled, ShapeType, LineType, OrientationType, VerticalAlignmentType, HorizontalAlignmentType,
  ChildrenPlacementType, Visibility, SelectionPathMode, Colors,
  AdviserPlacementType, TextOrientationType, GroupByType, ConnectorType,
  ElbowType, PlacementType, NavigationMode, NeighboursSelectionMode, LoopsLayoutMode,
  AnnotationType, ZOrderType} from 'basicprimitives';


const LOAD = 'redux-example/familychartwithannotations/LOAD';
const LOAD_SUCCESS = 'redux-example/familychartwithannotations/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/familychartwithannotations/LOAD_FAIL';
const LOAD_MARKDOWN = 'redux-example/familychartwithannotations/LOAD_MARKDOWN';
const LOAD_MARKDOWN_SUCCESS = 'redux-example/familychartwithannotations/LOAD_SUCCESS_MARKDOWN';
const LOAD_MARKDOWN_FAIL = 'redux-example/familychartwithannotations/LOAD_FAIL_MARKDOWN';
const SETCURSORITEM = 'redux-example/familychartwithannotations/setCursorItem';
const SETHIGHLIGHTANNOTATIONS = 'redux-example/familychartwithannotations/setHighlightAnnotations';
const SETSELECTEDITEMS = 'redux-example/familychartwithannotations/setSelectedItems';
const SETCONFIGOPTION = 'redux-example/familychartwithannotations/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/familychartwithannotations/setTemplateOption';
const SETANNOTATIONOPTION = 'redux-example/familychartwithannotations/setAnnotationOption';
const SETANNOTATIONITEM = 'redux-example/familychartwithannotations/setAnnotationItem';

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
  datasetName: 'sideBySide',
  datasetNames: {},
  userAction: {
    type: UserActionType.None,
    buttonName: null,
    itemId: null
  },
  centerOnCursor: true,
  config: {
    ...new FamConfig(),
    defaultTemplateName: 'defaultTemplate',
    templates: [
      {
        ...new TemplateConfig(),
        name: 'defaultTemplate',
        minimizedItemCornerRadius: 8,
        minimizedItemSize: new Size(16, 16),
        highlightPadding: new Thickness(4, 4, 4, 4),
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
      },
      {
        ...new TemplateConfig(),
        name: 'miniTemplate',
        isActive: false,
        itemSize: new Size(100, 26),
        minimizedItemCornerRadius: 4,
        minimizedItemSize: new Size(8, 8),
        minimizedItemShapeType: ShapeType.None,
        minimizedItemLineWidth: 1,
        minimizedItemLineType: LineType.Solid,
        minimizedItemBorderColor: null,
        minimizedItemFillColor: null,
        minimizedItemOpacity: 1.0
      }
    ],
    cursorItem: 0,
    items: [],

    /* Layout */
    pageFitMode: PageFitMode.FitToPage,
    orientationType: OrientationType.Top,
    verticalAlignment: VerticalAlignmentType.Middle,
    horizontalAlignment: HorizontalAlignmentType.Center,
    childrenPlacementType: ChildrenPlacementType.Horizontal,
    leavesPlacementType: ChildrenPlacementType.Horizontal,
    minimalVisibility: Visibility.Dot,
    selectionPathMode: SelectionPathMode.None,

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

    /* Family Diagram Specific Options */
    neighboursSelectionMode: NeighboursSelectionMode.ParentsChildrenSiblingsAndSpouses,
    groupByType: GroupByType.Children,
    loopsLayoutMode: LoopsLayoutMode.Optimized,
    alignBylevels: true,
    hideGrandParentsConnectors: false,
    enableMatrixLayout: false,
    minimumMatrixSize: 2,
    maximumColumnsInMatrix: 6,

    /* Intervals */
    normalLevelShift: 20,
    dotLevelShift: 20,
    lineLevelShift: 20,

    normalItemsInterval: 20,
    dotItemsInterval: 10,
    lineItemsInterval: 10,

    cousinsIntervalMultiplier: 0,

    /* Connectors */
    arrowsDirection: GroupByType.Parents,
    showExtraArrows: true,
    extraArrowsMinimumSpace: 30,
    connectorType: ConnectorType.Squared,
    elbowType: ElbowType.Round,
    bevelSize: 4,
    elbowDotSize: 4,
    linesType: LineType.Solid,
    linesColor: Colors.Black,
    linesWidth: 1,

    /* Labels */
    showLabels: Enabled.Auto,
    labelSize: new Size(60, 40),
    labelOrientation: TextOrientationType.Horizontal,
    labelPlacement: PlacementType.Top,
    labelOffset: 1,
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

    scale: 1
  },
  itemsHash: {}
};

function getItemsHash(items = []) {
  const newItemsHash = {};
  items.reduce((agg, item) => {
    agg[item.id] = item;
    return agg;
  }, newItemsHash);
  const children = items.reduce((children, item) => {
    (item.parents || []).reduce((children, parent) => {
      children[parent] = children[parent] || [];
      children[parent].push(item.id);
      return children;
    }, children)
    return children;
  }, {});

  return {
    itemsHash: newItemsHash,
    children
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
        if (item.templateName === "contactTemplate") {
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
      let { datasetNames: newDatasetNames } = state;
      const { config: defaultConfig } = initialState;
      const { datasetName, datasetNames, config } = action.result;
      const newConfig = {
        ...defaultConfig,
        ...config,
        scale
      };
      if(!Object.keys(newDatasetNames).length) {
        newDatasetNames = datasetNames;
      }
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
        datasetName,
        datasetNames:newDatasetNames,
        ...getCursorItem(newConfig, newConfig.cursorItem),
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

    case SETANNOTATIONOPTION: {
      const { config, ...restState } = state;
      const { annotations, ...restConfig } = config;
      return {
        ...restState,
        centerOnCursor: false,
        config: {
          ...restConfig,
          annotations: annotations.map(annotation => {
            if (annotation.annotationType === action.annotationType) {
              const newAnnotation = { ...annotation };
              newAnnotation[action.name] = action.value;
              return newAnnotation;
            }
            return annotation;
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

    case SETHIGHLIGHTANNOTATIONS: {
      const { config, itemsHash, children } = state;
      const { annotations } = config;
      const { id } = action;
      const itemConfig = itemsHash[id];
      const parentItems = (itemConfig && itemConfig.parents) || [];
      const childItems = children[id] || [];

      let newAnnotations = annotations.reduce((agg, annotation) => {
        if (annotation.annotationType !== AnnotationType.HighlightPath) {
          agg.push(annotation);
        }
        return agg;
      }, []);

      if (id !== null) {
        const items = [...parentItems, ...childItems];
        newAnnotations = newAnnotations.concat(
          items.map(itemid => ({
            annotationType: AnnotationType.HighlightPath,
            items: [id, itemid],
            color: Colors.Navy,
            opacity: 0.2,
            lineWidth: 16,
            zOrderType: ZOrderType.Background,
            showArrows: false
          })
          )
        );
      }
      return {
        ...state,
        centerOnCursor: false,
        config: {
          ...config,
          highlightItem: id,
          annotations: newAnnotations
        }
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

    case SETANNOTATIONITEM: {
      const { config, ...restState } = state;
      const { annotations, ...restConfig } = config;
      return {
        ...restState,
        centerOnCursor: false,
        config: {
          ...restConfig,
          annotations: annotations.map(annotation => {
            if (annotation.annotationType === AnnotationType.Connector) {
              const newAnnotation = { ...annotation };
              newAnnotation[action.option] = action.itemId;
              return newAnnotation;
            }
            return annotation;
          })
        }
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.familychartwithannotations && globalState.familychartwithannotations.loaded;
}

export function load(datasetName) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => Promise.all([client.get('/load-demofamilychartslist'), client.get(`/load-demofamilychart?name=${datasetName}`)]).then(results => ({
      datasetName,
      datasetNames: results[0],
      config: results[1]
    }))
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

export function setAnnotationSource(itemId) {
  return {
    type: SETANNOTATIONITEM,
    option: 'fromItem',
    itemId
  };
}

export function setAnnotationDestination(itemId) {
  return {
    type: SETANNOTATIONITEM,
    option: 'toItem',
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

export function setAnnotationOption(annotationType, name, value) {
  return {
    type: SETANNOTATIONOPTION,
    name,
    value,
    annotationType
  };
}

export function setHighlightAnnotations(id) {
  return {
    type: SETHIGHLIGHTANNOTATIONS,
    id
  };
}

export function loadMarkdown() {
  return {
    types: [LOAD_MARKDOWN, LOAD_MARKDOWN_SUCCESS, LOAD_MARKDOWN_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=info-familychartwithannotations`)
  };
}