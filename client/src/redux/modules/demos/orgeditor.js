import { OrgConfig, TemplateConfig, Size, Thickness, PageFitMode,
  Enabled, LineType, OrientationType, VerticalAlignmentType, HorizontalAlignmentType,
  ChildrenPlacementType, Visibility, SelectionPathMode, Colors,
  TextOrientationType, GroupByType, ConnectorType,
  ElbowType, PlacementType, NavigationMode, ShapeType,
  Tree, LCA } from 'basicprimitives';

const LOAD = 'redux-example/orgeditor/LOAD';
const LOAD_SUCCESS = 'redux-example/orgeditor/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/orgeditor/LOAD_FAIL';
const LOAD_MARKDOWN = 'redux-example/orgeditor/LOAD_MARKDOWN';
const LOAD_MARKDOWN_SUCCESS = 'redux-example/orgeditor/LOAD_SUCCESS_MARKDOWN';
const LOAD_MARKDOWN_FAIL = 'redux-example/orgeditor/LOAD_FAIL_MARKDOWN';
const SETCURSORITEM = 'redux-example/orgeditor/setCursorItem';
const SETSELECTEDITEMS = 'redux-example/orgeditor/setSelectedItems';
const UNSELECTITEM = 'redux-example/orgeditor/unselectItem';
const SETCONFIGOPTION = 'redux-example/orgeditor/setConfigOption';
const SETTEMPLATEOPTION = 'redux-example/orgeditor/setTemplateOption';
const SETITEMOPTION = 'redux-example/orgeditor/setItemOption';
const SETITEMSORDER = 'redux-example/orgeditor/setItemsOrder';

const DELETECURSORITEM = 'redux-example/orgeditor/deleteCursorItem';
const DELETESELECTEDITEMS = 'redux-example/orgeditor/deleteSelectedItems';
const ADDCHILDITEM = 'redux-example/orgeditor/addChildItem';

const SHOWCONFIRMDELETEDIALOG = 'redux-example/orgeditor/showConfirmDeleteDialog';
const HIDECONFIRMDELETEDIALOG = 'redux-example/orgeditor/hideConfirmDeleteDialog';

const SHOWDRAWER = 'redux-example/orgeditor/showDrawer';
const HIDEDRAWER = 'redux-example/orgeditor/hideDrawer';

const SHOWNEWITEMDIALOG = 'redux-example/orgeditor/showNewItemDialog';
const HIDENEWITEMDIALOG = 'redux-example/orgeditor/hideNewItemDialog';

const SETITEMPARENT = 'redux-example/orgeditor/setItemParent';
const SHOWREPARENTDIALOG = 'redux-example/orgeditor/showReparentDialog';
const HIDEREPARENTDIALOG = 'redux-example/orgeditor/hideReparentDialog';

const SETSELECTEDITEMSPARENT = 'redux-example/orgeditor/setSelectedItemsParent';
const SHOWSELECTEDITEMSREPARENTDIALOG = 'redux-example/orgeditor/showSelectedItemsReparentDialog';
const HIDESELECTEDITEMSREPARENTDIALOG = 'redux-example/orgeditor/hideSelectedItemsReparentDialog';

const SETFILTERTEXT = 'redux-example/orgeditor/setFilterText';

const DROPITEM = 'redux-example/orgeditor/dropItem';

const chartName = 'matrixlayout';

export const DrawerNames = {
  None: 0,
  Options: 1,
  Search: 2,
  Item: 3
};

