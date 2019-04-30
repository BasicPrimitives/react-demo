import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  Grid, Col, Row, Tab, NavItem, Nav, Well, NavDropdown, MenuItem, Button, Navbar
} from 'react-bootstrap';
import {
  OrgDiagram,
  OrgDiagramConfig,
  AutoLayoutOptionsPanel,
  DefaultTemplateOptionsPanel,
  GroupTitlesOptionsPanel,
  MinimizedItemsOptionsPanel,
  IntervalsOptionsPanel,
  ConnectorsOptionsPanel,
  LabelsOptionsPanel,
  CalloutOptionsPanel,
  InteractivityOptionsPanel,
  RenderingOptionsPanel
} from 'components';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import {
  load,
  isLoaded,
  setCursorItem,
  setSelectedItems,
  setClickedButton,
  setConfigOption,
  setTemplateOption,
  UserActionType
} from 'redux/modules/demos/largeorganizationalchart';

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    if (!isLoaded(getState())) {
      await dispatch(load()).catch(() => null);
    }
    return Promise.resolve();
  }
})
@connect(
  state => ({
    centerOnCursor: state.largeorganizationalchart.centerOnCursor,
    config: state.largeorganizationalchart.config,
    userAction: state.largeorganizationalchart.userAction,
    itemsHash: state.largeorganizationalchart.itemsHash
  }),
  dispatch => bindActionCreators(
    {
      load,
      isLoaded,
      setCursorItem,
      setSelectedItems,
      setClickedButton,
      setConfigOption,
      setTemplateOption,
      UserActionType
    },
    dispatch
  )
)
class LargeHierarchy extends Component {
  static propTypes = {
    centerOnCursor: PropTypes.bool.isRequired,
    config: OrgDiagramConfig().isRequired,
    itemsHash: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    userAction: PropTypes.shape({
      type: PropTypes.oneOf(Object.values(UserActionType)),
      buttonName: PropTypes.string,
      itemId: PropTypes.number
    }).isRequired,
    load: PropTypes.func.isRequired,
    setCursorItem: PropTypes.func.isRequired,
    setSelectedItems: PropTypes.func.isRequired,
    setClickedButton: PropTypes.func.isRequired,
    setConfigOption: PropTypes.func.isRequired,
    setTemplateOption: PropTypes.func.isRequired
  };

  getActionMessage() {
    const { config, itemsHash, userAction } = this.props;
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
        return `User changed cursor to item ${item.title}`;
      }
      default:
        return 'Unknown action.';
    }
  }

  render() {
    const styles = require('./LargeHierarchy.scss');
    const {
      centerOnCursor,
      config,
      load, // eslint-disable-line no-shadow
      setCursorItem, // eslint-disable-line no-shadow
      setSelectedItems, // eslint-disable-line no-shadow
      setClickedButton, // eslint-disable-line no-shadow
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
                  <Navbar.Brand>Large Hierarchy Diagram</Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Navbar.Form pullRight>
                    <Button onClick={load}>Reset</Button>
                  </Navbar.Form>
                </Navbar.Collapse>
              </Navbar>
              <OrgDiagram
                className={styles.placeholder}
                centerOnCursor={centerOnCursor}
                config={config}
                onCursorChanging={data => {
                  const { context } = data;
                  setCursorItem(context.id);
                  // Set data.cancel to true in order to suppress set cursor item in control
                  // it will be updated via subsequent state change and rendering event
                  data.cancel = true;
                }}
                onButtonClick={({ name, context }) => {
                  setClickedButton(name, context.id);
                }}
                onSelectionChanged={(data, selectedItems) => {
                  setSelectedItems(selectedItems);
                }}
                onItemRender={({ context, element, templateName }) => {
                  // eslint-disable-line no-unused-vars
                  switch (templateName) {
                    case 'defaultTemplate':
                      ReactDOM.render(
                        <div className={`bp-item bp-corner-all bt-item-frame ${styles.default_template}`}>
                          <div className={`bp-item bp-corner-all bp-title-frame ${styles.background}`} style={{ backgroundColor: context.itemTitleColor }}>
                            <div className={`bp-item bp-title ${styles.title}`}>{context.title}</div>
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
                            <div className={`bp-item bp-title ${styles.title}`}>{context.title}</div>
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
              <p>In order to make possible navigation of large hierarchies, widget folds as many nodes as needed in order to fit chart into available screen space.</p>
              <p>Widget shows full size cursor item and its immediate children and parents, so user can click them and navigate further around current cursor item.</p>
              <p>Widget supports selected (checked marked) items collection, all of them stay in full size so user can see them all the time during navigation around hierarchy.</p>
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
                        setOption={(name, value) => {
                          setTemplateOption('defaultTemplate', name, value);
                        }}
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
