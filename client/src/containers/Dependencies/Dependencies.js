import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { batch, useSelector, useDispatch } from 'react-redux';
import MDReactComponent from 'markdown-react-js';
import { FamDiagram } from 'basicprimitivesreact';
import primitives from 'basicprimitives';
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
} from 'redux/modules/demos/dependencies';
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
  

function Dependencies() {
  const loaded = useSelector(state => state.dependencies.loaded); 
  const markdown = useSelector(state => state.dependencies.markdown); 
  const centerOnCursor = useSelector(state => { 
    return state.dependencies.centerOnCursor
  }); 
  const config = useSelector(state => state.dependencies.config); 
  const userAction = useSelector(state => state.dependencies.userAction); 
  const itemsHash = useSelector(state => state.dependencies.itemsHash); 
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
  const annotationConfig = config.annotations.find(annotation => annotation.name === "usercontrolledconnector") || new primitives.orgdiagram.ConnectorAnnotationConfig({offset: 2});
  return (
    <>
      <Helmet>
        <title>- Dependency Graph Visualization</title>
        <meta name="description" content="Application visualizes project dependency graph. Open sources. Universal React architecture. JavaScript. Supports client side PDf rendering and download." />
      </Helmet>
      <h1>Dependency Graph Visualization</h1>
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
                    <Typography className={styles.ContactSmall} variant="body2" component="p">
                      {itemConfig.title}
                    </Typography>
                  </Card>;
                }
              },
              {
                ...contactTemplateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  return <Card className={styles.ContactRoot}>
                      <CardContent>
                        <Typography className={styles.ContactTitle} color="textSecondary" gutterBottom>
                          {itemConfig.phone}
                        </Typography>
                        <Typography variant="h5" component="h2">
                          {itemConfig.title}
                        </Typography>
                        <Typography className={styles.ContactPos} color="textSecondary">
                          {itemConfig.email}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {itemConfig.description}
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
                  dispatch(setAnnotationOption(primitives.common.AnnotationType.Connector, name, value));
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
        fileName="dependencies.pdf"
        caption="Dependencies Demo"
        onClose= {() => setPdfDialogOpen(false)}
        templates={[
          {
            ...(new primitives.orgdiagram.TemplateConfig()),
            name: "defaultTemplate",
            itemTemplate: "Use onItemRener method.",
            itemSize: new primitives.common.Size(164, 34),
            highlightPadding: new primitives.common.Thickness(2, 2, 2, 2)
          }
        ]}
        onItemRender={(doc, position, data) => {
          var itemConfig = data.context,
            itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue,
            color = primitives.common.highestContrast(itemTitleColor, config.itemTitleSecondFontColor, config.itemTitleFirstFontColor);
  
          if (data.templateName === "defaultTemplate") {
            var contentSize = new primitives.common.Size(164, 34);
  
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
                align: 'left'
              });
  
            doc.restore();
          }
        }}
        />
      }
    </>
  );
}

export default Dependencies;
