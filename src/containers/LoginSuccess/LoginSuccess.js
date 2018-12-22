import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({ user: state.auth.user }),
  authActions
)
class LoginSuccess extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }).isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { user, logout } = this.props;
    return (
      user && (
        <div className="container">
          <h1>Login Success</h1>

          <div>
            <p>
              Hi, {user.email}. You have just successfully logged in, and were forwarded here by{' '}
              <code>getDerivedStateFromProps()</code> in
              <code>App.js</code>, which is listening to the auth reducer via redux
              <code>@connect</code>. How exciting!
            </p>

            <p>
              The same function will forward you to <code>/</code> should you chose to log out. The choice is yours...
            </p>

            <div>
              <button type="button" className="btn btn-danger" onClick={logout}>
                <i className="fa fa-sign-out" /> Log Out
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default LoginSuccess;
