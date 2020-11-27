import React from "react"
import Loadable from "react-loadable"

const loadable = Loadable({
    loader: () => import("./HowToUse"),
    loading() {
        return <div>Loading...</div>
    }
  })

export default loadable;