import React, { Suspense } from "react"
const FamilyChartWithAnnotations = React.lazy(() => import('./FamilyChartWithAnnotations'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FamilyChartWithAnnotations />
      </Suspense>
    </div>
  );
}