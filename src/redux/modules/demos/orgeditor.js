const primitives = require('basicprimitives');

const LOAD = 'redux-example/orgeditor/LOAD';
const LOAD_SUCCESS = 'redux-example/orgeditor/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/orgeditor/LOAD_FAIL';
const SETCURSORITEM = 'redux-example/orgeditor/setCursorItem';
const SETSELECTEDITEMS = 'redux-example/orgeditor/setSelectedItems';
const SETCLICKEDBUTTON = 'redux-example/orgeditor/setClickedButton';
const SETCONFIGOPTION = 'redux-example/orgeditor/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/orgeditor/setTemplateOption';
const SETITEMOPTION = 'redux-example/orgeditor/setItemOption';
const SETITEMSORDER = 'redux-example/orgeditor/setItemsOrder';

const DELETECURSORITEM = 'redux-example/orgeditor/deleteCursorItem';
const DELETESELECTEDITEMS = 'redux-example/orgeditor/deleteSelectedItems';
const ADDCHILDITEM = 'redux-example/orgeditor/addChildItem';

const SHOWCONFIRMDELETEDIALOG = 'redux-example/orgeditor/showConfirmDeleteDialog';
const HIDECONFIRMDELETEDIALOG = 'redux-example/orgeditor/hideConfirmDeleteDialog';

const SHOWNEWITEMDIALOG = 'redux-example/orgeditor/showNewItemDialog';
const HIDENEWITEMDIALOG = 'redux-example/orgeditor/hideNewItemDialog';

const SETITEMPARENT = 'redux-example/orgeditor/setItemParent';
const SHOWREPARENTDIALOG = 'redux-example/orgeditor/showReparentDialog';
const HIDEREPARENTDIALOG = 'redux-example/orgeditor/hideReparentDialog';

const SETSELECTEDITEMSPARENT = 'redux-example/orgeditor/setSelectedItemsParent';
const SHOWSELECTEDITEMSREPARENTDIALOG = 'redux-example/orgeditor/showSelectedItemsReparentDialog';
const HIDESELECTEDITEMSREPARENTDIALOG = 'redux-example/orgeditor/hideSelectedItemsReparentDialog';

const chartName = 'matrixlayout';

const initialState = {
  loaded: false,
  isConfirmDeleteDialogVisible: false,
  isNewItemDialogVisible: false,
  isReparentDialogVisible: false,
  isSelectedItemsReparentDialogVisible: false,
  centerOnCursor: true,
  config: {
    ...new primitives.orgdiagram.Config(),
    cursorItem: 0,
    buttons: [
      {
        name: 'delete',
        icon: 'remove',
        tooltip: 'Delete'
      },
      {
        name: 'add',
        icon: 'plus',
        tooltip: 'Add'
      },
      {
        name: 'move',
        icon: 'move',
        tooltip: 'Move'
      }
    ],
    defaultTemplateName: 'defaultTemplate',
    defaultCalloutTemplateName: 'defaultTemplate',
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
    items: [],
    onSave: null,
    editMode: true,
    navigationMode: primitives.common.NavigationMode.Default,
    pageFitMode: primitives.common.PageFitMode.FitToPage,
    verticalAlignment: primitives.common.VerticalAlignmentType.Middle,
    arrowsDirection: primitives.common.GroupByType.None,
    showExtraArrows: false,
    extraArrowsMinimumSpace: 30,
    horizontalAlignment: primitives.common.HorizontalAlignmentType.Center,
    connectorType: primitives.common.ConnectorType.Angular,
    bevelSize: 4,
    elbowType: primitives.common.ElbowType.None,
    elbowDotSize: 4,
    highlightGravityRadius: 40,
    hasSelectorCheckbox: primitives.common.Enabled.True,
    selectCheckBoxLabel: 'Selected',
    selectionPathMode: primitives.common.SelectionPathMode.FullStack,
    hasButtons: primitives.common.Enabled.Auto,
    minimalVisibility: primitives.common.Visibility.Dot,
    orientationType: primitives.common.OrientationType.Top,
    itemTitleFirstFontColor: primitives.common.Colors.White,
    itemTitleSecondFontColor: primitives.common.Colors.Navy,
    linesColor: primitives.common.Colors.Silver,
    linesWidth: 1,
    linesType: primitives.common.LineType.Solid,
    showCallout: true,
    calloutPlacementOffset: 100,
    calloutfillColor: '#000000',
    calloutBorderColor: null,
    calloutOffset: 4,
    calloutCornerRadius: 4,
    calloutPointerWidth: '10%',
    calloutLineWidth: 1,
    calloutOpacity: 0.2,
    childrenPlacementType: primitives.common.ChildrenPlacementType.Horizontal,
    leavesPlacementType: primitives.common.ChildrenPlacementType.Matrix,
    maximumColumnsInMatrix: 6,
    buttonsPanelSize: 28,
    groupTitlePanelSize: 24,
    checkBoxPanelSize: 24,
    groupTitleOrientation: primitives.text.TextOrientationType.RotateRight,
    groupTitleVerticalAlignment: primitives.common.VerticalAlignmentType.Middle,
    groupTitleHorizontalAlignment: primitives.common.HorizontalAlignmentType.Center,
    groupTitleFontSize: '12px',
    groupTitleFontFamily: 'Arial',
    groupTitleColor: primitives.common.Colors.RoyalBlue,
    groupTitleFontWeight: 'normal',
    groupTitleFontStyle: 'normal',
    scale: 1,
    normalLevelShift: 20,
    dotLevelShift: 10,
    lineLevelShift: 10,
    normalItemsInterval: 20,
    dotItemsInterval: 10,
    lineItemsInterval: 5,
    cousinsIntervalMultiplier: 5,
    showLabels: primitives.common.Enabled.Auto,
    labelSize: new primitives.common.Size(10, 24),
    labelOffset: 1,
    labelOrientation: primitives.text.TextOrientationType.Horizontal,
    labelPlacement: primitives.common.PlacementType.Top,
    labelFontSize: '10px',
    labelFontFamily: 'Arial',
    labelColor: primitives.common.Colors.Black,
    labelFontWeight: 'normal',
    labelFontStyle: 'normal',
    enablePanning: true
  },
  indexes: {},
  children: {}
};

