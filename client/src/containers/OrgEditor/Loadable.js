import React, { Suspense } from "react"
const OrgEditor = React.lazy(() => import('./OrgEditor'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OrgEditor />
      </Suspense>
    </div>
  );
}