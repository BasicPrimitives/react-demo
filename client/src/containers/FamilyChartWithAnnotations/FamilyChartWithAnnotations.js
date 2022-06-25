import React, { useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { batch, useSelector, useDispatch } from 'react-redux';
import MDReactComponent from 'markdown-react-js';
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
} from 'redux/modules/demos/familychartwithannotations';
import { OptionsPanel } from 'components';
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
} from 'components';
  

function FamilyChartWithAnnotations() {
  const loaded = useSelector(state => state.familychartwithannotations.loaded); 
  const markdown = useSelector(state => state.familychartwithannotations.markdown); 
  const datasetName = useSelector(state => state.familychartwithannotations.datasetName); 
  const datasetNames = useSelector(state => state.familychartwithannotations.datasetNames); 
  const centerOnCursor = useSelector(state => { 
    return state.familychartwithannotations.centerOnCursor
  }); 
  const config = useSelector(state => state.familychartwithannotations.config); 
  const userAction = useSelector(state => state.familychartwithannotations.userAction); 
  const itemsHash = useSelector(state => state.familychartwithannotations.itemsHash); 
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
            dispatch(load(datasetName));
            dispatch(setConfigOption('scale', (isMobile ? 0.5 : 1)));
            dispatch(loadMarkdown());
          })
        }
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []/* run only once */);

  function getActionMessage(config, userAction, itemsHash) {
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

  function getOptionsPanelConfig(datasetNames, annotationConfig) {
    return [{ title: "Family Samples", 
        namespace: "datasets",
        options: [
          { optionType: "RadioBoxConfig", name: "datasetName", caption: "Names", options: datasetNames, valueType: "string" },
        ]
      }, 
      FamilyLayoutOptions,
      DefaultTemplateOptions,
      (annotationConfig !== undefined ? ConnectorAnnotationOptions : undefined),
      GroupTitlesOptions,
      MarkersOptions,
      IntervalsOptions,
      ConnectorsOptions,
      LabelsOptions,
      CalloutOptions,
      InteractivityOptions,
      RenderingOptions,
      FrameOptions
    ].filter(items => items);
  }

  const snackbarMessage = useMemo(() => getActionMessage(config, userAction, itemsHash), [config, userAction, itemsHash]);
  const templateConfig = config.templates.find(template => template.name === 'defaultTemplate');
  const contactTemplateConfig = config.templates.find(template => template.name === 'contactTemplate');
  const miniTemplateConfig = config.templates.find(template => template.name === 'miniTemplate');
  const annotationConfig = config.annotations.find(annotation => annotation.name === "usercontrolledconnector");
  const optionsPanelConfig = useMemo(() => getOptionsPanelConfig(datasetNames, annotationConfig), [datasetNames, annotationConfig]);

  return (
    <>
      <Helmet>
        <title>- Family Chart Visualization and Annotations</title>
        <meta name="description" content="Application demonstrates various inheritance and dependency graphs auto layout and rendering. Open source. Universal React architecture. JavaScript. Supports client side PDf rendering and download." />
      </Helmet>
      <h1>Family Chart with Annotations</h1>
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
          onClick={() => dispatch(load(datasetName))}
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
            optionsPanelConfig={optionsPanelConfig} 
            config={config} 
            defaultTemplate={templateConfig} 
            annotation={annotationConfig}
            datasets={{datasetName}}
            onChange = {(namespace, name, value) => {
              switch(namespace) {
                case 'defaultTemplate':
                  dispatch(setTemplateOption('defaultTemplate', name, value));
                  break;
                case 'annotation':
                  dispatch(setAnnotationOption(AnnotationType.Connector, name, value));
                  break;
                case 'datasets':
                  dispatch(load(value));
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
        fileName="familychartwithannotations.pdf"
        caption="Family Chart with Annotations Demo"
        onClose= {() => setPdfDialogOpen(false)} 
        />
      }
    </>
  );
}

export default FamilyChartWithAnnotations;
