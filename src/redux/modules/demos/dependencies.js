const primitives = require('basicprimitives');

const LOAD = 'redux-example/dependencies/LOAD';
const LOAD_SUCCESS = 'redux-example/dependencies/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/dependencies/LOAD_FAIL';
const SETCURSORITEM = 'redux-example/dependencies/setCursorItem';
const SETSELECTEDITEMS = 'redux-example/dependencies/setSelectedItems';
const SETCONFIGOPTION = 'redux-example/dependencies/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/dependencies/setTemplateOption';
const SETANNOTATIONOPTION = 'redux-example/dependencies/setAnnotationOption';
const SETANNOTATIONITEM = 'redux-example/dependencies/setAnnotationItem';

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
    ...new primitives.famdiagram.Config(),
    defaultTemplateName: 'defaultTemplate',
    defaultCalloutTemplateName: 'contactTemplate',
    templates: [
      {
        ...new primitives.famdiagram.TemplateConfig(),
        name: 'defaultTemplate',
        minimizedItemCornerRadius: 3,
        minimizedItemSize: new primitives.common.Size(6, 6),
        highlightPadding: new primitives.common.Thickness(2, 2, 2, 2),
        minimizedItemShapeType: primitives.common.ShapeType.None,
        minimizedItemLineWidth: 0,
        minimizedItemLineType: primitives.common.LineType.Solid,
        minimizedItemBorderColor: null,
        minimizedItemFillColor: null,
        minimizedItemOpacity: 1.0,
        itemSize: new primitives.common.Size(80, 60)
      },
      {
        ...new primitives.famdiagram.TemplateConfig(),
        name: 'contactTemplate',
        itemSize: new primitives.common.Size(220, 120)
      }
    ],
    linesPalette: [
      new primitives.famdiagram.PaletteItemConfig({ lineColor: '#C6C6C6', lineWidth: 1, lineType: primitives.common.LineType.Solid }), // 1
      new primitives.famdiagram.PaletteItemConfig({ lineColor: '#A5A5A5', lineWidth: 1, lineType: primitives.common.LineType.Dashed }), // 4
      new primitives.famdiagram.PaletteItemConfig({ lineColor: '#848484', lineWidth: 1, lineType: primitives.common.LineType.Solid }), // 7
      new primitives.famdiagram.PaletteItemConfig({ lineColor: '#646464', lineWidth: 1, lineType: primitives.common.LineType.Dashed }), // 10
      new primitives.famdiagram.PaletteItemConfig({ lineColor: '#454545', lineWidth: 1, lineType: primitives.common.LineType.Solid }) // 13
    ],
    annotations: [
      {
        annotationType: primitives.common.AnnotationType.Connector,
        fromItem: 5,
        toItem: 8,
        label: {color:"red", badge: "1", title: "Connector annotation"},
        labelSize: { width: 80, height: 30 }, // new primitives.common.Size(80, 30)
        connectorShapeType: primitives.common.ConnectorShapeType.OneWay,
        color: primitives.common.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.common.LineType.Dashed
      }
    ],
    cursorItem: 0,
    items: [],

    /* Layout */
    pageFitMode: primitives.common.PageFitMode.FitToPage,
    orientationType: primitives.common.OrientationType.Left,
    verticalAlignment: primitives.common.VerticalAlignmentType.Middle,
    horizontalAlignment: primitives.common.HorizontalAlignmentType.Center,
    childrenPlacementType: primitives.common.ChildrenPlacementType.Horizontal,
    leavesPlacementType: primitives.common.ChildrenPlacementType.Horizontal,
    minimalVisibility: primitives.common.Visibility.Dot,
    selectionPathMode: primitives.common.SelectionPathMode.FullStack,

    hasButtons: primitives.common.Enabled.True,
    hasSelectorCheckbox: primitives.common.Enabled.True,
    selectCheckBoxLabel: 'Selected',
    itemTitleFirstFontColor: primitives.common.Colors.White,
    itemTitleSecondFontColor: primitives.common.Colors.White,
    buttonsPanelSize: 42,
    groupTitlePanelSize: 24,
    checkBoxPanelSize: 24,

    /* group title options */
    groupTitlePlacementType: primitives.common.AdviserPlacementType.Left,
    groupTitleOrientation: primitives.text.TextOrientationType.RotateRight,
    groupTitleVerticalAlignment: primitives.common.VerticalAlignmentType.Middle,
    groupTitleHorizontalAlignment: primitives.common.HorizontalAlignmentType.Center,
    groupTitleFontSize: '12px',
    groupTitleFontFamily: 'Arial',
    groupTitleColor: primitives.common.Colors.RoyalBlue,
    groupTitleFontWeight: 'normal',
    groupTitleFontStyle: 'normal',

    /* Family Diagram Specific Options */
    neighboursSelectionMode: primitives.common.NeighboursSelectionMode.ParentsChildrenSiblingsAndSpouses,
    groupByType: primitives.common.GroupByType.Children,
    alignBylevels: true,
    hideGrandParentsConnectors: false,
    enableMatrixLayout: false,
    minimumMatrixSize: 2,
    maximumColumnsInMatrix: 6,

    /* Intervals */
    normalLevelShift: 20,
    dotLevelShift: 12,
    lineLevelShift: 12,
    normalItemsInterval: 12,
    dotItemsInterval: 6,
    lineItemsInterval: 6,
    cousinsIntervalMultiplier: 1,

    /* Connectors */
    arrowsDirection: primitives.common.GroupByType.Parents,
    showExtraArrows: true,
    extraArrowsMinimumSpace: 20,
    connectorType: primitives.common.ConnectorType.Squared,
    elbowType: primitives.common.ElbowType.Round,
    bevelSize: 4,
    elbowDotSize: 4,
    linesType: primitives.common.LineType.Solid,
    linesColor: primitives.common.Colors.Black,
    linesWidth: 1,

    /* Labels */
    showLabels: primitives.common.Enabled.False,
    labelSize: new primitives.common.Size(80, 24),
    labelOrientation: primitives.text.TextOrientationType.Horizontal,
    labelPlacement: primitives.common.PlacementType.Top,
    labelOffset: 1,
    labelFontSize: '10px',
    labelFontFamily: 'Arial',
    labelColor: primitives.common.Colors.Black,
    labelFontWeight: 'normal',
    labelFontStyle: 'normal',

    /* Callout */
    calloutMaximumVisibility: primitives.common.Visibility.Dot,
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
    navigationMode: primitives.common.NavigationMode.Default,
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
  const children = {};
  items.map(item => {
    (item.parents || []).map(parent => {
      children[parent] = children[parent] || [];
      children[parent].push(item.id); 
    })
  });

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

