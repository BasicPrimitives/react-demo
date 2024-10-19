import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class AngularUseCases extends Component {
  render() {
    const { children } = this.props;
    return <>
      <Outlet />
    </>
  }
}

export default AngularUseCases;
