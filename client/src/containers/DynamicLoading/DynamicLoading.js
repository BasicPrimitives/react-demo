import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import { batch, useSelector, useDispatch } from 'react-redux';
import MDReactComponent from 'markdown-react-js';
import { OrgDiagram } from 'basicprimitivesreact';
import primitives from 'basicprimitives';
import {
  load,
  loadMarkdown,
  setCursorItem,
  setSelectedItems,
  setClickedButton,
  setConfigOption,
  setTemplateOption,
  UserActionType
} from 'redux/modules/demos/dynamicloading';
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
  OrgPdfViewDialog
} from 'components';

function DynamicLoading() {
  const loaded = useSelector(state => state.dynamicloading.loaded); 
  const markdown = useSelector(state => state.dynamicloading.markdown); 
  const centerOnCursor = useSelector(state => state.dynamicloading.centerOnCursor); 
  const config = useSelector(state => state.dynamicloading.config); 
  const userAction = useSelector(state => state.dynamicloading.userAction); 
  const itemsHash = useSelector(state => state.dynamicloading.itemsHash); 
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isPdfDialogOpen, setPdfDialogOpen] = React.useState(false);

  const styles = useStyles();
  const theme = useTheme();

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

  function getActionMessage() {
    switch (userAction.type) {
      case UserActionType.ContextButtonClick: {
        const item = itemsHash[userAction.itemId];
        return `Use clicked context button ${userAction.buttonName} for item ${item.title}`;
      }
      case UserActionType.SelectedItems: {
        const selectedNames = config.selectedItems.map(itemid => itemsHash[itemid].title);
        return `User selected following items ${selectedNames.join(', ')}`;
      }
      case UserActionType.ChangedCursor: {
        const item = itemsHash[config.cursorItem];
        return `User changed cursor to item ${item.title}`;
      }
      default:
        return 'No actions yet.';
    }
  }

  const snackbarMessage = getActionMessage();
  const templateConfig = config.templates.find(template => template.name === 'defaultTemplate');
  const contactTemplateConfig = config.templates.find(template => template.name === 'contactTemplate');
  return (
    <>
      <Helmet>
        <title>- Dynamic Organizational Chart Nodes Loading</title>
        <meta name="description" content="Application demonstrates dynamic nodes loading as user browses through hierarchy. Application automatically expands and collapses branches visited by user. Open sources. Universal React architecture. JavaScript. Supports client side PDf rendering and download." />
      </Helmet>
      <h1>Dynamic Organizational Chart Nodes Loading</h1>
      <div className={styles.buttonsPanel}>
        <Button 
          key="options"
          variant="contained"
          color="primary"
          onClick={() => handleDrawerOpen()}
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
      </div>
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
                    dispatch(setClickedButton("user", itemConfig.id));
                  }}
                >
                  <PersonIcon />
                </Button>
                <Button key="remove"
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch(setClickedButton("remove", itemConfig.id));
                  }}
                >
                  <RemoveCircleOutlineIcon />
                </Button>
                <Button key="cog"
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch(setClickedButton("cog", itemConfig.id));
                  }}
                >
                  <SettingsIcon />
                </Button>
              </ButtonGroup>
            }),
            templates: [
              {
                ...templateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue;
                  return <div className={styles.DefaultTemplate}>
                    <div className={styles.DefaultTitleBackground} style={{ backgroundColor: itemTitleColor }}>
                      <div className={styles.DefaultTitle}>{itemConfig.title}</div>
                    </div>
                    <div className={styles.DefaultPhotoFrame}>
                      <img className={styles.DefaultPhoto} src={itemConfig.image} alt={itemConfig.title} />
                    </div>
                    <div className={styles.DefaultEmail}>{itemConfig.email}</div>
                    <div className={styles.DefaultDescription}>{itemConfig.description}</div>
                  </div>;
                },
                onHighlightRender: ({ context: itemConfig }) => {
                  return <div className={styles.HighlightFrame} style={{ borderColor: itemConfig.itemTitleColor }}>
                    <div className={styles.HighlightBadgePlaceholder}>
                      <div className={styles.HighlightBadge} style={{ backgroundColor: itemConfig.itemTitleColor }}>
                        {itemConfig.childrencount}
                      </div>
                    </div>
                  </div>
                }
              },
              {
                ...contactTemplateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue;
                  return <div className={styles.ContactTemplate}>
                    <div className={styles.ContactTitleBackground} style={{ backgroundColor: itemTitleColor }}>
                      <div className={styles.ContactTitle}>{itemConfig.title}</div>
                    </div>
                    <div className={styles.ContactPhotoFrame}>
                      <img className={styles.ContactPhoto} src={itemConfig.image} alt={itemConfig.title} />
                    </div>
                    <div className={styles.ContactPhone}>{itemConfig.phone}</div>
                    <div className={styles.ContactEmail}>{itemConfig.email}</div>
                    <div className={styles.ContactDescription}>{itemConfig.description}</div>
                  </div>;
                },
                onHighlightRender: ({ context: itemConfig }) => {
                  return <div className={styles.HighlightFrame} style={{ borderColor: itemConfig.itemTitleColor }}>
                    <div className={styles.HighlightBadgePlaceholder}>
                      <div className={styles.HighlightBadge} style={{ backgroundColor: itemConfig.itemTitleColor }}>
                        {itemConfig.childrencount}
                      </div>
                    </div>
                  </div>
                }
              }
            ]
          }}
          onCursorChanging={(event, data) => {
            const { context } = data;
            dispatch(setCursorItem(context.id));
            // Return true in order to suppress set cursor item in control
            // it will be updated via subsequent state change and rendering event
            return true;
          }}
          onSelectionChanged={(event, currentSelectedItems, newSelectedItems) => {
            dispatch(setSelectedItems(newSelectedItems));
          }}
        />
      </div>
      <br />
      <code>{snackbarMessage}</code>
      <Container fixed>
        <MDReactComponent text={markdown} />
      </Container>
      {open && <Drawer
          key="options-drawer"
          className={styles.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: styles.drawerPaper,
          }}
        >
          <div key="icon" className={styles.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
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
      {isPdfDialogOpen && <OrgPdfViewDialog 
        isVisible={isPdfDialogOpen}
        config={config}
        fileName="dynamicloading.pdf"
        caption="Dynamic Organizational Chart Nodes Loading"
        onClose= {() => setPdfDialogOpen(false)} 
        />
      }
    </>
  );
}

export default DynamicLoading;
