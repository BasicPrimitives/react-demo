## Demoed features
### User guided family chart nodes ordering
Family Tree Component orders and aligns nodes automatically, it searches for the best order of family nodes. This is very handy for initial rendering, but lack of ordering rules keeps layout engine reordering nodes every time we add new nodes into diagram. So end users have to adopt to global layout changes every time they make changes to diagram nodes. The opposite situation when user defines position for every node drives us back to the age of diagram editors and manual nodes placement. This is inconvenient, so we combine the best of two approaches: auto layout and user guided nodes order. Our layout engine follows end user ordering rules as long as they are applicable and ignores them when they are not relevant.

This demo diagram displays relations guiding layout engine in form of horizontal red dotted lines. The arrow direction defines who gets its order position first and who is next.

#### Family diagram layout rules
* Female nodes are placed on the right side of male nodes.
* Children are placed from left to right by age.
* Male second marriages are placed to the left of the node.
* Female second marriages are placed to the right of the node.

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Annotations
* Offbeat Connector Annotation - use nodes context buttons to show connector annotation between any 2 nodes of diagram
* Background Annotation - select nodes to enable background annotation. Background annotation auto merges for neighbouring nodes.
