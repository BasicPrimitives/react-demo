import { FamConfig, TemplateConfig, Size, Thickness, PageFitMode,
  Enabled, LineType, OrientationType, VerticalAlignmentType, HorizontalAlignmentType,
  ChildrenPlacementType, Visibility, SelectionPathMode, Colors,
  AdviserPlacementType, TextOrientationType, GroupByType, ConnectorType,
  ElbowType, PlacementType, NavigationMode, NeighboursSelectionMode,
  AnnotationType, ZOrderType, ConnectorShapeType, ConnectorPlacementType, ConnectorLabelPlacementType,
  PaletteItemConfig, ConnectorAnnotationConfig } from 'basicprimitives';

const LOAD = 'redux-example/mutualfinancialownership/LOAD';
const LOAD_SUCCESS = 'redux-example/mutualfinancialownership/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/mutualfinancialownership/LOAD_FAIL';
const LOAD_MARKDOWN = 'redux-example/mutualfinancialownership/LOAD_MARKDOWN';
const LOAD_MARKDOWN_SUCCESS = 'redux-example/mutualfinancialownership/LOAD_SUCCESS_MARKDOWN';
const LOAD_MARKDOWN_FAIL = 'redux-example/mutualfinancialownership/LOAD_FAIL_MARKDOWN';
const SETCURSORITEM = 'redux-example/mutualfinancialownership/setCursorItem';
const SETSELECTEDITEMS = 'redux-example/mutualfinancialownership/setSelectedItems';
const SETCONFIGOPTION = 'redux-example/mutualfinancialownership/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/mutualfinancialownership/setTemplateOption';
const SETANNOTATIONOPTION = 'redux-example/mutualfinancialownership/setAnnotationOption';
const SETANNOTATIONITEM = 'redux-example/mutualfinancialownership/setAnnotationItem';

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
    ...new FamConfig(),
    defaultTemplateName: 'defaultTemplate',
    templates: [
      {
        ...new TemplateConfig(),
        name: 'defaultTemplate',
        itemSize: new Size(200, 180),
        minimizedItemSize: new Size(20, 20),
        minimizedItemCornerRadius: 10, // Sligtly rounded corners
        minimizedItemLineWidth: 1,
        minimizedItemLineType: LineType.Solid,
        minimizedItemBorderColor: null, // Shape border line has the same color as item title background color
        minimizedItemFillColor: null, // Shape background has the same color as item title background color
        minimizedItemOpacity: 0.7, // Shape background opacity
        highlightPadding: new Thickness(2, 2, 2, 2)
      }
    ],
    linesPalette: [
      new PaletteItemConfig({ lineColor: '#C6C6C6', lineWidth: 1, lineType: LineType.Solid }), // 1
      new PaletteItemConfig({ lineColor: '#A5A5A5', lineWidth: 1, lineType: LineType.Dashed }), // 4
      new PaletteItemConfig({ lineColor: '#848484', lineWidth: 1, lineType: LineType.Solid }), // 7
      new PaletteItemConfig({ lineColor: '#646464', lineWidth: 1, lineType: LineType.Dashed }), // 10
      new PaletteItemConfig({ lineColor: '#454545', lineWidth: 1, lineType: LineType.Solid }) // 13
    ],
    annotations: [
      new ConnectorAnnotationConfig({
        annotationType: AnnotationType.Connector,
        connectorPlacementType: ConnectorPlacementType.Offbeat,
        labelPlacementType: ConnectorLabelPlacementType.Between,
        zOrderType: ZOrderType.Foreground,
        fromItem: 5,
        toItem: 8,
        label: { color: 'red', badge: '1', title: 'Link' },
        labelSize: { width: 80, height: 30 }, // new Size(80, 30)
        connectorShapeType: ConnectorShapeType.OneWay,
        color: Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: LineType.Dashed
      })
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
    selectionPathMode: SelectionPathMode.FullStack,

    hasButtons: Enabled.True,
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
    alignBylevels: true,
    hideGrandParentsConnectors: true,
    enableMatrixLayout: false,
    minimumMatrixSize: 2,
    maximumColumnsInMatrix: 6,

    /* Intervals */
    normalLevelShift: 20,
    dotLevelShift: 20,
    lineLevelShift: 20,
    normalItemsInterval: 10,
    dotItemsInterval: 20,
    lineItemsInterval: 20,
    cousinsIntervalMultiplier: 1,

    /* Connectors */
    arrowsDirection: GroupByType.Children,
    showExtraArrows: true,
    extraArrowsMinimumSpace: 20,
    connectorType: ConnectorType.Squared,
    elbowType: ElbowType.Round,
    bevelSize: 4,
    elbowDotSize: 4,
    linesType: LineType.Solid,
    linesColor: Colors.Black,
    linesWidth: 1,

    highlightLinesColor: Colors.Red,
    highlightLinesWidth: 2,
    highlightLinesType: LineType.Solid,

    /* Labels */
    showLabels: Enabled.False,
    labelSize: new Size(80, 24),
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
    enablePanning: true
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
      cursorItem
    }
  };
}

function getAnnotations(config) {
  const { annotations } = config;
  if (Array.isArray(annotations)) {
    return {
      ...config,
      annotations: config.annotations.map(annotation => ({
        ...new ConnectorAnnotationConfig(),
        ...annotation
      }))
    };
  }
  return config;
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
      const { config: oldConfig } = initialState;
      const config = action.result;
      const newConfig = {
        ...oldConfig,
        ...config,
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
        ...getCursorItem(getAnnotations(newConfig), newConfig.cursorItem),
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
      const { config, children, itemsHash } = state;
      const { annotations } = config;
      const { cursorItem } = action;
      const itemConfig = itemsHash[cursorItem];
      const parentItems = (itemConfig && itemConfig.parents) || [];
      const childItems = children[cursorItem] || [];

      let newAnnotations = annotations.reduce((agg, annotation) => {
        if (annotation.annotationType !== AnnotationType.HighlightPath) {
          agg.push(annotation);
        }
        return agg;
      }, []);

      if (cursorItem !== null) {
        const items = [...parentItems, ...childItems];
        newAnnotations = newAnnotations.concat(
          items.map(
            itemid => ({
              annotationType: AnnotationType.HighlightPath,
              items: [cursorItem, itemid],
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
        ...getCursorItem(
          {
            ...config,
            cursorItem,
            annotations: newAnnotations
          },
          cursorItem
        ),
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
  return globalState.mutualfinancialownership && globalState.mutualfinancialownership.loaded;
}

export function load(datasetName = 'mutualfinancialownership') {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/load-demofamilychart?name=${datasetName}`)
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

export function loadMarkdown() {
  return {
    types: [LOAD_MARKDOWN, LOAD_MARKDOWN_SUCCESS, LOAD_MARKDOWN_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=info-mutualfinancialownership`)
  };
}