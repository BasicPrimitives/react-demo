## Demoed features
### Layered graph visualizing mutual financial ownership
Configuration may contain looped references between items, so control finds layout minimizing number of loops between levels, so majority of references ideally should go in one direction.

This optimization can be disabled so items levels order will match their order in items collection. For example if you have two nodes A and B referencing each other, then it is undefined which one one is going to be at the top of the diagram. Set `loopsLayoutMode` to `KeepItemsOrder`, if you need the first item in your collection to be at the top, otherwise control will optimize loops layout and first item will depend on results of the optimization.

### Layout Features
* Dependency Loops 
* Hiding direct grand parent relations
* Alignment by levels

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

