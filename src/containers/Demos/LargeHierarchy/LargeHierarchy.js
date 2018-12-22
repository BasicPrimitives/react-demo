import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { batchActions } from 'redux/middleware/batchedActions';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  Grid,
  Col,
  Row,
  Tab,
  NavItem,
  Nav,
  Well,
  NavDropdown,
  MenuItem,
  Button,
  Navbar
} from 'react-bootstrap';
import {
  OrgDiagram,
  Config,
  AutoLayoutOptionsPanel,
  DefaultTemplateOptionsPanel,
  GroupTitlesOptionsPanel,
  MinimizedItemsOptionsPanel,
  IntervalsOptionsPanel,
  ConnectorsOptionsPanel,
  LabelsOptionsPanel,
  CalloutOptionsPanel,
  InteractivityOptionsPanel,
  RenderingOptionsPanel,
} from 'components';
import primitives from 'basicprimitives';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import {
  load,
  isLoaded,
  setCursorItem,
  setSelectedItems,
  setUserAction,
  setItemOptions,
  setConfig,
  setConfigOption,
  setTemplateOption,
  UserActionType
} from 'redux/modules/demoorganizationalchart';

const configuration = {
  pageFitMode: primitives.common.PageFitMode.FitToPage,
  cursorItem: 0,
  hasSelectorCheckbox: primitives.common.Enabled.True,
  items: [],
  hasButtons: primitives.common.Enabled.Auto,
  buttons: [
    {
      name: 'delete',
      icon: 'remove',
      tooltip: 'Delete'
    },
    {
      name: 'properties',
      icon: 'cog',
      tooltip: 'Info'
    },
    {
      name: 'add',
      icon: 'user',
      tooltip: 'Add'
    }
  ],
  defaultTemplateName: 'defaultTemplate',
  templates: [
    {
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
      name: 'contactTemplate',
      itemSize: new primitives.common.Size(220, 120)
    }
  ]
};

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    if (!isLoaded(getState())) {
      // The following 3 dispatch actions force React to render content 3 times
      dispatch(setConfig(configuration));
      await dispatch(load('largeorganizationalchart')).then(
        () => {
          const state = getState();
          const { cursorItem } = state.demoOrganizationalChart.config;
          dispatch(setItemOptions(cursorItem, { templateName: 'contactTemplate', showCallout: primitives.common.Enabled.True }));
        }
      ).catch(() => null);
    }
    return Promise.resolve();
  }
})
@connect(
  state => ({
    config: state.demoOrganizationalChart.config,
    userAction: state.demoOrganizationalChart.userAction,
    itemsHash: state.demoOrganizationalChart.itemsHash
  }),
  dispatch => ({
    ...(bindActionCreators({
      load,
      setUserAction,
      setConfig,
      setConfigOption,
      setTemplateOption,
    }, dispatch)),
    setCursorItem: (prevId, newId) => {
      // batchActions runs collection of actions sequentially and triggers single rendering cycle on UI
      // See https://github.com/tshelburne/redux-batched-actions for more details
      // We can define a single action in reducer instead of running all of them one by one
      // The goal is to keep actions related to UI state changes here in the scope of this component
      dispatch(batchActions([
        setCursorItem(newId),
        setItemOptions(prevId, { templateName: null, showCallout: primitives.common.Enabled.Auto }),
        setItemOptions(newId, { templateName: 'contactTemplate', showCallout: primitives.common.Enabled.True }),
        setUserAction(UserActionType.ChangedCursor)
      ]));
    },
    setSelectedItems: items => {
      dispatch(batchActions([
        setSelectedItems(items),
        setUserAction(UserActionType.SelectedItems)
      ]));
    },
    resetContent: async () => {
      dispatch(setConfig(configuration));
      await dispatch(load('largeorganizationalchart')).then(
        () => {
          dispatch(setItemOptions(configuration.cursorItem, { templateName: 'contactTemplate', showCallout: primitives.common.Enabled.True }));
        }
      ).catch(() => null);
    }
  })
)
class LargeHierarchy extends Component {
  static propTypes = {
    config: Config().isRequired,
    itemsHash: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    userAction: PropTypes.shape({
      type: PropTypes.oneOf(Object.values(UserActionType)),
      buttonName: PropTypes.string,
      itemId: PropTypes.number
    }).isRequired,
    setCursorItem: PropTypes.func.isRequired,
    resetContent: PropTypes.func.isRequired,
    setSelectedItems: PropTypes.func.isRequired,
    setUserAction: PropTypes.func.isRequired,
    setConfigOption: PropTypes.func.isRequired,
    setTemplateOption: PropTypes.func.isRequired
  };

