import React, { Suspense } from "react"
const LargeHierarchy = React.lazy(() => import('./LargeHierarchy'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LargeHierarchy />
      </Suspense>
    </div>
  );
}