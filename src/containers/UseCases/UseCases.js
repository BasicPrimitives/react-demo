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
    const styles = require('./UseCases.scss');
    return (
      <Grid fluid className={styles.appContent}>
        <Row>
          <Col sm={3} md={2}>
            <h6>CREATE &amp; UPDATE USE CASES</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/firstorganizationalchart">
                <NavItem>First Organizational Chart</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/firstfamilychart">
                <NavItem>First Family Chart</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/addingnewitemstochartatruntime">
                <NavItem>Adding new items at run time</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/diagramsizing">
                <NavItem>Diagram Sizing</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/zoomwithcssscaletransform">
                <NavItem>Zoom Using CSS Scale Transform</NavItem>
              </LinkContainer>
            </Nav>
            <h6>INTEGRATION</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/angularjsfirstorganizationalchartdirective">
                <NavItem>AngularJS Organizational Chart Directive</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/jqueryspecific">
                <NavItem>jQuery Specific Use Cases</NavItem>
              </LinkContainer>
            </Nav>
            <h6>REACT USE CASES</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/hardcodedorganizationalchart">
                <NavItem>Hard coded configuration</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/stateboundorganizationalchart">
                <NavItem>Component state bound</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/reduxstateboundorganizationalchart">
                <NavItem>Redux state bound</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/reduxstatepreloadorganizationalchart">
                <NavItem>Redux state preloading</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/componentsizingwithcssmedia">
                <NavItem>Component Sizing with CSS @Media</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/buttonspanel">
                <NavItem>User Buttons Panel</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/itemtemplate">
                <NavItem>Item Template</NavItem>
              </LinkContainer>
            </Nav>
            <h6>USER INTERFACE EVENTS &amp; OPTIONS</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/selectingcursoritem">
                <NavItem>Slecting cursor item &amp; Mouse Click</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/selectinghighlightitem">
                <NavItem>Slecting highlight item &amp; Mouse over</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/selecteditems">
                <NavItem>Slected items &amp; Check boxes</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/buttons">
                <NavItem>Buttons Panel</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/itemandgrouptitlecolors">
                <NavItem>Item &amp; Group title colors</NavItem>
              </LinkContainer>
            </Nav>

            <h6>ORGANIZATIONAL CHART LAYOUT OPTIONS</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/childrenlayout">
                <NavItem>Children Layout</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/adviserandassistantitemtypes">
                <NavItem>Adviser &amp; Assistant item types</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/partneritemtypes">
                <NavItem>Partner item types</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/multiplerootitemsinchart">
                <NavItem>Multiple root items</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/selectionpathmode">
                <NavItem>Selection path mode</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/inactiveitems">
                <NavItem>Inactive items in layout</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/customlayoutwithinvisibleitems">
                <NavItem>Custom layout using invisible items</NavItem>
              </LinkContainer>
            </Nav>
            <h6>FAMILY DIAGRAM LAYOUT USE CASES</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/familyconnectorsvisualization">
                <NavItem>Connectors Visualization</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/inactivefamilyitems">
                <NavItem>Inactive family items</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/spousesinfamilylayout">
                <NavItem>Spouses Without Children</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/familychartitemsordering">
                <NavItem>Family Items Ordering</NavItem>
              </LinkContainer>
            </Nav>
            <h6>ITEM TEMPLATE USE CASES</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/itemtemplates">
                <NavItem>Item Template</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/zoomwithitemtemplate">
                <NavItem>Zoom Using Item templates</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/itemtemplatelabel">
                <NavItem>Labels &amp; Item Template</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/cursortemplate">
                <NavItem>Cursor Template</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/highlighttemplate">
                <NavItem>Highlight Template</NavItem>
              </LinkContainer>
            </Nav>
            <h6>ANNOTATIONS</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/connectorannotation">
                <NavItem>On-screen Connector Annotation</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/shapeandbackgroundannotations">
                <NavItem>Shape &amp; Background Annotations</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/highlightpathannotation">
                <NavItem>Highlight Path Annotation</NavItem>
              </LinkContainer>
              <LinkContainer to="/usecases/labelscascadesinfamilychart">
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
