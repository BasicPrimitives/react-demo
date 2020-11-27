import React from "react"
import Loadable from "react-loadable"

const loadable = Loadable({
    loader: () => import("./DynamicLoading"),
    loading() {
        return <div>Loading...</div>
    }
  })

export default loadable;