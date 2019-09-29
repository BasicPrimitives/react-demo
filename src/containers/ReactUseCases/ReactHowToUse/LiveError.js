import React from 'react';
import { LiveContext } from 'react-live'

export default function LiveError(props) {
  return (
    <LiveContext.Consumer>
      {({ error }) => (error && !error.startsWith("SyntaxError: Unexpected token (1:8)") ? <pre {...props}>{error}</pre> : null)}
    </LiveContext.Consumer>
  );
}