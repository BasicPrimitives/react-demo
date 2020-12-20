## Demoed features
### Instant Annotations
* Straight connector annotations
* Stacking connector annotations

Diagram displays permanent connector annotations for current cursor node and dynamic for current highlighted node. 

Component is designed to perform minimal volume of rendering and layout calculations. When user moves mouse pointer over nodes, chart shows highlight and draws on-screen connector annotations. Diagram layout does not depend on annotations, it does not reserve any space for them, so component draws connector annotations on top of diagram nodes without general layout, so user gets instant visual feedback for node under mouse cursor. This is very handy when we have a lot of connector annotations and we don't want them to be shown all the time.

### General
* Diagram reset
* PDF file generation
* Diagram options drawer