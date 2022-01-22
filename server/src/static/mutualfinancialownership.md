## Demoed features
### Layered graph visualizing mutual financial ownership
Configuration may contain looped references between items, so control finds layout minimizing number of loops between levels, so majority of references ideally should go in one direction.

### Layout Features
* Dependency Loops 
* Hiding direct grandparent relations
* Alignment by levels

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Sources
* [UI Components](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/containers/MutualFinancialOwnership/MutualFinancialOwnership.js)
* [redux Store](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/redux/modules/demos/mutualfinancialownership.js)