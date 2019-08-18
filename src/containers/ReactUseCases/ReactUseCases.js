import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import {
  Grid, Col, Row, Nav, NavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Version } from 'components';

@withRouter
class UseCases extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    const { route } = this.props;
    const styles = require('./ReactUseCases.scss');
    return (
      <Grid fluid className={styles.appContent}>
        <Row>
          <Col sm={3} md={2}>
            <h6>REACT USE CASES</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/reactusecases/firstorganizationalchart">
                <NavItem>First Organizational Chart</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/firstfamilychart">
                <NavItem>First Family Chart</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/addingnewitemstochartatruntime">
                <NavItem>Adding new items at run time</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/dragndrop">
                <NavItem>Drag &amp; Drop Support</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/diagramsizing">
                <NavItem>Component Sizing</NavItem>
              </LinkContainer>
            </Nav>
            <h6>USER INTERFACE EVENTS &amp; OPTIONS</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/reactusecases/selectingcursoritem">
                <NavItem>Slecting cursor item</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/selectinghighlightitem">
                <NavItem>Slecting highlight item</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/selecteditems">
                <NavItem>Slected items &amp; Check boxes</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/buttons">
                <NavItem>Buttons Panel</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/itemandgrouptitlecolors">
                <NavItem>Item &amp; Group title colors</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/labels">
                <NavItem>Labels</NavItem>
              </LinkContainer>
            </Nav>
            <h6>ORGANIZATIONAL CHART LAYOUT OPTIONS</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/reactusecases/childrenlayout">
                <NavItem>Children Layout</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/adviserandassistantitemtypes">
                <NavItem>Adviser &amp; Assistant item types</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/partneritemtypes">
                <NavItem>Partner item types</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/multiplerootitemsinchart">
                <NavItem>Multiple root items</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/selectionpathmode">
                <NavItem>Selection path mode</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/inactiveitems">
                <NavItem>Inactive items in layout</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/customlayoutwithinvisibleitems">
                <NavItem>Custom layout using invisible items</NavItem>
              </LinkContainer>
            </Nav>
            <h6>FAMILY DIAGRAM LAYOUT USE CASES</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/reactusecases/familyconnectorsvisualization">
                <NavItem>Family Connectors Visualization</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/inactivefamilyitems">
                <NavItem>Inactive family items</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/spousesinfamilylayout">
                <NavItem>Spouses Without Children</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/familychartitemsordering">
                <NavItem>Family Items Ordering</NavItem>
              </LinkContainer>
            </Nav>
            <h6>ITEM TEMPLATE USE CASES</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/reactusecases/itemtemplates">
                <NavItem>Item Template</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/zoomwithitemtemplate">
                <NavItem>Zoom Using Item templates</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/zoomwithcssscaletransform">
                <NavItem>Zoom Using CSS Scale Transform</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/cursortemplate">
                <NavItem>Cursor Template</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/highlighttemplate">
                <NavItem>Highlight Template</NavItem>
              </LinkContainer>
            </Nav>
            <h6>ANNOTATIONS</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/reactusecases/connectorannotation">
                <NavItem>On-screen Connector Annotation</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/shapeandbackgroundannotations">
                <NavItem>Shape &amp; Background Annotations</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/highlightpathannotation">
                <NavItem>Highlight Path Annotation</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactusecases/labelscascadesinfamilychart">
                <NavItem>Labels cascades in Family Chart</NavItem>
              </LinkContainer>
            </Nav>
            <Version />
          </Col>
          <Col sm={7} md={6}>
            <div>{renderRoutes(route.routes)}</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UseCases;
