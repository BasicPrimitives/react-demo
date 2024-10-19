import React from 'react';
import { LiveContext } from 'react-live'

export default function LiveError(props) {
  return (
    <LiveContext.Consumer>
      {({ error }) => (error ? <pre {...props}>{error}</pre> : null)}
    </LiveContext.Consumer>
  );
}