import React, { Suspense } from "react"
const MutualFinancialOwnership = React.lazy(() => import('./MutualFinancialOwnership'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MutualFinancialOwnership />
      </Suspense>
    </div>
  );
}