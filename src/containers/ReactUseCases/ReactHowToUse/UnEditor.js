import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnEditor extends Component {
  static propTypes = {
    onCodeChange: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.instance = null;
    this.onContentChange = this.onContentChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const { content: nextContent } = nextProps;
    const content = this.instance != null ? this.instance.getValue() : '';

    return !(nextContent === content);
  }

  onContentChange(text) {
    const { onCodeChange } = this.props;
    onCodeChange(text);
  }

  render() {
    const { content } = this.props;
    if (!!((typeof window !== 'undefined' && window.document && window.document.createElement))) {
      const CodeMirror = require('react-codemirror2').UnControlled;
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
          editorDidMount={editor => {
            this.instance = editor;
          }}
          onBeforeChange={(editor, data, value) => {
            this.onContentChange(value);
          }}
          onChange={() => { }}
        />
      );
    } else {
      return <></>;
    }
  }
}

export default UnEditor;
