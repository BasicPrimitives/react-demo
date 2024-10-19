import React, { Suspense } from "react"
const FamPdfViewDialog = React.lazy(() => import('./FamPdfViewDialog'));

export default function Loadable(props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FamPdfViewDialog {...props} />
      </Suspense>
    </div>
  );
}