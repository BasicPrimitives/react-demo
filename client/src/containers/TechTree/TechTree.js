import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
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
import { ConnectorAnnotationConfig, Colors, AnnotationType, TemplateConfig, Size, Thickness, highestContrast } from 'basicprimitives';
import { isMobile } from 'react-device-detect';
import {
  load,
  loadMarkdown,
  setCursorItem,
  setSelectedItems,
  setConfigOption,
  setTemplateOption,
  setAnnotationOption,
  UserActionType
} from 'redux/modules/demos/techtree';
import { OptionsPanel } from 'components';
import useStyles from  './styles';
import { FamilyLayoutOptions,
  DefaultTemplateOptions,
  ConnectorAnnotationOptions,
  GroupTitlesOptions,
  LevelTitlesOptions,
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
  

function TechTree() {
  const loaded = useSelector(state => state.techtree.loaded); 
  const markdown = useSelector(state => state.techtree.markdown); 
  const centerOnCursor = useSelector(state => { 
    return state.techtree.centerOnCursor
  }); 
  const config = useSelector(state => state.techtree.config); 
  const userAction = useSelector(state => state.techtree.userAction); 
  const itemsHash = useSelector(state => state.techtree.itemsHash); 
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
  const dotTemplateConfig = config.templates.find(template => template.name === 'dot');
  const annotationConfig = config.annotations.find(annotation => annotation.name === "usercontrolledconnector") || new ConnectorAnnotationConfig({offset: 2});
  return (
    <>
      <Helmet>
        <title>- Family Diagram Primary Parent Demo</title>
        <meta name="description" content="Application visualizes tech tree chart." />
      </Helmet>
      <h1>Dependency Graph Primary Parents</h1>
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
              if(annotation.annotationType !== AnnotationType.Level) {
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
              }
              return annotation;
            })),
            templates: [
              {
                ...templateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
                  return <div className={styles.DefaultTemplate}>
                    <div className={styles.DefaultTitleBackground} style={{ backgroundColor: itemTitleColor }}>
                      <div className={styles.DefaultTitle}>{itemConfig.title}</div>
                    </div>
                  </div>;
                }
              },
              {
                ...dotTemplateConfig,
                onItemRender: ({ context: itemConfig }) => {
                  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
                  return <div className={styles.DotTemplate}>
                    <div className={styles.DotTitleBackground} style={{ backgroundColor: itemTitleColor }} />
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
              LevelTitlesOptions,
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
        fileName="techtree.pdf"
        caption="Tech Tree Demo"
        onClose= {() => setPdfDialogOpen(false)}
        templates={[
          {
            ...(new TemplateConfig()),
            name: "defaultTemplate",
            itemTemplate: "Use onItemRener method.",
            itemSize: new Size(164, 34),
            highlightPadding: new Thickness(2, 2, 2, 2)
          }
        ]}
        onItemRender={(doc, position, data) => {
          var itemConfig = data.context,
            itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue,
            color = highestContrast(itemTitleColor, config.itemTitleSecondFontColor, config.itemTitleFirstFontColor);
  
          if (data.templateName === "defaultTemplate") {
            var contentSize = new Size(164, 34);
  
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

export default TechTree;
