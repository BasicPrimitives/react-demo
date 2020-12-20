## Demoed features
### General
* Diagram reset
* [PDF file generation](https://pdfkit.org/)
* Diagram options drawer
* Nodes search drawer
* Add new root node
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React Drag & Drop support](https://react-dnd.github.io/react-dnd/docs/overview)
* [React Material-UI](https://material-ui.com/)
### Dual Mode View
* Showing two diagraming components side by side let you see distant parts of the same diagram
* Zoom in on one side and Drag & Drop nodes to other side.
### Diagram node:
* Edit node properties
* Edit node placement options
* Sort children
* Move node from parent to parent with node selection dialog
### Nodes selection chips
* Move all selected nodes to given parent node with node selection dialog
* Delete all selected nodes
* Unselect all
* Set cursor for the given item
* Remove item from selected nodes


### Matrix children layout 
Usually organizational charts grow horizontally more than vertically. So keeping nodes in square formation saves horizontal space. It is important to fit matrix into width of screen, it is fine to scroll nodes vertically or horizontally, but necessity to scroll both ways creates usability issue, so chart support extra option `maximumColumnsInMatrix` limiting number of columns. For example when node has 4 children they are matrixed into 2 * 2 matrix, 9 children are matrixed into 3 * 3 matrix, 16 into 4 * 4 and so on, but if we put limitation for number of columns for example at 4 then 20 children would be matrixed into 4 * 5 matrix.