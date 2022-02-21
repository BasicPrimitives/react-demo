import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

class Editor extends Component {
  static propTypes = {
    onCodeChange: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
  };

  render() {
    const { content, onCodeChange } = this.props;
    return <div style={{
      height: "300px",
      maxHeight: "350px",
      overflow: "auto",
      background: '#1D1F27',
      // color: '#f8f8f2',
      // whiteSpace: "pre-wrap",
      // textAlign: "left",
      // fontSize: "0.9em",
      // fontFamily: "Source Code Pro, monospace",
      marginBottom: "10px"
    }}>
      <CodeMirror
        value={content}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
          preserveScrollPosition: true
        }}
        onBeforeChange={(editor, data, value) => {
          onCodeChange(value);
        }}
        onChange={(editor, data, value) => {
          
        }}
      />
    </div>
  }
}

export default Editor;
