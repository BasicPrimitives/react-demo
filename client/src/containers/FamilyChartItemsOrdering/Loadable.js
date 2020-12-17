import React, { Suspense } from "react"
const FamilyChartItemsOrdering = React.lazy(() => import('./FamilyChartItemsOrdering'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FamilyChartItemsOrdering />
      </Suspense>
    </div>
  );
}