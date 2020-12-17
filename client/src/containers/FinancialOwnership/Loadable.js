import React, { Suspense } from "react"
const FinancialOwnership = React.lazy(() => import('./FinancialOwnership'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FinancialOwnership />
      </Suspense>
    </div>
  );
}