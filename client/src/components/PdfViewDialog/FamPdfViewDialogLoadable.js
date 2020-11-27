import React from "react"
import Loadable from "react-loadable"

const loadable = Loadable({
    loader: () => import("./FamPdfViewDialog"),
    loading() {
        return <div>Loading...</div>
    }
  })

export default loadable;