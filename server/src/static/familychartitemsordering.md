## Demoed features
### User-guided family chart nodes ordering
Family Tree Component orders and aligns nodes automatically. It searches for the best order of family nodes. The automatic layout is convenient for initial rendering, but the lack of ordering rules keeps the layout engine reordering nodes every time we add new nodes into the diagram. So end-users have to adapt to global layout changes every time they make changes to diagram nodes. When a user defines a position for every node, the opposite situation drives us back to diagram editors' age and manual node placement. Manual node positioning is inconvenient, so we combine the best from the two approaches: auto layout and user-guided nodes order. Our layout engine respects end-user ordering rules as long as applicable and ignores them when they are not relevant.

This demo family diagram has annotations showing relations guiding the layout engine. See horizontal red dotted lines. The arrow direction defines who gets its order position first and who is next.

#### Family diagram layout rules
* Female nodes are placed on the right side of male nodes.
* Child nodes are placed from left to right by age.
* Male second and the following marriages nodes are put to the left of the male node.
* Female's second and subsequent marriages nodes are put to the right of the female node.

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Annotations
* Offbeat Connector Annotation - use nodes context buttons to show connector annotation between any two nodes of the diagram
* Background Annotation - select nodes to enable background annotation. Background annotation auto merges for neighboring nodes.

### Sources
* [UI Components](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/containers/FamilyChartItemsOrdering/FamilyChartItemsOrdering.js)
* [Redux Store](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/redux/modules/demos/familychartitemsordering.js)