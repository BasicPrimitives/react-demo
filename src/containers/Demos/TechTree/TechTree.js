import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FamDiagram, FamDiagramConfig } from 'basicprimitivesreact';
import {
  Grid, Col, Row, Tab, NavItem, Nav, Well, NavDropdown, MenuItem, Button
} from 'react-bootstrap';
import {
  FamilyOptionsPanel,
  AutoLayoutOptionsPanel,
  DefaultTemplateOptionsPanel,
  MinimizedItemsOptionsPanel,
  IntervalsOptionsPanel,
  ConnectorsOptionsPanel,
  LabelsOptionsPanel,
  CalloutOptionsPanel,
  InteractivityOptionsPanel,
  RenderingOptionsPanel,
  PdfkitHelper
} from 'components';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import {
  load,
  isLoaded,
  setCursorItem,
  setSelectedItems,
  setConfigOption,
  setTemplateOption,
  UserActionType
} from 'redux/modules/demos/techtree';

const primitives = require('basicprimitives');

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    if (!isLoaded(getState())) {
      await dispatch(load()).catch(() => null);
    }
    return Promise.resolve();
  },
  defer: ({ store: { dispatch } }) => dispatch(setConfigOption('scale', (window.devicePixelRatio > 1 ? 0.5 : 1)))
})
@connect(
  state => ({
    centerOnCursor: state.techtree.centerOnCursor,
    config: state.techtree.config,
    userAction: state.techtree.userAction,
    itemsHash: state.techtree.itemsHash
  }),
  dispatch => bindActionCreators(
    {
      load,
      isLoaded,
      setCursorItem,
      setSelectedItems,
      setConfigOption,
      setTemplateOption,
      UserActionType
    },
    dispatch
  )
)
class TechTree extends Component {
  static propTypes = {
    centerOnCursor: PropTypes.bool.isRequired,
    config: FamDiagramConfig.isRequired,
    itemsHash: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    userAction: PropTypes.shape({
      type: PropTypes.oneOf(Object.values(UserActionType)),
      buttonName: PropTypes.string,
      itemId: PropTypes.number
    }).isRequired,
    load: PropTypes.func.isRequired,
    setCursorItem: PropTypes.func.isRequired,
    setSelectedItems: PropTypes.func.isRequired,
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
    const styles = require('./TechTree.scss');
    const {
      centerOnCursor,
      config,
      load, // eslint-disable-line no-shadow
      setCursorItem, // eslint-disable-line no-shadow
      setSelectedItems, // eslint-disable-line no-shadow
      setConfigOption, // eslint-disable-line no-shadow
      setTemplateOption // eslint-disable-line no-shadow
    } = this.props;
    const templateConfig = config.templates.find(template => template.name === 'defaultTemplate');
    const dotTemplateConfig = config.templates.find(template => template.name === 'dot');
    const buttons = <>
      <Button onClick={() => PdfkitHelper.downloadFamDiagram(config, 'techtree.pdf', 'Tech Tree Demo')}>Download PDF</Button>&nbsp;
      <Button onClick={() => load()}>Reset</Button>
    </>;

    return (
      <Grid fluid className={styles.appContent}>
        <Helmet>
          <title>- Family Diagram Primary Parent Demo</title>
          <meta name="description" content="Application visualizes tech tree chart." />
        </Helmet>
        <Row>
          <Col smPush={4} sm={8} mdPush={3} md={9}>
            <div>
              <h2>
                <Grid fluid>
                  <Row>
                    <Col lg={8} md={12}>
                      Dependency Graph Primary Parents
                    </Col>
                    <Col lg={4} xsHidden smHidden mdHidden>
                      <div className="pull-right">
                        {buttons}
                      </div>
                    </Col>
                    <Col md={12} lgHidden>
                      <p />{buttons}
                    </Col>
                  </Row>
                </Grid>
              </h2>
              <div className={styles.placeholder}>
                <FamDiagram
                  className={styles.placeholder}
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
                    templates: [
                      {
                        ...templateConfig,
                        onItemRender: ({ context: itemConfig }) => {
                          const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue;
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
                          const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue;
                          return <div className={styles.DotTemplate}>
                            <div className={styles.DotTitleBackground} style={{ backgroundColor: itemTitleColor }} />
                          </div>;
                        }
                      }
                    ]
                  }}
                  onCursorChanging={(event, data) => {
                    const { context } = data;
                    setCursorItem(context.id);
                    // Return true in order to suppress set cursor item in control
                    // it will be updated via subsequent state change and rendering event
                    return true;
                  }}
                  onSelectionChanged={(event, currentSelectedItems, newSelectedItems) => {
                    setSelectedItems(newSelectedItems);
                  }}
                />
              </div>
              <br />
              <Well bsSize="small">{this.getActionMessage()}</Well>
              <p>This is demo of a dependency graph demostrating usage of <b>primaryParent</b> layout option. It contains around 170 nodes with some of the nodes being arranged into multiple explicit sequences that show the evolution and order of dependency of said nodes. We need to display all of the node sequences together in one hierarchy meanwhile allowing the user to see the seperate individual sequences and their nodes. In order to accomplish this, we can set priority for how nodes should align under their parents. In a family diagram every node may have multiple parents and by default aligns itself to be equally distanced from all of them. In this case however, we are intrested in having nodes be closer or farther away from a specific parent. This is done by giving higher priority to one of its parents. Our family diagram provides the property primaryParent which can be applied to a node. Automatically indicating that the child node or nodes should be alligned closer to said parent within the hierarchy. This property is optional and doesn't change any node relations, so if it is applied to a non-exsisting parent then it will simply be ignored.</p>
              <p>This alignment priority can then be used to create a full sequence, branch or chain of nodes within a grander herarchy. This can be seen if you take a look at the sequence of flight related technologies starting from <i>Subsonic flight</i> and ending with <i>Cutting-Edge Aeronautics</i>.</p>
              <p>In the diagram red connection annotations display <b>primaryParent</b> references to enforce the hierarchy and blue annotations display references enforcing the sorting of nodes within one group.</p>
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
                    <NavItem eventKey="family">Family Specific</NavItem>
                    <NavItem eventKey="autolayout">Auto Layout</NavItem>
                    <NavItem eventKey="defaulttemplate">Default Template</NavItem>
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
                    <Tab.Pane eventKey="family">
                      <FamilyOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="autolayout">
                      <AutoLayoutOptionsPanel config={config} setOption={setConfigOption} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="defaulttemplate">
                      <DefaultTemplateOptionsPanel config={config} setOption={setConfigOption} />
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

export default TechTree;
