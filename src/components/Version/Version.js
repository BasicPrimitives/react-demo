import React, { Component } from 'react';
import primitives from 'basicprimitives';
import { Alert } from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
class Version extends Component {
  render() {
    const styles = require('./Version.scss');
    return (
      <Alert bsStyle="warning" className={styles.version}>
        Current Version: <strong>{primitives.common.version}</strong>
      </Alert>
    );
  }
}

export default Version;
