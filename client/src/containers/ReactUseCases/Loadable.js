import React, { Suspense } from "react"
const ReactHowToUse = React.lazy(() => import('./ReactHowToUse'));

export default function Loadable(props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactHowToUse {...props} />
      </Suspense>
    </div>
  );
}