import React, { Suspense } from "react"
const TechTree = React.lazy(() => import('./TechTree'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TechTree />
      </Suspense>
    </div>
  );
}