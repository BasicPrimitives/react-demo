const primitives = require('basicprimitives');

const LOAD = 'redux-example/familychartwithannotations/LOAD';
const LOAD_SUCCESS = 'redux-example/familychartwithannotations/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/familychartwithannotations/LOAD_FAIL';
const SETCURSORITEM = 'redux-example/familychartwithannotations/setCursorItem';
const SETSELECTEDITEMS = 'redux-example/familychartwithannotations/setSelectedItems';
const SETCLICKEDBUTTON = 'redux-example/familychartwithannotations/setClickedButton';
const SETCONFIGOPTION = 'redux-example/familychartwithannotations/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/familychartwithannotations/setTemplateOption';
const SETANNOTATIONOPTION = 'redux-example/familychartwithannotations/setAnnotationOption';

export const UserActionType = {
  None: 0,
  ContextButtonClick: 1,
  SelectedItems: 2,
  ChangedCursor: 3
};

const initialState = {
  loaded: false,
  datasetName: 'crossShape',
  datasetNames: {},
  userAction: {
    type: UserActionType.None,
    buttonName: null,
    itemId: null
  },
  config: {
    ...(new primitives.famdiagram.Config()),
    buttons: [
      {
        name: 'delete',
        icon: 'remove',
        tooltip: 'Delete'
      },
      {
        name: 'properties',
        icon: 'cog',
        tooltip: 'Info'
      },
      {
        name: 'add',
        icon: 'user',
        tooltip: 'Add'
      }
    ],
    defaultTemplateName: 'defaultTemplate',
    templates: [
      {
        ...(new primitives.famdiagram.TemplateConfig()),
        name: 'defaultTemplate',
        minimizedItemCornerRadius: 8,
        minimizedItemSize: new primitives.common.Size(16, 16),
        highlightPadding: new primitives.common.Thickness(4, 4, 4, 4),
        minimizedItemShapeType: primitives.common.ShapeType.None,
        minimizedItemLineWidth: 1,
        minimizedItemLineType: primitives.common.LineType.Solid,
        minimizedItemBorderColor: null,
        minimizedItemFillColor: null,
        minimizedItemOpacity: 1.0
      },
      {
        ...(new primitives.famdiagram.TemplateConfig()),
        name: 'contactTemplate',
        itemSize: new primitives.common.Size(220, 120)
      }
    ],
    cursorItem: 0,
    items: [],

    /* Layout */
    pageFitMode: primitives.common.PageFitMode.FitToPage,
    orientationType: primitives.common.OrientationType.Top,
    verticalAlignment: primitives.common.VerticalAlignmentType.Middle,
    horizontalAlignment: primitives.common.HorizontalAlignmentType.Center,
    childrenPlacementType: primitives.common.ChildrenPlacementType.Horizontal,
    leavesPlacementType: primitives.common.ChildrenPlacementType.Horizontal,
    minimalVisibility: primitives.common.Visibility.Dot,
    selectionPathMode: primitives.common.SelectionPathMode.None,

    hasButtons: primitives.common.Enabled.Auto,
    hasSelectorCheckbox: primitives.common.Enabled.True,
    selectCheckBoxLabel: 'Selected',
    itemTitleFirstFontColor: primitives.common.Colors.White,
    itemTitleSecondFontColor: primitives.common.Colors.White,
    buttonsPanelSize: 28,
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
    dotLevelShift: 20,
    lineLevelShift: 20,

    normalItemsInterval: 20,
    dotItemsInterval: 10,
    lineItemsInterval: 10,

    cousinsIntervalMultiplier: 0,

    /* Connectors */
    arrowsDirection: primitives.common.GroupByType.Parents,
    showExtraArrows: true,
    extraArrowsMinimumSpace: 30,
    connectorType: primitives.common.ConnectorType.Squared,
    elbowType: primitives.common.ElbowType.Round,
    bevelSize: 4,
    elbowDotSize: 4,
    linesType: primitives.common.LineType.Solid,
    linesColor: primitives.common.Colors.Black,
    linesWidth: 1,

    /* Labels */
    showLabels: primitives.common.Enabled.Auto,
    labelSize: new primitives.common.Size(60, 40),
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
    enablePanning: true,
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
    },
  };
}

function getAnnotations(config) {
  const { annotations } = config;
  if (Array.isArray(annotations)) {
    return ({
      ...config,
      annotations: config.annotations.map(annotation => ({
        ...(new primitives.famdiagram.ConnectorAnnotationConfig()),
        ...annotation
      }))
    });
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
      const { datasetName, datasetNames, config } = action.result;
      const newConfig = {
        ...oldConfig,
        ...config
      };
      return {
        ...restState,
        loading: false,
        loaded: true,
        datasetName,
        datasetNames,
        ...(getCursorItem(getAnnotations(newConfig), newConfig.cursorItem)),
        ...(getItemsHash(config.items))
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

    case SETANNOTATIONOPTION: {
      const { config, ...restState } = state;
      const { annotations, ...restConfig } = config;
      return {
        ...restState,
        config: {
          ...restConfig,
          annotations: annotations.map(
            annotation => {
              if (annotation.annotationType === action.annotationType) {
                const newAnnotation = { ...annotation };
                newAnnotation[action.name] = action.value;
                return newAnnotation;
              }
              return annotation;
            }
          )
        }
      };
    }

    case SETCURSORITEM: {
      const { config, ...restState } = state;
      return {
        ...restState,
        ...(getCursorItem(config, action.cursorItem)),
        ...(getUserAction(UserActionType.ChangedCursor))
      };
    }

    case SETSELECTEDITEMS: {
      const { config, ...restState } = state;
      return {
        ...restState,
        config: {
          ...config,
          selectedItems: action.selectedItems
        },
        ...(getUserAction(UserActionType.SelectedItems))
      };
    }

    case SETCLICKEDBUTTON: {
      return {
        ...state,
        ...(getUserAction(UserActionType.ContextButtonClick, action.buttonName, action.itemId))
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
    promise: ({ client }) => Promise.all([
      client.get('/load-demofamilychartslist'),
      client.get(`/load-demofamilychart?name=${datasetName}`)
    ]).then(results => ({
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

export function setAnnotationOption(annotationType, name, value) {
  return {
    type: SETANNOTATIONOPTION,
    name,
    value,
    annotationType
  };
}
