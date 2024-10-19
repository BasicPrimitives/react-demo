import React, { Suspense } from "react"
const Patents = React.lazy(() => import('./Patents'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Patents />
      </Suspense>
    </div>
  );
}