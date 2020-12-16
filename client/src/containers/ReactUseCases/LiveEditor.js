import React from 'react';
import { LiveContext } from 'react-live'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

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