const config = {
  ...new OrgConfig(),
  cursorItem: 0,
  defaultTemplateName: 'defaultTemplate',
  defaultCalloutTemplateName: 'defaultTemplate',
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
  onSave: null,
  editMode: true,
  navigationMode: NavigationMode.Default,
  pageFitMode: PageFitMode.FitToPage,
  verticalAlignment: VerticalAlignmentType.Middle,
  arrowsDirection: GroupByType.None,
  showExtraArrows: false,
  extraArrowsMinimumSpace: 30,
  horizontalAlignment: HorizontalAlignmentType.Center,
  connectorType: ConnectorType.Angular,
  bevelSize: 4,
  elbowType: ElbowType.None,
  elbowDotSize: 4,
  highlightGravityRadius: 40,
  hasSelectorCheckbox: Enabled.True,
  selectCheckBoxLabel: 'Selected',
  selectionPathMode: SelectionPathMode.FullStack,
  hasButtons: Enabled.Auto,
  minimalVisibility: Visibility.Dot,
  orientationType: OrientationType.Top,
  itemTitleFirstFontColor: Colors.White,
  itemTitleSecondFontColor: Colors.Navy,
  linesColor: Colors.Silver,
  linesWidth: 1,
  linesType: LineType.Solid,
  showCallout: true,
  calloutPlacementOffset: 100,
  calloutfillColor: '#000000',
  calloutBorderColor: null,
  calloutOffset: 4,
  calloutCornerRadius: 4,
  calloutPointerWidth: '10%',
  calloutLineWidth: 1,
  calloutOpacity: 0.2,
  childrenPlacementType: ChildrenPlacementType.Horizontal,
  leavesPlacementType: ChildrenPlacementType.Matrix,
  maximumColumnsInMatrix: 6,
  buttonsPanelSize: 42,
  groupTitlePanelSize: 24,
  checkBoxPanelSize: 24,
  groupTitleOrientation: TextOrientationType.RotateRight,
  groupTitleVerticalAlignment: VerticalAlignmentType.Middle,
  groupTitleHorizontalAlignment: HorizontalAlignmentType.Center,
  groupTitleFontSize: '12px',
  groupTitleFontFamily: 'Arial',
  groupTitleColor: Colors.RoyalBlue,
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
  showLabels: Enabled.Auto,
  labelSize: new Size(10, 24),
  labelOffset: 1,
  labelOrientation: TextOrientationType.Horizontal,
  labelPlacement: PlacementType.Top,
  labelFontSize: '10px',
  labelFontFamily: 'Arial',
  labelColor: Colors.Black,
  labelFontWeight: 'normal',
  labelFontStyle: 'normal',
  enablePanning: true
};

const initialState = {
  loaded: false,
  markdown: "",
  markdownLoaded: false,
  isPrimary: true,
  isRootContext: false,
  isConfirmDeleteDialogVisible: false,
  activeDrawer: DrawerNames.None,
  isNewItemDialogVisible: false,
  isReparentDialogVisible: false,
  isSelectedItemsReparentDialogVisible: false,
  centerOnCursor: true,
  config: config,
  centerOnCursor2: true,
  config2: config,
  indexes: {},
  children: {},
  filterText: '',
  filteredItems: []
};

function getIndexes(state) {
  const { config, filterText, filteredItems } = state;
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

  let newFilteredItems = filteredItems;
  if(typeof filterText === "string" && filterText !== '') {
    const filtertext = filterText.toLowerCase();
    newFilteredItems = items.filter(({title}) => (typeof title === "string") && title.toLowerCase().indexOf(filtertext) >= 0).sort(({title: a}, {title: b}) => a - b);
  }
   
  return {
    ...state,
    indexes,
    children,
    filteredItems: newFilteredItems
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
  const tree = Tree();

  // rebuild tree
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    tree.add(item.parent, item.id, item);
  }

  return tree;
}

