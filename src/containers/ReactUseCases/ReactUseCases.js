import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import {
  Grid, Col, Row, Nav, NavItem, Navbar, NavDropdown
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Version } from 'components';

@withRouter
class ReactUseCases extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static links = [
    {
      title: "REACT USE CASES",
      items: [
        {
          url: "/reactusecases/firstorganizationalchart",
          caption: "First Organizational Chart"
        },
        {
          url: "/reactusecases/firstfamilychart",
          caption: "First Family Chart"
        },
        {
          url: "/reactusecases/addingnewitemstochartatruntime",
          caption: "Adding new items at run time"
        },
        {
          url: "/reactusecases/dragndrop",
          caption: "Drag &amp; Drop Support"
        },
        {
          url: "/reactusecases/diagramsizing",
          caption: "Component Sizing"
        }
      ]
    },
    {
      title: "USER INTERFACE EVENTS &amp; OPTIONS",
      items: [
        {
          url: "/reactusecases/selectingcursoritem",
          caption: "Slecting cursor item"
        },
        {
          url: "/reactusecases/selectinghighlightitem",
          caption: "Slecting highlight item"
        },
        {
          url: "/reactusecases/selecteditems",
          caption: "Slected items &amp; Check boxes"
        },
        {
          url: "/reactusecases/buttons",
          caption: "Buttons Panel"
        },
        {
          url: "/reactusecases/itemandgrouptitlecolors",
          caption: "Item &amp; Group title colors"
        },
        {
          url: "/reactusecases/labels",
          caption: "Labels"
        },
      ]
    },
    {
      title: "ORGANIZATIONAL CHART LAYOUT OPTIONS",
      items: [
        {
          url: "/reactusecases/childrenlayout",
          caption: "Children Layout"
        },
        {
          url: "/reactusecases/adviserandassistantitemtypes",
          caption: "Adviser &amp; Assistant item types"
        },
        {
          url: "/reactusecases/partneritemtypes",
          caption: "Partner item types"
        },
        {
          url: "/reactusecases/multiplerootitemsinchart",
          caption: "Multiple root items"
        },
        {
          url: "/reactusecases/selectionpathmode",
          caption: "Selection path mode"
        },
        {
          url: "/reactusecases/inactiveitems",
          caption: "Inactive items in layout"
        },
        {
          url: "/reactusecases/customlayoutwithinvisibleitems",
          caption: "Custom layout using invisible items"
        }
      ]
    },
    {
      title: "FAMILY DIAGRAM LAYOUT USE CASES",
      items: [
        {
          url: "/reactusecases/familyconnectorsvisualization",
          caption: "Family Connectors Visualization"
        },
        {
          url: "/reactusecases/inactivefamilyitems",
          caption: "Inactive family items"
        },
        {
          url: "/reactusecases/spousesinfamilylayout",
          caption: "Spouses Without Children"
        },
        {
          url: "/reactusecases/familychartitemsordering",
          caption: "Family Items Ordering"
        }
      ]
    },
    {
      title: "ITEM TEMPLATE USE CASES",
      items: [
        {
          url: "/reactusecases/itemtemplates",
          caption: "Item Template"
        },
        {
          url: "/reactusecases/zoomwithitemtemplate",
          caption: "Zoom Using Item templates"
        },
        {
          url: "/reactusecases/zoomwithcssscaletransform",
          caption: "Zoom Using CSS Scale Transform"
        },
        {
          url: "/reactusecases/cursortemplate",
          caption: "Cursor Template"
        },
        {
          url: "/reactusecases/highlighttemplate",
          caption: "Highlight Template"
        }
      ]
    },
    {
      title: "ANNOTATIONS",
      items: [
        {
          url: "/reactusecases/connectorannotation",
          caption: "On-screen Connector Annotation"
        },
        {
          url: "/reactusecases/shapeandbackgroundannotations",
          caption: "Shape &amp; Background Annotations"
        },
        {
          url: "/reactusecases/highlightpathannotation",
          caption: "Highlight Path Annotation"
        },
        {
          url: "/reactusecases/labelscascadesinfamilychart",
          caption: "Labels cascades in Family Chart"
        },
      ]
    }
  ];

  render() {
    const { route } = this.props;
    const styles = require('./ReactUseCases.scss');
    return (
      <Grid fluid className={styles.appContent}>
        <Row>
          <Col smHidden mdHidden lgHidden sm={3} md={4}>
            <Nav bsStyle="pills" stacked>
              <NavDropdown title="Select use case">
                {ReactUseCases.links.map(({ title, items }) =>
                  <>
                    <Navbar.Brand>
                      &nbsp;<nobr>{title}</nobr>
                    </Navbar.Brand>
                    {items.map(({ url, caption }) =>
                      <LinkContainer to={url}>
                        <NavItem>{caption}</NavItem>
                      </LinkContainer>
                    )}
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Col>
          <Col xsHidden sm={3} md={4}>
            {ReactUseCases.links.map(({ title, items }) =>
              <>
                <h6>{title}</h6>
                <Nav bsStyle="pills" stacked activeKey={1}>
                  {items.map(({ url, caption }) =>
                    <LinkContainer to={url}>
                      <NavItem>{caption}</NavItem>
                    </LinkContainer>
                  )}
                </Nav>
              </>
            )}
            <Version />
          </Col>
          <Col sm={7} md={8}>
            <div>{renderRoutes(route.routes)}</div>
          </Col>
          <Col smHidden mdHidden lgHidden>
            <Version />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ReactUseCases;
