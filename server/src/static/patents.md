## Demoed features
### Multiple-inheritance diagram having grandparent relations
Patents data has many references to grandparents; basically, every patent has links to every grandparent patent in the database. Their visualization is hard to trace and creates visual clutter, so to resolve this problem, `famDiagram` control provides an option to hide them. So this demo, instead of visualizing direct connections to grandparents, shows referenced grandparents with a custom template. Plus, the demo application highlights connection with highlight path annotation, which provides a visual indication that the item has a relationship with nodes outside viewport boundaries. 

### Features
* Hiding grand parent connections
* [Material-UI Cards](https://material-ui.com/components/cards/)

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Sources
* [UI Components](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/containers/Patents/Patents.js)
* [Redux Store](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/redux/modules/demos/patents.js)