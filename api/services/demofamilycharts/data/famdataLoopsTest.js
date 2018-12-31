const primitives = require('basicprimitives');

export default {
  cursorItem: 2,
  annotations: [
    // {
    //    annotationType: primitives.common.AnnotationType.Connector,
    //    fromItem: 3,
    //    toItem: 4,
    //    label: "<div class='bp-badge' style='width:16px; height:16px;background-color:red; color: white;'>1</div>",
    //    labelSize: { width: 30, height: 30 }, //new primitives.common.Size(80, 30)
    //    connectorShapeType: primitives.common.ConnectorShapeType.OneWay,
    //    color: primitives.common.Colors.Red,
    //    offset: 5,
    //    lineWidth: 2,
    //    lineType: primitives.common.LineType.Dashed
    // },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 2,
      toItems: [1],
      title: '2->1'
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 1,
      toItems: [2],
      title: '1->2'
    },
    // { annotationType: primitives.common.AnnotationType.Label, fromItem: 1, toItems: [6], title: "1->6" },
    // { annotationType: primitives.common.AnnotationType.Label, fromItem: 1, toItems: [2, 6], title: "1->2,6" },

    // { annotationType: primitives.common.AnnotationType.Label, fromItem: 5, toItems: [2], title: "5->2" },
    // { annotationType: primitives.common.AnnotationType.Label, fromItem: 2, toItems: [1,5], title: "2->1,5" },
    // { annotationType: primitives.common.AnnotationType.Label, fromItem: 7, toItems: [8], title: "7->8" },
    // { annotationType: primitives.common.AnnotationType.Label, fromItem: 8, toItems: [7], title: "8->7" }
  ],
  items: [
    {
      id: 1,
      parents: [2],
      title: '1',
      label: '1',
      description: '1',
      image: '/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 2,
      parents: [1],
      title: '2',
      label: '2',
      description: '2',
      image: '/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    // { id: 5, parents: [7], title: "5", label: "5", description: "5", image: "/photos/j.png", itemTitleColor: "#ff0000" },
    // { id: 6, parents: [], title: "6", label: "6", description: "6", image: "/photos/b.png", itemTitleColor: "#4b0082" },
    // { id: 7, parents: [8], title: "7", label: "7", description: "7", image: "/photos/b.png", itemTitleColor: "#4b0082" },
    // { id: 8, title: "8", label: "8", description: "8", image: "/photos/j.png", itemTitleColor: "#ff0000" }
  ]
};
