## Demoed features
### Browsing combined with dynamic nodes loading
* This demo dynamically loads chart nodes as the user navigates around the diagram. The top 3 levels stay loaded permanently. All other rows are loaded as the user browses down into them, and control discards them as it navigates to any other branch of the hierarchy.
* Selecting and pinning nodes. If the user check marks a loaded node, it will stay loaded when it goes to another branch.

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Sources
* [UI Components](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/containers/DynamicLoading/DynamicLoading.js)
* [Redux Store](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/redux/modules/demos/dynamicloading.js)