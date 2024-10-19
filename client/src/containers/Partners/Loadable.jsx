import React, { Suspense } from "react"
const Partners = React.lazy(() => import('./Partners'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Partners />
      </Suspense>
    </div>
  );
}