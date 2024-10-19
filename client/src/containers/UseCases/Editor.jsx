import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

class Editor extends Component {
  static propTypes = {
    onCodeChange: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
  };

  render() {
    const { content, onCodeChange } = this.props;

    return (
      <CodeMirror
        value={content}
        height="300px" // Set the height directly
        theme={oneDark} // Use the imported theme
        extensions={[javascript()]} // Add JavaScript mode
        onChange={(value) => {
          onCodeChange(value);
        }}
        style={{
          maxHeight: "350px",
          overflow: "auto",
          background: '#1D1F27',
          color: '#f8f8f2',
          whiteSpace: "pre-wrap",
          textAlign: "left",
          fontSize: "0.9em",
          fontFamily: "Source Code Pro, monospace",
          marginBottom: "10px",
        }}
      />
    );
  }
}

export default Editor;
