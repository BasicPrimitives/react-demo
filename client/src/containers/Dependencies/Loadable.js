import React, { Suspense } from "react"
const Dependencies = React.lazy(() => import('./Dependencies'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Dependencies />
      </Suspense>
    </div>
  );
}