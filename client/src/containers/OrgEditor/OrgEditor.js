import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import SettingsIcon from '@material-ui/icons/Settings';
import { batch, useSelector, useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MDReactComponent from 'markdown-react-js';
import { OrgDiagram } from 'basicprimitivesreact';
import {
  load,
  loadMarkdown,
  setCursorItem,
  setSelectedItems,
  unselectItem,
  setConfigOption,
  setItemOption,
  setItemParent,
  setSelectedItemsParent,
  setItemsOrder,
  setTemplateOption,
  deleteCursorItem,
  deleteSelectedItems,
  addChildItem,
  showConfirmDeleteDialog,
  hideConfirmDeleteDialog,
  showDrawer,
  hideDrawer,
  DrawerNames,
  showNewItemDialog,
  hideNewItemDialog,
  showReparentDialog,
  hideReparentDialog,
  showSelectedItemsReparentDialog,
  hideSelectedItemsReparentDialog,
  dropItem
} from 'redux/modules/demos/orgeditor';
import { OptionsPanel } from 'components';
import useStyles from  './styles';
import { AutoLayoutOptions,
  DefaultTemplateOptions,
  GroupTitlesOptions,
  MarkersOptions,
  IntervalsOptions,
  ConnectorsOptions,
  LabelsOptions,
  CalloutOptions,
  InteractivityOptions,
  RenderingOptions,
  FrameOptions,
  ItemOptions,
  ItemLayoutOptions,
  ChildrenOrderOptions,
  OrgPdfViewDialog
} from 'components';
import SelectCursorItemDialog from './SelectCursorItemDialog';
import AddNewItemDialog from './AddNewItemDialog';
import SearchDrawer from './SearchDrawer';
import NodeDragDropSource from './NodeDragDropSource';
import { Tree } from 'basicprimitives';

function OrgEditor() {
  const loaded = useSelector(state => state.orgeditor.loaded); 
  const markdown = useSelector(state => state.orgeditor.markdown); 
  const isPrimary = useSelector(state => state.orgeditor.isPrimary); 
  const indexes = useSelector(state => state.orgeditor.indexes); 
  const children = useSelector(state => state.orgeditor.children); 
  const centerOnCursor = useSelector(state => state.orgeditor.centerOnCursor); 
  const config = useSelector(state => state.orgeditor.config); 
  const centerOnCursor2 = useSelector(state => state.orgeditor.centerOnCursor2); 
  const config2 = useSelector(state => state.orgeditor.config2); 

  const activeDrawer = useSelector(state => state.orgeditor.activeDrawer); 
  const isConfirmDeleteDialogVisible = useSelector(state => state.orgeditor.isConfirmDeleteDialogVisible); 
  const isNewItemDialogVisible = useSelector(state => state.orgeditor.isNewItemDialogVisible); 
  const isReparentDialogVisible = useSelector(state => state.orgeditor.isReparentDialogVisible); 
  const isSelectedItemsReparentDialogVisible = useSelector(state => state.orgeditor.isSelectedItemsReparentDialogVisible); 

  const dispatch = useDispatch()

  const [isDual, setDual] = React.useState(false);
  const [isPdfDialogOpen, setPdfDialogOpen] = React.useState(false);

  const theme = useTheme();
  const styles = useStyles();
  
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!loaded) {
      dispatch((dispatch, getState) => {
          batch(() => {
            dispatch(load());
            dispatch(setConfigOption('scale', (window.devicePixelRatio > 1 ? 0.5 : 1)));
            dispatch(loadMarkdown());
          })
        }
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []/* run only once */);

  const { items, templates, selectedItems } = config;
  const cursorItem = isPrimary ? config.cursorItem : config2.cursorItem;
  const itemConfig = (cursorItem && items[indexes[cursorItem]]) || null;
  const cursorChildren = (cursorItem && children[cursorItem] && children[cursorItem].map(id => items[indexes[id]])) || null;

  let tree = null;

  function getTree(items = []) {
    if(!tree) {
      tree = Tree();
      for (let index = 0; index < items.length; index += 1) {
        const item = items[index];
        tree.add(item.parent, item.id, item);
      }
    }

    return tree;
  }

  function canDropItem(itemid, parentid) {
    const tree = getTree(items);
    let result = parentid !== itemid;
    tree.loopParents(this, parentid, function (id, node) {
      if (id === itemid) {
        result = false;
        return true;
      }
    });
    return result;
  }

  const templateConfig = templates.find(template => template.name === 'defaultTemplate');
  return (
    <>
      <Helmet>
        <title>- Organizational Chart Editor Demo</title>
        <meta name="description" content="Fully functional downloadable Organizational Chart editing application developed in Universal React JS architecture. Demonstrates matrix nodes layout in org chart. Open Sources. Client side PDF rendering." />
      </Helmet>
      <h1>Organizational Chart Editor Demo</h1>
      <div className={styles.buttonsPanel}>
        <Button 
            key="new"
            variant="contained"
            color="primary"
            onClick={() => { dispatch(showNewItemDialog(true, true));}}
            startIcon={<PersonAddIcon />}
          >
          New
        </Button>
        &nbsp;
        <Button 
            key="search"
            variant="contained"
            color="primary"
            onClick={() => dispatch(showDrawer(isPrimary, DrawerNames.Search))}
            startIcon={<SearchIcon />}
          >
          Search
        </Button>
        &nbsp;
        <Button 
          key="options"
          variant="contained"
          color="primary"
          onClick={() => dispatch(showDrawer(isPrimary, DrawerNames.Options))}
          startIcon={<SettingsIcon />}
        >
          Options
        </Button>
        &nbsp;
        <Button 
          key="downloadpdf"
          variant="contained"
          color="primary"
          onClick={() => setPdfDialogOpen(true)}
          startIcon={<PictureAsPdfIcon />}
        >
          PDF
        </Button>
        &nbsp;
        <Button 
          key="reset"
          variant="contained"
          color="primary"
          onClick={() => dispatch(load())}
          startIcon={<RotateLeftIcon />}
        >
          Reset
        </Button>
        &nbsp;
        <FormControlLabel
          control={
            <Switch
              checked={isDual}
              onChange={() => setDual(isDual => !isDual)}
              color="primary"
              name="isDual"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Dual mode"
        />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={isDual ? 6 : 12}>
          <div className={styles.placeholder}>
            <OrgDiagram
              centerOnCursor={centerOnCursor}
              config={{
                ...config,
                onButtonsRender: (({ context: itemConfig }) => {
                  return <ButtonGroup orientation="vertical" size="small" variant="text">
                    <Button key="user"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(showDrawer(true, DrawerNames.Item));
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button key="add"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(showNewItemDialog(true, false));
                      }}
                    >
                      <PersonAddIcon />
                    </Button>
                    <Button key="reparent"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(showReparentDialog(true));
                      }}
                    >
                      <OpenWithIcon />
                    </Button>
                    <Button key="remove"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(showConfirmDeleteDialog(true));
                      }}
                    >
                      <RemoveIcon />
                    </Button>
                  </ButtonGroup>
                }),
                templates: [
                  {
                    ...templateConfig,
                    onItemRender: ({ context: itemConfig }) => { return <NodeDragDropSource canDropItem={canDropItem} onDropItem={(id, parent) => dispatch(dropItem(id, parent))} itemConfig={itemConfig} /> }
                  }
                ]
              }}
              onCursorChanging={(event, data) => {
                const { context } = data;
                dispatch(setCursorItem(context.id, true));
                // Return true in order to suppress set cursor item in control
                // it will be updated via subsequent state change and rendering event
                return true;
              }}
              onSelectionChanged={(event, currentSelectedItems, newSelectedItems) => {
                dispatch(setSelectedItems(newSelectedItems));
              }}
            />
          </div>
        </Grid>
        {isDual && <Grid item xs={6}>
        <div className={styles.placeholder}>
            <OrgDiagram
              centerOnCursor={centerOnCursor2}
              config={{
                ...config2,
                onButtonsRender: (({ context: itemConfig }) => {
                  return <ButtonGroup orientation="vertical" size="small" variant="text">
                    <Button key="user"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(showDrawer(false, DrawerNames.Item));
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button key="add"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(showNewItemDialog(false, false));
                      }}
                    >
                      <PersonAddIcon />
                    </Button>
                    <Button key="reparent"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(showReparentDialog(false));
                      }}
                    >
                      <OpenWithIcon />
                    </Button>
                    <Button key="remove"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(showConfirmDeleteDialog(false));
                      }}
                    >
                      <RemoveIcon />
                    </Button>
                  </ButtonGroup>
                }),
                templates: [
                  {
                    ...templateConfig,
                    onItemRender: ({ context: itemConfig }) => { return <NodeDragDropSource canDropItem={canDropItem} onDropItem={(id, parent) => dispatch(dropItem(id, parent))} itemConfig={itemConfig} /> }
                  }
                ]
              }}
              onCursorChanging={(event, data) => {
                const { context } = data;
                dispatch(setCursorItem(context.id, false));
                // Return true in order to suppress set cursor item in control
                // it will be updated via subsequent state change and rendering event
                return true;
              }}
              onSelectionChanged={(event, currentSelectedItems, newSelectedItems) => {
                dispatch(setSelectedItems(newSelectedItems));
              }}
            />
          </div>
        </Grid>}
      </Grid>
      {selectedItems.length > 0 && (
        <>
          <h2>Selected Items</h2>
          <div className={styles.chipsPanel}>
            {selectedItems.map(itemid => items[indexes[itemid]]).map(value => (
              <Chip
                  icon={<AccountCircleIcon />}
                  label={value.title}
                  key={`selected-item-${value.id}`}
                  onClick={() =>dispatch(setCursorItem(value.id))}
                  onDelete={() => dispatch(unselectItem(value.id))}
                />
              ))} &nbsp;
            <ButtonGroup>
              <Button onClick={() => dispatch(showSelectedItemsReparentDialog())}>Reparent</Button>
              <Button onClick={() => dispatch(setSelectedItems([]))}>Unselect</Button>
              <Button onClick={() => dispatch(deleteSelectedItems())}>Delete</Button>
            </ButtonGroup>
          </div>
        </>
      )}
      <br />
      <Container fixed>
        <MDReactComponent text={markdown} />
      </Container>
      {activeDrawer === DrawerNames.Options && <Drawer
          key="options-drawer"
          className={styles.drawer}
          variant="persistent"
          anchor="right"
          open={activeDrawer === DrawerNames.Options}
          classes={{
            paper: styles.drawerPaper,
          }}
        >
          <div key="icon" className={styles.drawerHeader}>
            <IconButton onClick={() => dispatch(hideDrawer())}>
              {theme.direction === 'ltr' ?  <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <OptionsPanel 
            optionsPanelConfig={[ AutoLayoutOptions,
              DefaultTemplateOptions,
              GroupTitlesOptions,
              MarkersOptions,
              IntervalsOptions,
              ConnectorsOptions,
              LabelsOptions,
              CalloutOptions,
              InteractivityOptions,
              RenderingOptions,
              FrameOptions]} 
            config={config} 
            defaultTemplate={templateConfig} 
            onChange = {(namespace, name, value) => {
              switch(namespace) {
                case 'defaultTemplate':
                  dispatch(setTemplateOption('defaultTemplate', name, value));
                  break;
                default:
                  dispatch(setConfigOption(name, value)) 
                  break;
              }
            }} 
          />
        </Drawer>
      }
      {activeDrawer === DrawerNames.Item && itemConfig && <Drawer
          key="itemoptions-drawer"
          className={styles.drawer}
          variant="persistent"
          anchor="right"
          open={activeDrawer === DrawerNames.Item}
          classes={{
            paper: styles.drawerPaper,
          }}
        >
          <div key="icon" className={styles.drawerHeader}>
            <IconButton onClick={() => dispatch(hideDrawer())}>
              {theme.direction === 'ltr' ?  <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <OptionsPanel 
            optionsPanelConfig={[ ItemOptions, ItemLayoutOptions, ChildrenOrderOptions ]} 
            config={itemConfig} 
            children={{children: cursorChildren}}
            onChange = {(namespace, name, value) => {
              switch(namespace) {
                case 'children':
                  dispatch(setItemsOrder(value.map(item => item.id)));
                  break;
                default:
                  dispatch(setItemOption(name, value)) 
                  break;
              }
            }} 
          />
        </Drawer>
      }
      {activeDrawer === DrawerNames.Search && <SearchDrawer open={activeDrawer === DrawerNames.Search}/>}
      <Dialog
        fullScreen={fullScreen}
        open={isConfirmDeleteDialogVisible}
        onClose={() => dispatch(hideConfirmDeleteDialog())}
        aria-labelledby="confirm-delete-dialog-title"
      >
        <DialogTitle id="confirm-delete-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {indexes[cursorItem] !== undefined && <>Confirm deletion of {items[indexes[cursorItem]].title} &amp; its children.</>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => dispatch(hideConfirmDeleteDialog())} color="primary">
            Cancel
          </Button>
          <Button onClick={() => dispatch(deleteCursorItem())} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <AddNewItemDialog 
        isVisible={isNewItemDialogVisible}
        onSubmit={(config) => dispatch(addChildItem(config, isPrimary))} 
        onClose={() => dispatch(hideNewItemDialog())} 
      />
      <SelectCursorItemDialog
        isVisible={isReparentDialogVisible}
        itemsToReparent={[cursorItem]}
        onCursorItem={(cursorItem) => dispatch(setItemParent(cursorItem))}
        onClose={() => dispatch(hideReparentDialog())}
        config={config}
        styles={styles}
      />
      <SelectCursorItemDialog
        isVisible={isSelectedItemsReparentDialogVisible}
        itemsToReparent={selectedItems}
        onCursorItem={(cursorItem) => dispatch(setSelectedItemsParent(cursorItem))}
        onClose={() => dispatch(hideSelectedItemsReparentDialog())}
        config={config}
        styles={styles}
      />
      {isPdfDialogOpen && <OrgPdfViewDialog 
        isVisible={isPdfDialogOpen}
        config={config}
        fileName="orgeditor.pdf"
        caption="Organizational Chart Editor Demo"
        onClose= {() => setPdfDialogOpen(false)} 
        />
      }
    </>
  );
}

export default OrgEditor;
