import React, { Suspense } from "react"
const AngularHowToUse = React.lazy(() => import('./AngularHowToUse'));

export default function Loadable(props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AngularHowToUse {...props} />
      </Suspense>
    </div>
  );
}