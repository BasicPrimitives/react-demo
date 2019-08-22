import React from 'react';
import { LiveContext } from 'react-live'
import UnEditor from './UnEditor';

export default function LiveEditor(props) {
  return (
    <LiveContext.Consumer>
      {({ code, language, theme, disabled, onChange }) => (
        <div style={{
          height: "300px",
          maxHeight: "350px",
          overflow: "auto",
          background: '#1D1F27',
          color: '#f8f8f2',
          whiteSpace: "pre-wrap",
          textAlign: "left",
          fontSize: "0.9em",
          fontFamily: "Source Code Pro, monospace",
          marginBottom: "10px"
        }}>
          <UnEditor
            content={code}
            //disabled={disabled}
            onCodeChange={onChange}
          />
        </div>
      )}
    </LiveContext.Consumer>
  );
}