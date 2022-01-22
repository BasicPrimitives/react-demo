## Demoed features
This demo is a fully functional organizational chart editor application. You can clone our [react-demo](https://github.com/BasicPrimitives/react-demo) repository and run it on your local machine. It consists of primitive back-end API providing diagram's content, and front-end developed using Redux and ReactJS. 
When we speak about matrix organizational chart layout, we mean visualizing multiple cross-organizational groups of people from different teams unified for some shared purpose. Our components provide various ways to achieve this goal; the simplest one is applying distinct visual styles, use custom templates and group titles to indicate cross-functional groups in the organization. See cross-functional demo at this site. 
This demo application uses level annotations and assignment of nodes into different levels to group them into cross-functional teams. This demo has three primary levels in the organization; the top one is the CEO and its office; the second level is the management. The third level contains a large number of individual contributors. We split them into multiple categories/grades across all teams we have in the organization. Some units may not have all types of individual contributors we have in the organization. It is possible to reassign nodes to different grades. Do this by selecting a node and then clicking on the popup edit button. (The one with the pencil on it); Then go to the Layout tab and scroll down. There you can edit the required Level Offset property.
### General
* Diagram reset and reload from back-end API
* [PDF file generation](https://pdfkit.org/)
* Diagram options drawer. It has the majority of options we have in our controls.
* Nodes search drawer. Use it to find members in the diagram or Drag & Drop them into a different position.
* Add new root node
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React Drag & Drop support](https://react-dnd.github.io/react-dnd/docs/overview)
* [React Material-UI](https://material-ui.com/)
### Dual Mode View
We designed our controls keeping in mind that our primary user base is users of analytical accounting applications. Usability is our highest priority. End-users not familiar with a scale based zoom typical for CAD systems or general-purpose vector-graphics applications may face serious usability issues operating in applications having infinite CSS scale. Users should not be able to zoom diagram into condition when there are no readable UI elements. 
Our controls support the CSS scale option, but we use it to adapt to the mobile devices aspect ratio only.
The more deterministic way to scale diagram is to use a template-based approach when instead of the CSS scale, we swap templates of different sizes, so we get the same scale effect but without loss of text readability.
The dual-mode view is an example of how we can achieve Drag & Drop functionality between two distant diagram areas. The user may browse into one branch of the organizational chart in one view and then use another view to browse another section of the same diagram. So this way, we Drag & Drop nodes between two controls and avoid inconvenient Drag & Scroll across the large chart.
* Showing two diagraming components side by side let you see distant parts of the same diagram
* Zoom in on one side and Drag & Drop nodes to the other side.
### Diagram node:
* Edit node properties
* Edit node placement options
* Sort children
* Move node from parent to parent with the node selection dialog
### Nodes selection chips
* Move all selected nodes to a given parent node with the node selection dialog
* Delete all selected nodes
* Unselect all
* Set cursor for the given item
* Remove item from selected nodes

### Drag & Drop
Drag & Drop is a popular feature. We developed the stand-alone ReactJS library to implement Drag & Drop by design without workarounds, so it is compatible with ReactJS context functionality.
This demo application implements nodes Drag & Drop inside of the single diagram control. It implements nodes Drag & Drop between two controls; enable the dual diagram view mode to see two controls side by side. It implements drag and Drop of nodes from the search results drawer into control panels as well.
In general, we are against UI functionality based on Drag & Drop in analytical accounting class business applications. Drag & Drop creates a lot of usability issues in applications having transactionality of operations. Applications having document-based UI, Drag & Drop is not a problem. Users can always rollback document changes. When we develop transactional processes, the usage of Drag & Drop may accidentally create unwanted operations. So in transactional applications, Drag & Drop requires confirmation dialogs or transactions queue with a subsequent confirmation dialog to be implemented, which is not convenient and meant to be when we develop Drag & Drop UI.
### Matrix children layout 
Usually, organizational charts grow horizontally more than vertically. So keeping nodes in square formation saves horizontal space. It is essential to fit the matrix into the width of the screen. It is OK to scroll nodes vertically or horizontally. The necessity to scroll both ways creates usability issues, so the control has the option `maximumColumnsInMatrix` to limit the maximum number of columns in the matrix formation, so it cannot grow beyond some fixed columns number. For example, when a node has four children, they are matrixed into 2 * 2 matrix, nine children are matrixed into 3 * 3 matrix, 16 into 4 * 4, etc. Still, if we limit the number of columns to 4, 20 children would be matrixed into a 4 * 5 matrix.

### Sources
* [UI Components](https://github.com/BasicPrimitives/react-demo/tree/master/client/src/containers/OrgEditor)
* [Redux Store](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/redux/modules/demos/orgeditor.js)
