import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
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
  FamDiagram,
  FamDiagramConfig,
  FamilyOptionsPanel,
  AutoLayoutOptionsPanel,
  DefaultTemplateOptionsPanel,
  GroupTitlesOptionsPanel,
  MinimizedItemsOptionsPanel,
  AnnotationOptionsPanel,
  IntervalsOptionsPanel,
  ConnectorsOptionsPanel,
  LabelsOptionsPanel,
  CalloutOptionsPanel,
  InteractivityOptionsPanel,
  RenderingOptionsPanel,
} from 'components';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import {
  load,
  isLoaded,
  setCursorItem,
  setSelectedItems,
  setAnnotationSource,
  setAnnotationDestination,
  setConfigOption,
  setTemplateOption,
  setAnnotationOption,
  UserActionType
} from 'redux/modules/demos/financialownership';

const primitives = require('basicprimitives');

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
    centerOnCursor: state.financialownership.centerOnCursor,
    config: state.financialownership.config,
    userAction: state.financialownership.userAction,
    itemsHash: state.financialownership.itemsHash
  }),
  dispatch => bindActionCreators({
    load,
    isLoaded,
    setCursorItem,
    setSelectedItems,
    setAnnotationSource,
    setAnnotationDestination,
    setConfigOption,
    setTemplateOption,
    setAnnotationOption,
    UserActionType
  }, dispatch)
)
class FinancialOwnership extends Component {
  static propTypes = {
    centerOnCursor: PropTypes.bool.isRequired,
    config: FamDiagramConfig().isRequired,
    itemsHash: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    userAction: PropTypes.shape({
      type: PropTypes.oneOf(Object.values(UserActionType)),
      buttonName: PropTypes.string,
      itemId: PropTypes.number
    }).isRequired,
    load: PropTypes.func.isRequired,
    setCursorItem: PropTypes.func.isRequired,
    setSelectedItems: PropTypes.func.isRequired,
    setAnnotationSource: PropTypes.func.isRequired,
    setAnnotationDestination: PropTypes.func.isRequired,
    setConfigOption: PropTypes.func.isRequired,
    setTemplateOption: PropTypes.func.isRequired,
    setAnnotationOption: PropTypes.func.isRequired
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
        return `User changed cursor to item ${item.title}`;
      }
      default:
        return 'Unknown action.';
    }
  }

  render() {
    const styles = require('./FinancialOwnership.scss');
    const {
      centerOnCursor,
      config,
      load, // eslint-disable-line no-shadow
      setCursorItem, // eslint-disable-line no-shadow
      setSelectedItems, // eslint-disable-line no-shadow
      setAnnotationSource, // eslint-disable-line no-shadow
      setAnnotationDestination, // eslint-disable-line no-shadow
      setConfigOption, // eslint-disable-line no-shadow
      setTemplateOption, // eslint-disable-line no-shadow
      setAnnotationOption // eslint-disable-line no-shadow
    } = this.props;
    const templateConfig = config.templates.find(template => template.name === 'defaultTemplate');
    const annotationConfig = config.annotations.find(annotation => annotation.annotationType === primitives.common.AnnotationType.Connector);

    return (
      <Grid fluid className={styles.appContent}>
        <Helmet title="Financial Ownership Demo" />
        <Row>
          <Col smPush={4} sm={8} mdPush={3} md={9}>
            <div>
              <Navbar fluid>
                <Navbar.Header>
                  <Navbar.Brand>
                    Financial Ownership Demo
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Navbar.Form pullRight>
                    <Button onClick={() => load()}>Reset</Button>
                  </Navbar.Form>
                </Navbar.Collapse>
              </Navbar>
              <FamDiagram
                className={styles.placeholder}
                centerOnCursor={centerOnCursor}
                config={config}
                onCursorChanging={data => {
                  const { context, parentItems, childrenItems } = data;
                  setCursorItem(context.id, parentItems, childrenItems);
                  // Set data.cancel to true in order to suppress set cursor item in control
                  // it will be updated via subsequent state change and rendering event
                  data.cancel = true;
                }}
                onButtonClick={({ name, context }) => {
                  switch (name) {
                    case 'out':
                      setAnnotationSource(context.id);
                      break;
                    case 'in':
                      setAnnotationDestination(context.id);
                      break;
                    default:
                      break;
                  }
                }}
                onSelectionChanged={(data, selectedItems) => {
                  setSelectedItems(selectedItems);
                }}
                onItemRender={({ context, element, templateName }) => { // eslint-disable-line no-unused-vars
                  switch (templateName) {
                    case 'defaultTemplate':
                      ReactDOM.render(
                        <div className={`bp-item bp-corner-all bt-item-frame ${styles.unit_template}`}>
                          <div className={`bp-item bp-corner-all bp-title-frame ${styles.background}`} style={{ backgroundColor: context.itemTitleColor }}>
                            <div className={`bp-item bp-title ${styles.title}`}>
                              {context.title}
                            </div>
                          </div>
                          <div className={`bp-item ${styles.description}`}>{context.description}</div>
                        </div>,
                        element
                      );
                      break;
                    case 'ShapeTemplate':
                      ReactDOM.render(
                        <div className={`bp-item ${styles.shape_template}`}>
                          <div className={`bp-item ${styles.shape_frame}`}>
                            <img className={styles.shape} src={context.shapeType} alt={context.title} />
                          </div>
                          <div className={`bp-item ${styles.title}`}>
                            {context.title}
                          </div>
                        </div>,
                        element
                      );
                      break;
                    case 'LabelAnnotationTemplate':
                      ReactDOM.render(
                        <div className={`bp-item ${styles.label_annotation_template}`}>
                          <div className={`bp-item ${styles.title}`}>
                            {context.title}
                          </div>
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
              <p>
                Multiple inheritance diagram visualizing financial ownership. Chart supports following features:
              </p>
              <ul>
                <li>
                  <b>Label annotations placed over connection lines.</b>
                  They are used to show percentage of ownership and form cascades of labels when
                  total value label for several children or parents needs to be shown over individual labels
                </li>
                <li>
                  <b>Custom item templates to show geometrical figures</b>
                  This feature allows to show small multiples or regular bar or line charts inside nodes
                </li>
                <li>
                  <b>Inective items</b> are used to show templated nodes in layout having no user interactivity.
                  They are transarent to cursor node neighbourhood visualization and they are not clickable or selectable.
                </li>
                <li>
                  <b>Nodes may have mutial ownership</b>, so control supports loops in parent child relations. See Family demo sample data sets as well.
                </li>
              </ul>
            </div>
          </Col>
          <Col smPull={8} sm={4} mdPull={9} md={3}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="family">
              <Row className="clearfix">
                <Col lgHidden xs={12}>
                  <p />
                  <Nav bsStyle="pills" stacked>
                    <NavDropdown title="Select options panel">
                      <MenuItem eventKey="family">Family Specific</MenuItem>
                      <MenuItem eventKey="autolayout">Auto Layout</MenuItem>
                      <MenuItem eventKey="defaulttemplate">Default Template</MenuItem>
                      <MenuItem eventKey="grouptitles">Group Titles</MenuItem>
                      <MenuItem eventKey="minimizeditems">Minimized Items</MenuItem>
                      <MenuItem eventKey="annotation">Connector Annotation</MenuItem>
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
                    <NavItem eventKey="family">Family Specific</NavItem>
                    <NavItem eventKey="autolayout">Auto Layout</NavItem>
                    <NavItem eventKey="defaulttemplate">Default Template</NavItem>
                    <NavItem eventKey="grouptitles">Group Titles</NavItem>
                    <NavItem eventKey="minimizeditems">Minimized Items</NavItem>
                    <NavItem eventKey="annotation">Connector Annotation</NavItem>
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
                    <Tab.Pane eventKey="family">
                      <FamilyOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
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
                    <Tab.Pane eventKey="annotation">
                      {annotationConfig == null
                        ? <p>No connector annotations found to set options for. Choose another data set.</p>
                        : (
                          <AnnotationOptionsPanel
                            config={annotationConfig}
                            setOption={(name, value) => { setAnnotationOption(primitives.common.AnnotationType.Connector, name, value); }}
                          />
                        )
                      }
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

export default FinancialOwnership;
