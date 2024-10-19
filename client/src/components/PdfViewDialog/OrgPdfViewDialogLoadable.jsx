import React, { Suspense } from "react"
const OrgPdfViewDialog = React.lazy(() => import('./OrgPdfViewDialog'));

export default function Loadable(props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OrgPdfViewDialog {...props} />
      </Suspense>
    </div>
  );
}