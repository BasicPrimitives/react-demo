import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Drawer from '@mui/material/Drawer';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { batch, useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { OrgDiagram } from 'basicprimitivesreact';
import { HorizontalAlignmentType, Colors } from 'basicprimitives';
import { isMobile } from 'react-device-detect';
import {
  load,
  loadMarkdown,
  setCursorItem,
  setSelectedItems,
  setClickedButton,
  setConfigOption,
  setTemplateOption,
  switchLTR,
  UserActionType
} from '@/redux/modules/demos/verticallayoutorganizationalchart';
import { OptionsPanel } from '@/components';
import useStyles from  './styles';
import { AutoLayoutOptions,
  DefaultTemplateOptions,
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
  OrgPdfViewDialog
} from '@/components';

function VerticalLayout() {
  const loaded = useSelector(state => state.verticallayoutorganizationalchart.loaded); 
  const markdown = useSelector(state => state.verticallayoutorganizationalchart.markdown); 
  const centerOnCursor = useSelector(state => { 
    return state.verticallayoutorganizationalchart.centerOnCursor
  }); 
  const config = useSelector(state => state.verticallayoutorganizationalchart.config); 
  const userAction = useSelector(state => state.verticallayoutorganizationalchart.userAction); 
  const itemsHash = useSelector(state => state.verticallayoutorganizationalchart.itemsHash); 
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
  const contactTemplateConfig = config.templates.find(template => template.name === 'managerTemplate');
  return (
    <>
      <Helmet>
        <title>- Vertical Layout Organizational Chart</title>
        <meta name="description" content="Organizational chart application demonstrates vertical children layout. Open sources. Universal React architecture. JavaScript. Supports client side PDf rendering and download." />
      </Helmet>
      <h1>Vertical Layout Organizational Chart</h1>
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
        &nbsp;
        <FormControlLabel
          control={
            <Switch
              checked={config.horizontalAlignment === HorizontalAlignmentType.Left}
              onChange={() => dispatch(switchLTR())}
              color="primary"
              name="switchLTR"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Flip"
        />
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
            optionsPanelConfig={[ AutoLayoutOptions,
              DefaultTemplateOptions,
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
        fileName="verticallayout.pdf"
        caption="Vertical Layout Organizational Chart"
        onClose= {() => setPdfDialogOpen(false)} 
        />
      }
    </>
  );
}

export default VerticalLayout;
