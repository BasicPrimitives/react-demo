import React, { Suspense } from "react"
const DynamicLoading = React.lazy(() => import('./DynamicLoading'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicLoading />
      </Suspense>
    </div>
  );
}