function getDeletedItemsParent(tree, deletedItems, deletedHash) {
  let result = null;
  const lca = LCA(tree);
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
      return getIndexes({
        ...state,
        loading: false,
        loaded: true,
        centerOnCursor: true,
        config: newConfig,
        centerOnCursor2: true,
        config2: newConfig
      });
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
      const { config, config2, ...restState } = state;
      return {
        ...restState,
        centerOnCursor: true,
        config: { 
          ...config,
          [action.name]: action.value
        },
        centerOnCursor2: true,
        config2: { 
          ...config2,
          [action.name]: action.value
        }
      };
    }

    case SETTEMPLATEOPTION: {
      const { config, config2, ...restState } = state;
      const { templates } = config;
      const newTemplates = templates.map(template => {
        if (template.name === action.templateName) {
          const newTemplate = { ...template };
          newTemplate[action.name] = action.value;
          return newTemplate;
        }
        return template;
      });

      return {
        ...restState,
        centerOnCursor: false,
        config: {
          ...config,
          templates: newTemplates
        },
        centerOnCursor2: false,
        config2: {
          ...config2,
          templates: newTemplates
        }
      };
    }

    case SETITEMOPTION: {
      const { config, config2, isPrimary } = state;
      const { items, cursorItem: cursorItem1 } = config;
      const { cursorItem: cursorItem2  } = config2;
      const cursorItem = isPrimary ? cursorItem1 : cursorItem2;
      const newItems = items.map(item => {
        if (item.id === cursorItem) {
          const newItem = { ...item };
          newItem[action.name] = action.value;
          return newItem;
        }
        return item;
      });
      return {
        ...state,
        centerOnCursor: false,
        config: {
          ...config,
          items: newItems
        },
        centerOnCursor2: false,
        config2: {
          ...config2,
          items: newItems
        }
      };
    }

    case DROPITEM: {
      const { config, config2 } = state;
      const { id, parent } = action;
      const { items } = config;
      const newItems = items.map(item => {
        if (item.id === id) {
          const newItem = { ...item };
          newItem.parent = parent;
          return newItem;
        }
        return item;
      });
      return getIndexes({
        ...state,
        centerOnCursor: false,
        config: {
          ...config,
          items: newItems
        },
        centerOnCursor2: false,
        config2: {
          ...config2,
          items: newItems
        }
      });
    }

    case SETITEMPARENT: {
      const { config, config2, isPrimary } = state;
      const { items } = config;
      const contextCursorItem = isPrimary ? config.cursorItem : config2.cursorItem;
      const newItems = items.map(item => {
        if (item.id === contextCursorItem) {
          const newItem = { ...item };
          newItem.parent = action.parent;
          return newItem;
        }
        return item;
      });
      return getIndexes({
        ...state,
        isReparentDialogVisible: false,
        centerOnCursor: isPrimary,
        config: {
          ...config,
          items: newItems
        },
        centerOnCursor2: !isPrimary,
        config2: {
          ...config2,
          items: newItems
        }
      });
    }

    case SETSELECTEDITEMSPARENT: {
      const { config, config2 } = state;
      const { items, selectedItems } = config;
      const hash = selectedItems.reduce((agg, itemid) => {
        agg.add(itemid.toString());
        return agg;
      }, new Set());
      const newItems = items.map(item => {
        if (hash.has(item.id.toString())) {
          const newItem = { ...item };
          newItem.parent = action.parent;
          return newItem;
        }
        return item;
      });
      return getIndexes({
        ...state,
        isSelectedItemsReparentDialogVisible: false,
        centerOnCursor: true,
        config: {
          ...config,
          items: newItems
        },
        centerOnCursor2: true,
        config2: {
          ...config2,
          items: newItems
        }
      });
    }

    case SETITEMSORDER: {
      const { config, config2, indexes } = state;
      const { items } = config;
      const { ids } = action;
      const children = ids.map(id => items[indexes[id]]);
      const hash = children.reduce((agg, child) => {
        agg[child.id] = true;
        return agg;
      }, {});
      const untouchedItems = items.reduce((agg, item) => {
        if (!hash[item.id]) {
          agg.push(item);
        }
        return agg;
      }, []);
      const newItems = [...untouchedItems, ...children];
      return getIndexes({
        ...state,
        centerOnCursor: false,
        config: {
          ...config,
          items: newItems
        },
        centerOnCursor2: false,
        config2: {
          ...config2,
          items: newItems
        }
      });
    }

    case SETCURSORITEM: {
      let { config, config2, isPrimary: currentIsPrimary } = state;
      let {cursorItem, isPrimary } = action;
      if(isPrimary === undefined) {
        isPrimary = currentIsPrimary;
      }
      return {
        ...state,
        isPrimary,
        ...(isPrimary ?  {
            centerOnCursor: true,
            config: {
              ...config,
              cursorItem
            }
          } : {
            centerOnCursor2: true,
            config2: {
              ...config2,
              cursorItem
            }
          }
        )
      }
    }

    case SETSELECTEDITEMS: {
      const { config, config2 } = state;
      return {
        ...state,
        centerOnCursor: false,
        config: {
          ...config,
          selectedItems: action.selectedItems
        },
        centerOnCursor2: false,
        config2: {
          ...config2,
          selectedItems: action.selectedItems
        }
      };
    }

    case UNSELECTITEM: {
      const { config, config2 } = state;
      const { id } = action;
      const { selectedItems}  = config;
      const newSelectedItems = selectedItems.filter(itemid => itemid !== id.toString());
      return {
        ...state,
        centerOnCursor: false,
        config: {
          ...config,
          selectedItems: newSelectedItems
        },
        config2: {
          ...config2,
          selectedItems: newSelectedItems
        }
      };
    }

    case DELETECURSORITEM: {
      const { config, config2, isPrimary } = state;
      const { items: currentItems } = config;
      const currentCursorItem = isPrimary ? config.cursorItem : config2.cursorItem;
      const { items, cursorItem, selectedItems } = getDeletedSelectedItems(currentItems, [currentCursorItem]);
      return getIndexes({
        ...state,
        isConfirmDeleteDialogVisible: false,
        centerOnCursor: true,
        config: {
          ...config,
          items,
          cursorItem,
          selectedItems
        },
        centerOnCursor2: true,
        config2: {
          ...config2,
          items,
          cursorItem,
          selectedItems
        }
      });
    }
    case DELETESELECTEDITEMS: {
      const { config, config2 } = state;
      const { items: currentItems, selectedItems: currentSelectedItems } = config;
      const { items, cursorItem, selectedItems } = getDeletedSelectedItems(currentItems, currentSelectedItems);
      return getIndexes({
        ...state,
        isConfirmDeleteDialogVisible: false,
        centerOnCursor: true,
        config: {
          ...config,
          items,
          cursorItem,
          selectedItems
        },
        centerOnCursor2: true,
        config2: {
          ...config2,
          items,
          cursorItem: cursorItem,
          selectedItems
        }
      });
    }

    case ADDCHILDITEM: {
      const { config, config2, isPrimary, isRootContext } = state;
      const { items: currentItems } = config;
      const currentCursorItem = isPrimary ? config.cursorItem : config2.cursorItem;
      const { items, cursorItem } = getNewChildItem(currentItems, isRootContext ? null : currentCursorItem, action.config)
      return getIndexes({
        ...state,
        isNewItemDialogVisible: false,
        centerOnCursor: isPrimary,
        config: {
          ...config,
          cursorItem: (isPrimary ? cursorItem : config.cursorItem),
          items
        },
        centerOnCursor2: !isPrimary,
        config2: {
          ...config2,
          cursorItem: (!isPrimary ? cursorItem : config2.cursorItem),
          items
        }
      });
    }

    case SHOWCONFIRMDELETEDIALOG: {
      const { isPrimary } = action;
      return {
        ...state,
        isPrimary,
        isConfirmDeleteDialogVisible: true
      };
    }

    case HIDECONFIRMDELETEDIALOG: {
      return {
        ...state,
        isConfirmDeleteDialogVisible: false
      };
    }

    case SHOWDRAWER: {
      const { isPrimary, activeDrawer } = action;
      return {
        ...state,
        isPrimary,
        activeDrawer
      };
    }

    case HIDEDRAWER: {
      return {
        ...state,
        activeDrawer: DrawerNames.None
      };
    }

    case SHOWNEWITEMDIALOG: {
      const { isPrimary, isRootContext } = action;
      return {
        ...state,
        isPrimary,
        isRootContext,
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
      const { isPrimary } = action;
      return {
        ...state,
        isPrimary,
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

    case SETFILTERTEXT: {
      const { filterText } = action;
      return {
        ...getIndexes({
          ...state,
          filterText
        })
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

export function setCursorItem(cursorItem, isPrimary) {
  return {
    type: SETCURSORITEM,
    cursorItem,
    isPrimary
  };
}

export function setSelectedItems(selectedItems = []) {
  return {
    type: SETSELECTEDITEMS,
    selectedItems
  };
}

export function unselectItem(id) {
  return {
    type: UNSELECTITEM,
    id
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

export function addChildItem(config, isPrimary) {
  return {
    type: ADDCHILDITEM,
    isPrimary,
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

export function showConfirmDeleteDialog(isPrimary) {
  return {
    type: SHOWCONFIRMDELETEDIALOG,
    isPrimary
  };
}

export function hideConfirmDeleteDialog() {
  return {
    type: HIDECONFIRMDELETEDIALOG
  };
}

export function showDrawer(isPrimary, activeDrawer) {
  return {
    type: SHOWDRAWER,
    isPrimary,
    activeDrawer
  };
}

export function hideDrawer() {
  return {
    type: HIDEDRAWER
  };
}

export function showNewItemDialog(isPrimary, isRootContext) {
  return {
    type: SHOWNEWITEMDIALOG,
    isPrimary,
    isRootContext
  };
}

export function hideNewItemDialog() {
  return {
    type: HIDENEWITEMDIALOG
  };
}

export function showReparentDialog(isPrimary) {
  return {
    type: SHOWREPARENTDIALOG,
    isPrimary
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

export function setFilterText(filterText) {
  return {
    type: SETFILTERTEXT,
    filterText
  };
}

export function dropItem(id, parent) {
  return {
    type: DROPITEM,
    id,
    parent
  };
}

export function loadMarkdown() {
  return {
    types: [LOAD_MARKDOWN, LOAD_MARKDOWN_SUCCESS, LOAD_MARKDOWN_FAIL],
    promise: ({ client }) => client.get(`/load-markdown?name=info-orgeditor`)
  };
}