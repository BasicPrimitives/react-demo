## Demoed features
### Instant Annotations
* Straight connector annotations
* Stacking connector annotations

The diagram displays permanent straight connector annotations for the current cursor node and dynamic for the highlighted node. 

The component performs the minimum required volume of rendering and layout operations. The chart shows the highlight and draws on-screen connector annotations when the user moves the mouse pointer over nodes. The diagram layout does not depend on annotations. It does not reserve any space, so the component draws connector annotations on top of diagram nodes without general layout and nodes rendering. The user gets instant visual feedback for a node under the mouse cursor. Instant annotations are convenient when we have many of them defined across nodes of the diagram, and we don't want to show all of them all the time.

### General
* Diagram reset
* PDF file generation
* Diagram options drawer

### Demo Sources
* [UI Components](https://github.com/BasicPrimitives/react-demo/tree/master/client/src/containers/HighlightAnnotations)
* [Redux store](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/redux/modules/demos/highlightannotations.js)