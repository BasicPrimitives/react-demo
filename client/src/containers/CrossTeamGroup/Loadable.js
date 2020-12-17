import React, { Suspense } from "react"
const CrossTeamGroup = React.lazy(() => import('./CrossTeamGroup'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CrossTeamGroup />
      </Suspense>
    </div>
  );
}