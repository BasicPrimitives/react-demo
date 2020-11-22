## Demoed features
### Multiple inheritance diagram having grand parent relations
Patents data has massive number of references to grandparents, basically every patent has links to every grandparent patent in database, their visualization is meaningless and creates visual clutter, so in order to resolve this problem `famDiagram` control provides option to hide direct grand parents connectors. So this demo, instead of visualizing direct connections to grandparents, shows referenced grandparents with custom template and highlights connection with highlight path annotation, so if some grandparent is outside of the current view, end user has indication that there are grandparents directly connected to the current cursor item.

### Features
* Hiding grand parent connections
* [Material-UI Cards(https://material-ui.com/components/cards/)

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

