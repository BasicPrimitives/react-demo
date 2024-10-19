import React, { Suspense } from "react"
const Reference = React.lazy(() => import('./Reference'));

export default function Loadable(props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Reference {...props} />
      </Suspense>
    </div>
  );
}