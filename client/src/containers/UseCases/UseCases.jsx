import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class UseCases extends Component {
  render() {
    const { children } = this.props;
    return <>
      <Outlet />
    </>
  }
}

export default UseCases;
