## Demoed features
### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Layout Flip
* Places Advisers & Assistants on the left
* Places group title on the right and context buttons on the left
* Rotates root's group title 180 degree
* Places vertical managers formation on the left of the root connection line
* Aligns horizontal children formation to the left of the managers node

### Annotations
* Level annotations - Decorate nodes having the same level in the hierarchy


### Children layout 
Chart supports following layouts for children
* Horizontal
* Vertical
* Matrix

They can be set per node or globally for all chart nodes. Component has two separate layout options for children having and not having grand-children:
* `childrenPlacementType`
* `leavesPlacementType`

Read more details in reference.

In order to change children alignment relative to its parent connection line use complimentary horizontal children alignment option: `horizontalAlignment`.