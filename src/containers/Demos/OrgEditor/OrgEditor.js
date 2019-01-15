/* eslint-disable no-shadow */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  Grid, Col, Row, Tab, NavItem, Nav, Well, NavDropdown, MenuItem, Button, Navbar, Modal, Form, FormGroup
} from 'react-bootstrap';
import Select from 'react-select';
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
  RenderingOptionsPanel,
  ItemOptionsPanel,
  ItemLayoutOptionsPanel,
  ItemsOrderPanel,
  SelectCursorItemDialog,
  AddNewItemDialog
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
  setItemOption,
  setItemParent,
  setItemsOrder,
  setTemplateOption,
  UserActionType,
  deleteCursorItem,
  addChildItem,
  showConfirmDeleteDialog,
  hideConfirmDeleteDialog,
  showNewItemDialog,
  hideNewItemDialog,
  showReparentDialog,
  hideReparentDialog
} from 'redux/modules/demos/orgeditor';

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
    config: state.orgeditor.config,
    userAction: state.orgeditor.userAction,
    indexes: state.orgeditor.indexes,
    children: state.orgeditor.children,
    isConfirmDeleteDialogVisible: state.orgeditor.isConfirmDeleteDialogVisible,
    isNewItemDialogVisible: state.orgeditor.isNewItemDialogVisible,
    isReparentDialogVisible: state.orgeditor.isReparentDialogVisible
  }),
  dispatch => bindActionCreators(
    {
      load,
      isLoaded,
      setCursorItem,
      setSelectedItems,
      setClickedButton,
      setConfigOption,
      setItemOption,
      setItemParent,
      setItemsOrder,
      setTemplateOption,
      UserActionType,
      deleteCursorItem,
      addChildItem,
      showConfirmDeleteDialog,
      hideConfirmDeleteDialog,
      showNewItemDialog,
      hideNewItemDialog,
      showReparentDialog,
      hideReparentDialog
    },
    dispatch
  )
)
class OrgEditor extends Component {
  static propTypes = {
    isConfirmDeleteDialogVisible: PropTypes.bool.isRequired,
    isNewItemDialogVisible: PropTypes.bool.isRequired,
    isReparentDialogVisible: PropTypes.bool.isRequired,
    config: OrgDiagramConfig().isRequired,
    indexes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
    setItemOption: PropTypes.func.isRequired,
    setItemParent: PropTypes.func.isRequired,
    setItemsOrder: PropTypes.func.isRequired,
    setTemplateOption: PropTypes.func.isRequired,
    deleteCursorItem: PropTypes.func.isRequired,
    addChildItem: PropTypes.func.isRequired,
    showConfirmDeleteDialog: PropTypes.func.isRequired,
    hideConfirmDeleteDialog: PropTypes.func.isRequired,
    showNewItemDialog: PropTypes.func.isRequired,
    hideNewItemDialog: PropTypes.func.isRequired,
    showReparentDialog: PropTypes.func.isRequired,
    hideReparentDialog: PropTypes.func.isRequired
  };

  getActionMessage() {
    const { config, indexes, userAction } = this.props;
    const { cursorItem, selectedItems, items } = config;
    switch (userAction.type) {
      case UserActionType.None:
        return 'No user actions yet.';
      case UserActionType.ContextButtonClick: {
        const { title } = items[indexes[userAction.itemId]];
        return `Use clicked context button ${userAction.buttonName} for item ${title}`;
      }
      case UserActionType.SelectedItems: {
        const selectedNames = selectedItems.map(itemid => items[indexes[itemid]].title);
        return `User selected following items ${selectedNames.join(', ')}`;
      }
      case UserActionType.ChangedCursor: {
        const { title } = items[indexes[cursorItem]];
        return `User changed cursor to item ${title}`;
      }
      default:
        return 'Unknown action.';
    }
  }

