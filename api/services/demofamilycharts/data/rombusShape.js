const primitives = require('basicprimitives');

export default {
  cursorItem: 1,
  pageFitMode: primitives.common.PageFitMode.PageWidth,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      fromItem: 3,
      toItem: 8,
      label: "<div class='bp-badge' style='width:16px; height:16px;background-color:red; color: white;'>1</div>Connector annotation",
      labelSize: { width: 80, height: 30 }, // new primitives.common.Size(80, 30)
      connectorShapeType: primitives.common.ConnectorShapeType.OneWay,
      color: primitives.common.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.common.LineType.Dashed
    }
  ],
  items: [
    {
      id: 1,
      title: '1',
      description: '1',
      image: '/photos/t.png'
    },
    {
      id: 2,
      parents: [1],
      title: '2',
      description: '2',
      image: '/photos/t.png'
    },
    {
      id: 3,
      parents: [1],
      title: '3',
      description: '3',
      image: '/photos/t.png'
    },
    {
      id: 4,
      parents: [2],
      title: '4',
      description: '4',
      image: '/photos/t.png'
    },
    {
      id: 5,
      parents: [2],
      title: '5',
      description: '5',
      image: '/photos/t.png'
    },
    {
      id: 6,
      parents: [3],
      title: '6',
      description: '6',
      image: '/photos/t.png'
    },
    {
      id: 7,
      parents: [3],
      title: '7',
      description: '7',
      image: '/photos/t.png'
    },
    {
      id: 8,
      parents: [4, 5],
      title: '8',
      description: '8',
      image: '/photos/t.png'
    },
    {
      id: 9,
      parents: [6, 7],
      title: '9',
      description: '9',
      image: '/photos/t.png'
    },
    {
      id: 10,
      parents: [8, 9],
      title: '10',
      description: '10',
      image: '/photos/t.png'
    }
  ]
};