  getActionMessage() {
    const {
      config,
      itemsHash,
      userAction,
    } = this.props;
    switch (userAction.type) {
      case UserActionType.None:
        return 'No user actions yet.';
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
        return `Use changed cursor to item ${item.title}`;
      }
      default:
        return 'Unknown action.';
    }
  }

  render() {
    const styles = require('./LargeHierarchy.scss');
    const {
      config,
      setCursorItem, // eslint-disable-line no-shadow
      setSelectedItems, // eslint-disable-line no-shadow
      setUserAction, // eslint-disable-line no-shadow
      resetContent, // eslint-disable-line no-shadow
      setConfigOption, // eslint-disable-line no-shadow
      setTemplateOption // eslint-disable-line no-shadow
    } = this.props;
    const templateConfig = config.templates.find(template => template.name === 'defaultTemplate');

    return (
      <Grid fluid className={styles.appContent}>
        <Helmet title="Large Organizational Chart Demo" />
        <Row>
          <Col smPush={4} sm={8} mdPush={3} md={9}>
            <div>
              <Navbar fluid>
                <Navbar.Header>
                  <Navbar.Brand>
                    Large Hierarchy Diagram
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Navbar.Form pullRight>
                    <Button onClick={resetContent}>Reset</Button>
                  </Navbar.Form>
                </Navbar.Collapse>
              </Navbar>
              <OrgDiagram
                className={styles.placeholder}
                config={config}
                onCursorChanging={data => {
                  const { context, oldContext } = data;
                  setCursorItem(oldContext.id, context.id);
                  // Set data.cancel to true in order to suppress set cursor item in control
                  // it will be updated via subsequent state change and rendering event
                  data.cancel = true;
                }}
                onButtonClick={({ name, context }) => {
                  setUserAction(UserActionType.ContextButtonClick, name, context.id);
                }}
                onSelectionChanged={(data, selectedItems) => {
                  setSelectedItems(selectedItems);
                }}
                onItemRender={({ context, element, templateName }) => { // eslint-disable-line no-unused-vars
                  switch (templateName) {
                    case 'defaultTemplate':
                      ReactDOM.render(
                        <div className={`bp-item bp-corner-all bt-item-frame ${styles.default_template}`}>
                          <div className={`bp-item bp-corner-all bp-title-frame ${styles.background}`} style={{ backgroundColor: context.itemTitleColor }}>
                            <div className={`bp-item bp-title ${styles.title}`}>
                              {context.title}
                            </div>
                          </div>
                          <div className={`bp-item bp-photo-frame ${styles.photo_frame}`}>
                            <img className={styles.photo} src={context.image} alt={context.title} />
                          </div>
                          <div className={`bp-item ${styles.description}`}>{context.description}</div>
                        </div>,
                        element
                      );
                      break;
                    case 'contactTemplate':
                      ReactDOM.render(
                        <div className={`bp-item bp-corner-all bt-item-frame ${styles.contact_template}`}>
                          <div className={`bp-item bp-corner-all bp-title-frame ${styles.background}`} style={{ backgroundColor: context.itemTitleColor }}>
                            <div className={`bp-item bp-title ${styles.title}`}>
                              {context.title}
                            </div>
                          </div>
                          <div className={`bp-item bp-photo-frame ${styles.photo_frame}`}>
                            <img className={styles.photo} src={context.image} alt={context.title} />
                          </div>
                          <div className={`bp-item ${styles.phone}`}>{context.phone}</div>
                          <div className={`bp-item ${styles.email}`}>{context.email}</div>
                          <div className={`bp-item ${styles.description}`}>{context.description}</div>
                        </div>,
                        element
                      );
                      break;
                    default:
                      break;
                  }
                }}
              />
              <br />
              <Well bsSize="small">{this.getActionMessage()}</Well>
            </div>
          </Col>
          <Col smPull={8} sm={4} mdPull={9} md={3}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="autolayout">
              <Row className="clearfix">
                <Col lgHidden xs={12}>
                  <p />
                  <Nav bsStyle="pills" stacked>
                    <NavDropdown title="Select options panel">
                      <MenuItem eventKey="autolayout">Auto Layout</MenuItem>
                      <MenuItem eventKey="defaulttemplate">Default Template</MenuItem>
                      <MenuItem eventKey="grouptitles">Group Titles</MenuItem>
                      <MenuItem eventKey="minimizeditems">Minimized Items</MenuItem>
                      <MenuItem eventKey="intervals">Intervals</MenuItem>
                      <MenuItem eventKey="connectors">Connectors</MenuItem>
                      <MenuItem eventKey="labels">Labels</MenuItem>
                      <MenuItem eventKey="callout">Callout</MenuItem>
                      <MenuItem eventKey="interactivity">Interactivity</MenuItem>
                      <MenuItem eventKey="rendering">Rendering</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Col>
                <Col xsHidden smHidden mdHidden lg={5}>
                  <h4>Options</h4>
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="autolayout">Auto Layout</NavItem>
                    <NavItem eventKey="defaulttemplate">Default Template</NavItem>
                    <NavItem eventKey="grouptitles">Group Titles</NavItem>
                    <NavItem eventKey="minimizeditems">Minimized Items</NavItem>
                    <NavItem eventKey="intervals">Intervals</NavItem>
                    <NavItem eventKey="connectors">Connectors</NavItem>
                    <NavItem eventKey="labels">Labels</NavItem>
                    <NavItem eventKey="callout">Callout</NavItem>
                    <NavItem eventKey="interactivity">Interactivity</NavItem>
                    <NavItem eventKey="rendering">Rendering</NavItem>
                  </Nav>
                </Col>
                <Col xs={12} lg={7}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="autolayout">
                      <AutoLayoutOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="defaulttemplate">
                      <DefaultTemplateOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="grouptitles">
                      <GroupTitlesOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="minimizeditems">
                      <MinimizedItemsOptionsPanel
                        config={templateConfig}
                        setOption={(name, value) => { setTemplateOption('defaultTemplate', name, value); }}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="intervals">
                      <IntervalsOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="connectors">
                      <ConnectorsOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="labels">
                      <LabelsOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="callout">
                      <CalloutOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="interactivity">
                      <InteractivityOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="rendering">
                      <RenderingOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LargeHierarchy;