  render() {
    const styles = require('./OrgEditor.scss');
    const {
      isConfirmDeleteDialogVisible,
      isNewItemDialogVisible,
      isReparentDialogVisible,
      config,
      indexes,
      children,
      load,
      setCursorItem,
      setSelectedItems,
      setClickedButton,
      setConfigOption,
      setItemOption,
      setItemParent,
      setItemsOrder,
      setTemplateOption,
      deleteCursorItem,
      addChildItem,
      showConfirmDeleteDialog,
      hideConfirmDeleteDialog,
      showNewItemDialog,
      hideNewItemDialog,
      showReparentDialog,
      hideReparentDialog
    } = this.props;
    const { items, cursorItem, templates } = config;

    const templateConfig = templates.find(template => template.name === 'defaultTemplate');
    const itemConfig = (cursorItem && items[indexes[cursorItem]]) || null;
    const cursorChildren = (cursorItem && children[cursorItem] && children[cursorItem].map(id => items[indexes[id]])) || null;

    return (
      <Grid fluid className={styles.appContent}>
        <Helmet title="Organizational Chart Editor Demo" />
        <Row>
          <Col smPush={4} sm={8} mdPush={3} md={9}>
            <div>
              <Navbar fluid>
                <Navbar.Header>
                  <Navbar.Brand>Organizational Chart Editor Demo</Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Navbar.Form pullRight>
                    <Form inline>
                      <FormGroup>
                        <Select
                          className={styles.cursor_search}
                          value={cursorItem}
                          getOptionValue={({ id }) => id}
                          getOptionLabel={({ title }) => title}
                          onChange={({ id }) => setCursorItem(id)}
                          options={items}
                        />
                      </FormGroup>{' '}
                      <FormGroup>
                        <Button onClick={load}>Reset</Button>
                      </FormGroup>
                    </Form>
                  </Navbar.Form>
                </Navbar.Collapse>
              </Navbar>
              <OrgDiagram
                className={styles.placeholder}
                config={config}
                onCursorChanging={data => {
                  const { context } = data;
                  setCursorItem(context.id);
                  // Set data.cancel to true in order to suppress set cursor item in control
                  // it will be updated via subsequent state change and rendering event
                  data.cancel = true;
                }}
                onButtonClick={({ name, context }) => {
                  switch (name) {
                    case 'add':
                      showNewItemDialog();
                      break;
                    case 'delete':
                      showConfirmDeleteDialog();
                      break;
                    case 'move':
                      showReparentDialog();
                      break;
                    default:
                      setClickedButton(name, context.id);
                      break;
                  }
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
              {itemConfig && (
                <React.Fragment>
                  <Col sm={12} md={4}>
                    <ItemOptionsPanel config={itemConfig} setOption={setItemOption} />
                  </Col>
                  <Col sm={12} md={4}>
                    <ItemLayoutOptionsPanel config={itemConfig} setOption={setItemOption} />
                  </Col>
                  {cursorChildren && (
                    <Col sm={12} md={4}>
                      <ItemsOrderPanel items={cursorChildren} setItemsOrder={items => setItemsOrder(items.map(item => item.id))} />
                    </Col>
                  )}
                </React.Fragment>
              )}
              <Modal show={isConfirmDeleteDialogVisible} bsSize="small" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-lg">Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>{indexes[cursorItem] !== undefined && <h4>Confirm deletion of {items[indexes[cursorItem]].title} &amp; its children.</h4>}</Modal.Body>
                <Modal.Footer>
                  <Button onClick={deleteCursorItem}>Delete</Button>
                  <Button onClick={hideConfirmDeleteDialog}>Cancel</Button>
                </Modal.Footer>
              </Modal>
              <AddNewItemDialog isVisible={isNewItemDialogVisible} onSubmit={addChildItem} onClose={hideNewItemDialog} />
              <SelectCursorItemDialog isVisible={isReparentDialogVisible} cursorItem={cursorItem} onCursorItem={setItemParent} onClose={hideReparentDialog} config={config} />
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

export default OrgEditor;
