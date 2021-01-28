## Demoed features
The main idea about this demo is the possibility to combine various children's formations within one diagram. It has just three levels in the hierarchy; the first one is the CEO. Then second is the vertically aligned group of managerial nodes, and then every manager has a horizontal row of direct reports attached to it. The diagram automatically defines the level's index based on the actual logical level of nodes in the hierarchy. You can see multiple repetitive management level annotations on the diagram's left side because the component resolved logical groups and duplicated annotation for every level in the visualization.
### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Layout Flip
Try to flip the diagram from left to right. It would perform the following layout changes:
* Places Advisers & Assistants on the left
* Places group title on the right and context buttons on the left
* Rotates root's group title 180 degree
* Places vertical managers formation on the left of the root connection line
* Aligns horizontal row of children to the left of the manager's node

### Annotations
* Level annotations - Decorate nodes having the same level in the hierarchy


### Children layout 
Chart supports the following children formations
* Horizontal
* Vertical
* Matrix

They can be set per node or globally for all chart nodes. The component has two different layout options for children having and not having grand-children:
* `childrenPlacementType`
* `leavesPlacementType`

Read more details in reference.

To change children's alignment relative to its parent connection line, use complimentary horizontal children alignment option: `horizontalAlignment`.