function getIndexes(state) {
  const { config } = state;
  const { items } = config;
  const indexes = {};
  items.reduce((agg, item, index) => {
    agg[item.id] = index;
    return agg;
  }, indexes);
  const children = {};
  items.reduce((agg, { parent, id }) => {
    if (!agg[parent]) {
      agg[parent] = [];
    }
    agg[parent].push(id);
    return agg;
  }, children);
  return {
    ...state,
    indexes,
    children
  };
}

function getNewChildItem(items = [], cursorItem = null, config = null) {
  const maxid = items.reduce((max, item) => Math.max(item.id, max), 0);
  const newid = maxid + 1;
  const result = [
    ...items,
    {
      id: newid,
      parent: cursorItem,
      title: '',
      ...config
    }
  ];
  return {
    items: result,
    cursorItem: newid
  };
}

function getTree(items = []) {
  const tree = primitives.common.tree();

  // rebuild tree
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    tree.add(item.parent, item.id, item);
  }

  return tree;
}

function getDeletedItemsParent(tree, deletedItems, deletedHash) {
  let result = null;
  const lca = primitives.common.LCA(tree);
  result = deletedItems.reduce((agg, itemid) => {
    if (agg == null) {
      agg = itemid;
    } else {
      agg = lca.getLowestCommonAncestor(agg, itemid);
    }
    return agg;
  }, null);

  if (deletedHash.has(result.toString())) {
    result = tree.parentid(result);
  }
  return result;
}

