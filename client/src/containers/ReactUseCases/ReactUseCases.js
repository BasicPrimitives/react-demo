import React, { Component } from 'react';

class ReactUseCases extends Component {
  render() {
    const { children } = this.props;
    return <>
      {children}
    </>
  }
}

export default ReactUseCases;