function getAnnotations(config) {
  const { annotations } = config;
  if (Array.isArray(annotations)) {
    return {
      ...config,
      annotations: config.annotations.map(annotation => ({
        ...new primitives.famdiagram.ConnectorAnnotationConfig(),
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
        ...initialState,
        loading: true
      };
    }

    case LOAD_SUCCESS: {
      const { config: oldConfig, ...restState } = state;
      const config = action.result;
      const newConfig = {
        ...oldConfig,
        ...config
      };
      return {
        ...restState,
        loading: false,
        loaded: true,
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
      const parentItems = ( itemConfig && itemConfig.parents) || [];
      const childItems = children[cursorItem] || [];

      let newAnnotations = annotations.reduce((agg, annotation) => {
        if (annotation.annotationType !== primitives.common.AnnotationType.HighlightPath) {
          agg.push(annotation);
        }
        return agg;
      }, []);

      if (cursorItem !== null) {
        const items = [...parentItems, ...childItems];
        newAnnotations = newAnnotations.concat(
          items.map(
            itemid => ({
              annotationType: primitives.common.AnnotationType.HighlightPath,
              items: [cursorItem, itemid],
              color: primitives.common.Colors.Navy,
              opacity: 0.2,
              lineWidth: 16,
              zOrderType: primitives.common.ZOrderType.Background,
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
            if (annotation.annotationType === primitives.common.AnnotationType.Connector) {
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
  return globalState.dependencies && globalState.dependencies.loaded;
}

export function load(datasetName = 'dependencies') {
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
