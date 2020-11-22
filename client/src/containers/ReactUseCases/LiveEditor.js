import React from 'react';
import { LiveContext } from 'react-live'
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/javascript/javascript');

export default function LiveEditor(props) {
  return (
    <LiveContext.Consumer>
      {({ code, language, theme, disabled, onChange }) => (
        <CodeMirror
          value={code}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            onChange(value);
          }}
        />
      )}
    </LiveContext.Consumer>
  );
}