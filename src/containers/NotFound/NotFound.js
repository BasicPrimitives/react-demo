import React from 'react';
import { Redirect } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container">
      <h1>Doh! 404!</h1>
      <p>
        These are <em>not</em> the droids you are looking for!
      </p>
      <Redirect to='/' />
    </div>

  );
}
