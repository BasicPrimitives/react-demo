import React, { Suspense } from "react"
const CrossBranchAlignment = React.lazy(() => import('./CrossBranchAlignment'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CrossBranchAlignment />
      </Suspense>
    </div>
  );
}