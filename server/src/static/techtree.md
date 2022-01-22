## Demoed features
### User guided family chart nodes ordering
This dependency graph demonstrates usage of `primaryParent` layout option. It contains around 170 nodes with some of the nodes being arranged into multiple explicit sequences that show the evolution and order of dependency of said nodes. We need to display all of the node sequences together in one hierarchy meanwhile allowing the user to see the separate individual sequences and their nodes. In order to accomplish this, we can set priority for how nodes should align under their parents. In a family diagram every node may have multiple parents and by default aligns itself to be equally distanced from all of them. In this case however, we are interested in having nodes be closer or farther away from a specific parent. This is done by giving higher priority to one of its parents. Our family diagram provides the property `primaryParent` which can be applied to a node. Automatically indicating that the child node or nodes should be aligned closer to said parent within the hierarchy. This property is optional and doesn't change any node relations, so if it is applied to a non-existing parent then it will simply be ignored.

This alignment priority can then be used to create a full sequence, branch or chain of nodes within a grander hexarchy. This can be seen if you take a look at the sequence of flight related technologies starting from `Subsonic flight` and ending with `Cutting-Edge Aeronautics`.

### Annotations
* Offbeat Connector Annotations - red annotations display `primaryParent` references to enforce the hierarchy
* Straight Connector Annotation - blue annotations display references enforcing the sorting of nodes within one group.
* Level annotations - Decorate nodes having the same level in the hierarchy

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Sources
* [UI Components](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/containers/TechTree/TechTree.js)
* [Redux Store](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/redux/modules/demos/techtree.js)