function getDeletedSelectedItems(items = [], deletedItems = []) {
  const tree = getTree(items);
  const hash = deletedItems.reduce((agg, itemid) => {
    agg.add(itemid.toString());
    return agg;
  }, new Set());
  const cursorParent = getDeletedItemsParent(tree, deletedItems, hash);
  const result = [];
  tree.loopLevels(this, (nodeid, node) => {
    if (hash.has(nodeid.toString())) {
      return tree.SKIP;
    }
    result.push(node);
  });

  return {
    items: result,
    cursorItem: cursorParent,
    selectedItems: []
  };
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
      const { config, ...restState } = state;
      return getIndexes({
        ...restState,
        loading: false,
        loaded: true,
        centerOnCursor: true,
        config: {
          ...config,
          ...action.result
        }
      });
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

    case SETITEMOPTION: {
      const { config } = state;
      const { items, cursorItem } = config;
      return {
        ...state,
        centerOnCursor: false,
        config: {
          ...config,
          items: items.map(item => {
            if (item.id === cursorItem) {
              const newItem = { ...item };
              newItem[action.name] = action.value;
              return newItem;
            }
            return item;
          })
        }
      };
    }

    case SETITEMPARENT: {
      const { config } = state;
      const { items, cursorItem } = config;
      return getIndexes({
        ...state,
        isReparentDialogVisible: false,
        centerOnCursor: true,
        config: {
          ...config,
          items: items.map(item => {
            if (item.id === cursorItem) {
              const newItem = { ...item };
              newItem.parent = action.parent;
              return newItem;
            }
            return item;
          })
        }
      });
    }

    case SETSELECTEDITEMSPARENT: {
      const { config } = state;
      const { items, selectedItems } = config;
      const hash = selectedItems.reduce((agg, itemid) => {
        agg.add(itemid.toString());
        return agg;
      }, new Set());
      return getIndexes({
        ...state,
        isSelectedItemsReparentDialogVisible: false,
        centerOnCursor: true,
        config: {
          ...config,
          items: items.map(item => {
            if (hash.has(item.id.toString())) {
              const newItem = { ...item };
              newItem.parent = action.parent;
              return newItem;
            }
            return item;
          })
        }
      });
    }

    case SETITEMSORDER: {
      const { config, indexes } = state;
      const { items } = config;
      const { ids } = action;
      const children = ids.map(id => items[indexes[id]]);
      const hash = children.reduce((agg, child) => {
        agg[child.id] = true;
        return agg;
      }, {});
      const newItems = items.reduce((agg, item) => {
        if (!hash[item.id]) {
          agg.push(item);
        }
        return agg;
      }, []);
      return getIndexes({
        ...state,
        centerOnCursor: false,
        config: {
          ...config,
          items: [...newItems, ...children]
        }
      });
    }

    case SETCURSORITEM: {
      const { config, ...restState } = state;
      return {
        ...restState,
        centerOnCursor: true,
        config: {
          ...config,
          cursorItem: action.cursorItem
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
        }
      };
    }

    case DELETECURSORITEM: {
      const { config } = state;
      const { items, cursorItem } = config;
      return getIndexes({
        ...state,
        isConfirmDeleteDialogVisible: false,
        centerOnCursor: true,
        config: {
          ...config,
          ...getDeletedSelectedItems(items, [cursorItem])
        }
      });
    }
    case DELETESELECTEDITEMS: {
      const { config } = state;
      const { items, selectedItems } = config;
      return getIndexes({
        ...state,
        isConfirmDeleteDialogVisible: false,
        centerOnCursor: true,
        config: {
          ...config,
          ...getDeletedSelectedItems(items, selectedItems)
        }
      });
    }
    case ADDCHILDITEM: {
      const { config } = state;
      const { items, cursorItem } = config;
      return getIndexes({
        ...state,
        centerOnCursor: true,
        config: {
          ...config,
          ...getNewChildItem(items, cursorItem, action.config)
        },
        isNewItemDialogVisible: false
      });
    }

    case SHOWCONFIRMDELETEDIALOG: {
      return {
        ...state,
        isConfirmDeleteDialogVisible: true
      };
    }
    case HIDECONFIRMDELETEDIALOG: {
      return {
        ...state,
        isConfirmDeleteDialogVisible: false
      };
    }
    case SHOWNEWITEMDIALOG: {
      return {
        ...state,
        isNewItemDialogVisible: true
      };
    }
    case HIDENEWITEMDIALOG: {
      return {
        ...state,
        isNewItemDialogVisible: false
      };
    }
    case SHOWREPARENTDIALOG: {
      return {
        ...state,
        isReparentDialogVisible: true
      };
    }
    case HIDEREPARENTDIALOG: {
      return {
        ...state,
        isReparentDialogVisible: false
      };
    }
    case SHOWSELECTEDITEMSREPARENTDIALOG: {
      return {
        ...state,
        isSelectedItemsReparentDialogVisible: true
      };
    }
    case HIDESELECTEDITEMSREPARENTDIALOG: {
      return {
        ...state,
        isSelectedItemsReparentDialogVisible: false
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.orgeditor && globalState.orgeditor.loaded;
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

export function addChildItem(config) {
  return {
    type: ADDCHILDITEM,
    config
  };
}

export function setItemOption(name, value) {
  return {
    type: SETITEMOPTION,
    name,
    value
  };
}

export function setItemParent(parent) {
  return {
    type: SETITEMPARENT,
    parent
  };
}

export function setSelectedItemsParent(parent) {
  return {
    type: SETSELECTEDITEMSPARENT,
    parent
  };
}

export function setItemsOrder(ids) {
  return {
    type: SETITEMSORDER,
    ids
  };
}

export function deleteCursorItem() {
  return {
    type: DELETECURSORITEM
  };
}

export function deleteSelectedItems() {
  return {
    type: DELETESELECTEDITEMS
  };
}

export function showConfirmDeleteDialog() {
  return {
    type: SHOWCONFIRMDELETEDIALOG
  };
}

export function hideConfirmDeleteDialog() {
  return {
    type: HIDECONFIRMDELETEDIALOG
  };
}

export function showNewItemDialog() {
  return {
    type: SHOWNEWITEMDIALOG
  };
}

export function hideNewItemDialog() {
  return {
    type: HIDENEWITEMDIALOG
  };
}

export function showReparentDialog() {
  return {
    type: SHOWREPARENTDIALOG
  };
}

export function hideReparentDialog() {
  return {
    type: HIDEREPARENTDIALOG
  };
}

export function showSelectedItemsReparentDialog() {
  return {
    type: SHOWSELECTEDITEMSREPARENTDIALOG
  };
}

export function hideSelectedItemsReparentDialog() {
  return {
    type: HIDESELECTEDITEMSREPARENTDIALOG
  };
}
