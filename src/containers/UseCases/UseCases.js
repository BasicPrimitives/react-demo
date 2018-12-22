import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import {
  Grid,
  Col,
  Row,
  Nav,
  NavItem
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
            </Nav>
            <h6>USER INTERFACE EVENTS &amp; OPTIONS</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/buttonspanel">
                <NavItem>User Buttons Panel</NavItem>
              </LinkContainer>
            </Nav>
            <h6>ITEM TEMPLATE USE CASES</h6>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <LinkContainer to="/usecases/itemtemplate">
                <NavItem>Item Template</NavItem>
              </LinkContainer>
            </Nav>
            <Version />
          </Col>
          <Col sm={7} md={6}>
            <div>
              {renderRoutes(route.routes)}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UseCases;
