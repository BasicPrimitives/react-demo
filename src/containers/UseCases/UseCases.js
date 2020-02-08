import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import {
  Grid, Col, Row, Nav, Navbar, NavItem, NavDropdown
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Version } from 'components';

@withRouter
class UseCases extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired
  };
  static links = [
    {
      title: "CREATE & UPDATE USE CASES",
      items: [
        {
          url: "/usecases/firstorganizationalchart",
          caption: "First Organizational Chart"
        },
        {
          url: "/usecases/firstfamilychart",
          caption: "First Family Chart"
        },
        {
          url: "/usecases/addingnewitemstochartatruntime",
          caption: "Adding new items at run time"
        },
        {
          url: "/usecases/diagramsizing",
          caption: "Diagram Sizing"
        },
        {
          url: "/usecases/zoomwithcssscaletransform",
          caption: "Zoom Using CSS Scale Transform"
        }
      ]
    },
    {
      title: "INTEGRATION",
      items: [
        {
          url: "/usecases/angularjsfirstorganizationalchartdirective",
          caption: "AngularJS Organizational Chart Directive"
        },
        {
          url: "/usecases/pdfkitspecific",
          caption: "PDFkit Specific Use Cases"
        },
        {
          url: "/usecases/jqueryspecific",
          caption: "jQuery Specific Use Cases"
        }
      ]
    },
    {
      title: "USER INTERFACE EVENTS & OPTIONS",
      items: [
        {
          url: "/usecases/selectingcursoritem",
          caption: "Selecting cursor item & Mouse Click"
        },
        {
          url: "/usecases/selectinghighlightitem",
          caption: "Selecting highlight item & Mouse over"
        },
        {
          url: "/usecases/selecteditems",
          caption: "Selected items & Check boxes"
        },
        {
          url: "/usecases/buttons",
          caption: "Buttons Panel"
        },
        {
          url: "/usecases/itemandgrouptitlecolors",
          caption: "Item & Group title colors"
        }
      ]
    },
    {
      title: "ORGANIZATIONAL CHART LAYOUT OPTIONS",
      items: [
        {
          url: "/usecases/childrenlayout",
          caption: "Children Layout"
        },
        {
          url: "/usecases/adviserandassistantitemtypes",
          caption: "Adviser & Assistant item types"
        },
        {
          url: "/usecases/partneritemtypes",
          caption: "Partner item types"
        },
        {
          url: "/usecases/multiplerootitemsinchart",
          caption: "Multiple root items"
        },
        {
          url: "/usecases/selectionpathmode",
          caption: "Selection path mode"
        },
        {
          url: "/usecases/inactiveitems",
          caption: "Inactive items in layout"
        },
        {
          url: "/usecases/customlayoutwithinvisibleitems",
          caption: "Custom layout using invisible items"
        }
      ]
    },
    {
      title: "FAMILY DIAGRAM LAYOUT USE CASES",
      items: [
        {
          url: "/usecases/familyconnectorsvisualization",
          caption: "Connectors Visualization"
        },
        {
          url: "/usecases/inactivefamilyitems",
          caption: "Inactive family items"
        },
        {
          url: "/usecases/spousesinfamilylayout",
          caption: "Spouses Without Children"
        },
        {
          url: "/usecases/familychartitemsordering",
          caption: "Family Items Ordering"
        }
      ]
    },
    {
      title: "ITEM TEMPLATE USE CASES",
      items: [
        {
          url: "/usecases/itemtemplates",
          caption: "Item Template"
        },
        {
          url: "/usecases/zoomwithitemtemplate",
          caption: "Zoom Using Item templates",
        },
        {
          url: "/usecases/itemtemplatelabel",
          caption: "Labels & Item Template"
        },
        {
          url: "/usecases/cursortemplate",
          caption: "Cursor Template"
        },
        {
          url: "/usecases/highlighttemplate",
          caption: "Highlight Template"
        }
      ]
    },
    {
      title: "ANNOTATIONS",
      items: [
        {
          url: "/usecases/connectorannotation",
          caption: "On-screen Connector Annotation"
        },
        {
          url: "/usecases/shapeandbackgroundannotations",
          caption: "Shape & Background Annotations"
        },
        {
          url: "/usecases/highlightpathannotation",
          caption: "Highlight Path Annotation"
        },
        {
          url: "/usecases/labelscascadesinfamilychart",
          caption: "Labels cascades in Family Chart"
        }
      ]
    }
  ];

  render() {
    const { route } = this.props;
    const styles = require('./UseCases.scss');
    return (
      <Grid fluid className={styles.appContent}>
        <Row className="clearfix">
          <Col smHidden mdHidden lgHidden sm={3} md={4}>
            <Nav bsStyle="pills" stacked>
              <NavDropdown title="Select use case">
                {UseCases.links.map(({ title, items }) =>
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
            {UseCases.links.map(({ title, items }) =>
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

export default UseCases;
