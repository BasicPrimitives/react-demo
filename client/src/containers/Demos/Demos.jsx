import React, { Component } from 'react';

class Demos extends Component {
  render() {
    const { children } = this.props;
    return <>
      { children }
    </>
  }
}

export default Demos;
