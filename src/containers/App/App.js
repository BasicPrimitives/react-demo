import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { provideHooks } from 'redial';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar, NavDropdown, Nav, NavItem, MenuItem, Alert
} from 'react-bootstrap';
import Helmet from 'react-helmet';
import qs from 'qs';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout as logoutAction } from 'redux/modules/auth';
import { Notifs } from 'components';
import config from 'config';

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    if (!isAuthLoaded(getState())) {
      await dispatch(loadAuth()).catch(() => null);
    }
    if (!isInfoLoaded(getState())) {
      await dispatch(loadInfo()).catch(() => null);
    }
  }
})
@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  { logout: logoutAction }
)
@withRouter
class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    notifs: PropTypes.shape({
      global: PropTypes.array
    }).isRequired,
    logout: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  state = {
    user: this.props.user, // eslint-disable-line react/destructuring-assignment
    prevProps: this.props // eslint-disable-line react/no-unused-state
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { prevProps } = state;
    // Compare the incoming prop to previous prop
    const user = !_.isEqual(prevProps.user, props.user) ? props.user : state.user;

    if (!prevProps.user && props.user) {
      const query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
      props.history.push(query.redirect || '/login-success');
    } else if (prevProps.user && !props.user) {
      // logout
      props.history.push('/');
    }

    return {
      user,
      // Store the previous props in state
      prevProps: props
    };
  }

  handleLogout = event => {
    const { logout } = this.props;

    event.preventDefault();
    logout();
  };

  render() {
    const { notifs, route } = this.props;
    const { user } = this.state;
    const styles = require('./App.scss');

    return (
      <div className={styles.appContent}>
        <Helmet {...config.app.head} />
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <div className={styles.appBrand}>
                <span>
                  <a href="/">{config.app.title}</a>
                </span>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              <NavDropdown title="Demos" id="basic-nav-dropdown">
                <Navbar.Brand>
                  &nbsp;
                  <nobr>Organizational Chart</nobr>
                </Navbar.Brand>
                <LinkContainer to="/largehierarchy">
                  <MenuItem eventKey={1}>Large Hierarchy</MenuItem>
                </LinkContainer>
                <LinkContainer to="/dynamicloading">
                  <MenuItem eventKey={2}>Dynamic Loading</MenuItem>
                </LinkContainer>
                <LinkContainer to="/orgeditor">
                  <MenuItem eventKey={3}>Editor &amp; Matrix Layout</MenuItem>
                </LinkContainer>
                <LinkContainer to="/verticallayout">
                  <MenuItem eventKey={4}>Vertical Layout</MenuItem>
                </LinkContainer>
                <LinkContainer to="/crossteamgroup">
                  <MenuItem eventKey={5}>Cross Functional Team</MenuItem>
                </LinkContainer>
                <LinkContainer to="/highlightannotations">
                  <MenuItem eventKey={5}>Highlight &amp; Connector Annotations</MenuItem>
                </LinkContainer>
                <LinkContainer to="/partners">
                  <MenuItem eventKey={6}>Partners &amp; Annotations</MenuItem>
                </LinkContainer>
                <Navbar.Brand>
                  &nbsp;
                  <nobr>Family Chart</nobr>
                </Navbar.Brand>
                <LinkContainer to="/familychartwithannotations">
                  <MenuItem eventKey={7}>Family Chart &amp; Annotations</MenuItem>
                </LinkContainer>
                <LinkContainer to="/dependencies">
                  <MenuItem eventKey={8}>Dependencies</MenuItem>
                </LinkContainer>
                <LinkContainer to="/patents">
                  <MenuItem eventKey={9}>Patents</MenuItem>
                </LinkContainer>
                <LinkContainer to="/financialownership">
                  <MenuItem eventKey={10}>Financial Ownership</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="How to Use" id="basic-nav-dropdown">
                <LinkContainer to="/usecases/firstorganizationalchart">
                  <NavItem>Basic Primitives for JavaScript/jQuery/PDFkit</NavItem>
                </LinkContainer>
                <LinkContainer to="/reactusecases/firstorganizationalchart">
                  <NavItem>Basic Primitives for React</NavItem>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/changelog">
                <NavItem>Changelog</NavItem>
              </LinkContainer>
              <LinkContainer to="/downloads">
                <NavItem>Downloads</NavItem>
              </LinkContainer>
              <LinkContainer to="/license">
                <NavItem>License</NavItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavItem>Contact</NavItem>
              </LinkContainer>
              {user && (
                <>
                  <LinkContainer to="/chat">
                    <NavItem>Chat</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <NavItem>About Us</NavItem>
                  </LinkContainer>
                </>
              )}

              {user && (
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/register">
                  <NavItem>Register</NavItem>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/logout">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    Logout
                  </NavItem>
                </LinkContainer>
              )}
            </Nav>
            {user && (
              <p className="navbar-text">
                <strong>{user.email}</strong>
              </p>
            )}
            <Nav navbar pullRight>
              <NavItem target="_blank" title="View on Github" href="https://github.com/BasicPrimitives/react-demo">
                <i className="fa fa-github" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {notifs.global && (
            <div className="container">
              <Notifs className={styles.notifs} namespace="global" NotifComponent={props => <Alert bsStyle={props.kind}>{props.message}</Alert>} />
            </div>
          )}

          {renderRoutes(route.routes)}
        </div>

        <div className="well text-center">
          Have questions? Ask for help{' '}
          <a href="https://github.com/BasicPrimitives/react-demo/issues" target="_blank" rel="noopener noreferrer">
            on Github
          </a>
          .
        </div>
      </div>
    );
  }
}

export default App;
