import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ClearIcon from '@material-ui/icons/Clear';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { batch, useSelector, useDispatch } from 'react-redux';
import MDReactComponent from 'markdown-react-js';
import { FamDiagram } from 'basicprimitivesreact';
import { isMobile } from 'react-device-detect';
import { ConnectorAnnotationConfig, AnnotationType, TemplateConfig, Size, Thickness, Colors, highestContrast } from 'basicprimitives';
import {
  load,
  loadMarkdown,
  setCursorItem,
  setSelectedItems,
  setConfigOption,
  setTemplateOption,
  setAnnotationOption,
  UserActionType,
  setAnnotationSource,
  setAnnotationDestination
} from 'redux/modules/demos/patents';
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
  

function Patents() {
  const loaded = useSelector(state => state.patents.loaded); 
  const markdown = useSelector(state => state.patents.markdown); 
  const centerOnCursor = useSelector(state => { 
    return state.patents.centerOnCursor
  }); 
  const config = useSelector(state => state.patents.config); 
  const userAction = useSelector(state => state.patents.userAction); 
  const itemsHash = useSelector(state => state.patents.itemsHash); 
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
  const directTemplateConfig = config.templates.find(template => template.name === 'directTemplate');
  const contactTemplateConfig = config.templates.find(template => template.name === 'contactTemplate');
  const annotationConfig = config.annotations.find(annotation => annotation.name === "usercontrolledconnector") || new ConnectorAnnotationConfig({offset: 2});
  return (
    <>
      <Helmet>
        <title>- Patent Application Dependencies Visualization</title>
        <meta name="description" content="Application demonstrates how to show patent application dependency graph having massive number of direct links to grand parents. Open sources. Universal React architecture. JavaScript. Supports client side PDf rendering and download." />
      </Helmet>
      <h1>Patent Application Dependencies Visualization</h1>
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
                  return <Card className={styles.ContactRoot}>
                  <CardContent>
                    <Typography className={styles.ContactTitle} color="textSecondary" gutterBottom>
                      {{Patented:<DoneIcon />, Abandoned: <ClearIcon />, Expired: <AccessTimeIcon />}[itemConfig.description]}
                      {itemConfig.description}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {itemConfig.title}
                    </Typography>
                  </CardContent>
                </Card>;
                }
              },
              {
                ...directTemplateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  return <Card className={styles.ContactRoot}>
                      <CardContent>
                        <Typography className={styles.ContactTitle} color="textSecondary" gutterBottom>
                          {{Patented:<DoneIcon />, Abandoned: <ClearIcon />, Expired: <AccessTimeIcon />}[itemConfig.description]}
                          {itemConfig.description}
                        </Typography>
                        <Typography variant="h5" component="h2">
                          {itemConfig.title}
                        </Typography>
                        <Typography className={styles.ContactPos} color="textSecondary">
                          
                        </Typography>
                        <Typography variant="body2" component="p">
                          This item has direct relation to the cursor item
                        </Typography>
                      </CardContent>
                    </Card>;
                }
              },
              {
                ...contactTemplateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  return <Card className={styles.ContactRoot}>
                      <CardContent>
                        <Typography className={styles.ContactTitle} color="textSecondary" gutterBottom>
                          {{Patented:<DoneIcon />, Abandoned: <ClearIcon />, Expired: <AccessTimeIcon />}[itemConfig.description]}
                          {itemConfig.description}
                        </Typography>
                        <Typography variant="h5" component="h2">
                          {itemConfig.title}
                        </Typography>
                        <Typography className={styles.ContactPos} color="textSecondary">
                          This is cursor
                        </Typography>
                        <Typography variant="body2" component="p">
                          Use path annotations to trace related parents
                        </Typography>
                      </CardContent>
                    </Card>;
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
        fileName="patents.pdf"
        caption="Patents Demo"
        onClose= {() => setPdfDialogOpen(false)}
        templates={[
          {
            ...(new TemplateConfig()),
            name: "defaultTemplate",
            itemTemplate: "Use onItemRener method.",
            itemSize: new Size(100, 60),
            highlightPadding: new Thickness(2, 2, 2, 2)
          }
        ]}
        onItemRender={(doc, position, data) => {
          var itemConfig = data.context,
            itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue,
            color = highestContrast(itemTitleColor, config.itemTitleSecondFontColor, config.itemTitleFirstFontColor);
  
          if (data.templateName === "defaultTemplate") {
            var contentSize = new Size(100, 60);
  
            contentSize.width -= 2;
            contentSize.height -= 2;
  
            doc.save();
  
            /* item border */
            doc.roundedRect(position.x, position.y, position.width, position.height, 0)
              .lineWidth(1)
              .stroke('#dddddd');
  
            /* title background */
            doc.fillColor(itemTitleColor)
              .roundedRect(position.x + 2, position.y + 2, (contentSize.width - 4), (contentSize.height - 4), 2)
              .fill();
  
            /* title */
            doc.fillColor(color)
              .font('Helvetica', 12)
              .text(itemConfig.title, position.x + 4, position.y + 4, {
                ellipsis: true,
                width: (contentSize.width - 8),
                height: (contentSize.height - 8),
                align: 'center'
              });
  
            doc.restore();
          }
        }}
        />
      }
    </>
  );
}

export default Patents;
