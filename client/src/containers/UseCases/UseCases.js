import React, { Component } from 'react';

class UseCases extends Component {
  render() {
    const { children } = this.props;
    return <>
      {children}
    </>
  }
}

export default UseCases;
