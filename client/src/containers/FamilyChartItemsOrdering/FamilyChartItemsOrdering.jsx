import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { batch, useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { FamDiagram } from 'basicprimitivesreact';
import { Colors, AnnotationType } from 'basicprimitives';
import { isMobile } from 'react-device-detect';
import {
  load,
  loadMarkdown,
  setCursorItem,
  setHighlightAnnotations,
  setSelectedItems,
  setAnnotationSource,
  setAnnotationDestination,
  setConfigOption,
  setTemplateOption,
  setAnnotationOption,
  UserActionType
} from '@/redux/modules/demos/familychartitemsordering';
import { OptionsPanel } from '@/components';
import useStyles from  './styles';
import { FamilyLayoutOptions,
  DefaultTemplateOptions,
  ConnectorAnnotationOptions,
  GroupTitlesOptions,
  MarkersOptions,
  IntervalsOptions,
  ConnectorsOptions,
  LabelsOptions,
  CalloutOptions,
  InteractivityOptions,
  RenderingOptions,
  FrameOptions,
  FamPdfViewDialog
} from '@/components';
  

function FamilyChartItemsOrdering() {
  const loaded = useSelector(state => state.familychartitemsordering.loaded); 
  const markdown = useSelector(state => state.familychartitemsordering.markdown); 
  const centerOnCursor = useSelector(state => { 
    return state.familychartitemsordering.centerOnCursor
  }); 
  const config = useSelector(state => state.familychartitemsordering.config); 
  const userAction = useSelector(state => state.familychartitemsordering.userAction); 
  const itemsHash = useSelector(state => state.familychartitemsordering.itemsHash); 
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
            dispatch(setConfigOption('scale', (isMobile ? 0.5 : 1)));
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
  const miniTemplateConfig = config.templates.find(template => template.name === 'miniTemplate');
  const annotationConfig = config.annotations.find(annotation => annotation.name === "usercontrolledconnector");
  return (
    <>
      <Helmet>
        <title>- Family Chart Nodes Order</title>
        <meta name="description" content="Application shows user guided nodes ordering in the inheritance diagram. It respects children and marriages order. Open sources. Universal React architecture. JavaScript. Supports client side PDf rendering and download." />
      </Helmet>
      <h1>Family Chart Nodes Order</h1>
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
        <FamDiagram
          centerOnCursor={centerOnCursor}
          config={{
            ...config,
            annotations: (config.annotations && config.annotations.map(annotation => {
              const { label, title } = annotation;
              if (label != null) {
                const { badge, color, title } = annotation.label;
                return {
                  ...annotation,
                  label: <><div className={styles.Badge} style={{
                    backgroundColor: color
                  }}>{badge}</div><span className={styles.BadgeLabel}>{title}</span></>
                }
              }
              if (title != null) {
                return {
                  ...annotation,
                  title: <div className={styles.InLayoutLabel}>{title}</div>
                }
              }
              return annotation;
            })),
            onButtonsRender: (({ context: itemConfig }) => {
              return <ButtonGroup orientation="vertical" size="small" variant="text">
                <Button key="out"
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch(setAnnotationSource(itemConfig.id));
                  }}
                >
                  <ArrowForwardIcon />
                </Button>
                <Button key="in"
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch(setAnnotationDestination(itemConfig.id));
                  }}
                >
                  <ArrowBackIcon />
                </Button>
              </ButtonGroup>
            }),
            templates: [
              {
                ...templateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
                  return <div className={styles.DefaultTemplate}>
                    <div className={styles.DefaultTitleBackground} style={{ backgroundColor: itemTitleColor }}>
                      <div className={styles.DefaultTitle}>{itemConfig.title}</div>
                    </div>
                    <div className={styles.DefaultPhotoFrame}>
                      <img className={styles.DefaultPhoto} src={itemConfig.image} alt={itemConfig.title} />
                    </div>
                    <div className={styles.DefaultDescription}>{itemConfig.description}</div>
                  </div>;
                }
              },
              {
                ...contactTemplateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
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
                }
              },
              {
                ...miniTemplateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
                  return <div className={styles.MiniTemplate}>
                    <div className={styles.MiniTitleBackground} style={{ backgroundColor: itemTitleColor }}>
                      <div className={styles.MiniTitle}>{itemConfig.title}</div>
                    </div>
                  </div>;
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
          onHighlightChanging={(event, data) => {
            const { context: itemConfig } = data;
            const id = itemConfig && itemConfig.id;
            dispatch(setHighlightAnnotations(id));
          }}
        />
      </div>
      <br />
      <code>{snackbarMessage}</code>
      <Container fixed>
        <ReactMarkdown>{markdown}</ReactMarkdown>
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
            optionsPanelConfig={[ FamilyLayoutOptions,
              DefaultTemplateOptions,
              ConnectorAnnotationOptions,
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
            annotation={annotationConfig}
            onChange = {(namespace, name, value) => {
              switch(namespace) {
                case 'defaultTemplate':
                  dispatch(setTemplateOption('defaultTemplate', name, value));
                  break;
                case 'annotation':
                  dispatch(setAnnotationOption(AnnotationType.Connector, name, value));
                  break;
                default:
                  dispatch(setConfigOption(name, value)) 
                  break;
              }
            }} 
          />
        </Drawer>
      }
      {isPdfDialogOpen && <FamPdfViewDialog 
        isVisible={isPdfDialogOpen}
        config={config}
        fileName="familychartitemsordering.pdf"
        caption="Family Chart Items Ordering Demo"
        onClose= {() => setPdfDialogOpen(false)} 
        />
      }
    </>
  );
}

export default FamilyChartItemsOrdering;
