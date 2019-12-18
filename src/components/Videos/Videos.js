import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Panel } from 'react-bootstrap';

class Videos extends Component {
  render() {
    const opts = {
      width: 200,
      height: 120,
      display: 'block'
    };
    const styles = require('./Videos.scss');
    return <Panel className={styles.video}>
      <h3>Video Introduction</h3>
      <YouTube
        videoId="F_wlDks_ABQ"
        opts={opts}
      />
    </Panel>;
  }
}

export default Videos;

