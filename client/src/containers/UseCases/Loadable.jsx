import React, { Suspense } from "react"
const HowToUse = React.lazy(() => import('./HowToUse'));

export default function Loadable(props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HowToUse {...props} />
      </Suspense>
    </div>
  );
}