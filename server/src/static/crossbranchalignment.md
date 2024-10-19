## Demoed Features

### Cross-Branch Children Alignment
In the Organizational Chart layout, the number of rows occupied by immediate children depends on factors such as the number of assistants, advisers, and the hierarchy levels of each node. To ensure visual coherence, nodes at the same logical level across branches of the organizational hierarchy are aligned.

This feature ensures that:
* Regular children nodes are aligned horizontally across branches.
* Assistants, SubAssistants, Advisers, and SubAdvisers can be aligned in both vertical and matrix formations across departments.
* The component supports **infinite nesting** of children layers, maintaining alignment across hierarchical branches, no matter how deep the structure becomes.

### General Features
* PDF export functionality
* Diagram options drawer for customizing visualization

### Source Code
* [UI Components](https://github.com/BasicPrimitives/react-demo/tree/master/client/src/containers/CrossBranchAlignment)
* [Redux Store](https://github.com/BasicPrimitives/react-demo/blob/master/client/src/redux/modules/demos/crossbranchalignment.js)
