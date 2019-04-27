import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Controlled as CodeMirror} from 'react-codemirror2'

class Editor extends Component {
  static propTypes = {
    onCodeChange: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.instance = null;
    this.onContentChange = this.onContentChange.bind(this);
  }

  onContentChange(text) {
    const { onCodeChange } = this.props;
    onCodeChange(text);
  }

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const {content: nextContent} = nextProps;
    const content = this.instance != null ? this.instance.getValue() : '';

    return !(nextContent == content);
  }

  render() {
    const { content } = this.props;
    require('codemirror/lib/codemirror.css');
    require('codemirror/theme/material.css');
    require('codemirror/mode/javascript/javascript');
    return (
      <CodeMirror
        value={content}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        editorDidMount={editor => { this.instance = editor }}
        // onChange={(editor, data, value) => {
        //   this.onContentChange(value);
        // }}
        onBeforeChange={(editor, data, value) => {
          this.onContentChange(value);
        }}
        onChange={(editor, data, value) => {
        }}
      />
    );
  }
}

export default Editor;
