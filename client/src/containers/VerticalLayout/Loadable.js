import React, { Suspense } from "react"
const VerticalLayout = React.lazy(() => import('./VerticalLayout'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <VerticalLayout />
      </Suspense>
    </div>
  );
}