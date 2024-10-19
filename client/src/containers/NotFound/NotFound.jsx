import React from 'react';
import { Navigate } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Doh! 404!</h1>
      <p>
        These are <em>not</em> the droids you are looking for!
      </p>
      <Navigate to="/" replace />
    </>
  );
}
