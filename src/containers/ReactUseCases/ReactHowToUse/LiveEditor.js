import React from 'react';
import { LiveContext } from 'react-live'
import UnEditor from './UnEditor';

export default function LiveEditor(props) {
  return (
    <LiveContext.Consumer>
      {({ code, language, theme, disabled, onChange }) => (
        <UnEditor
          content={code}
          //disabled={disabled}
          onCodeChange={onChange}
        />
      )}
    </LiveContext.Consumer>
  );
}