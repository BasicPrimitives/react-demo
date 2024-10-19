import React, { Suspense } from "react"
const HighlightAnnotations = React.lazy(() => import('./HighlightAnnotations'));

export default function Loadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HighlightAnnotations />
      </Suspense>
    </div>
  );
}