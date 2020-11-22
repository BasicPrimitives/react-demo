import React from 'react';
import { Redirect } from '@reach/router';

export default function NotFound() {
  return (
    <>
      <h1>Doh! 404!</h1>
      <p>
        These are <em>not</em> the droids you are looking for!
      </p>
      <Redirect to='/' noThrow />
    </>
  );
}
