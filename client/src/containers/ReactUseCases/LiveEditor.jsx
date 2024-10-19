import React from 'react';
import { LiveContext } from 'react-live'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

export default function LiveEditor(props) {
  return (
    <LiveContext.Consumer>
      {({ code, language, theme, disabled, onChange }) => (
        <>
         <CodeMirror
          value={code}
          height="300px" // Set the height directly
          theme={oneDark} // Use the imported theme
          extensions={[javascript()]} // Add JavaScript mode
          onChange={(value) => {
            onChange(value);
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
        </>
      )}
    </LiveContext.Consumer>
  );
}