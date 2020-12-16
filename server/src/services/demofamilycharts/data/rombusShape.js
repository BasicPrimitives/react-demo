const { AnnotationType, ConnectorPlacementType, ConnectorLabelPlacementType, ZOrderType,
  ConnectorShapeType, Colors, LineType, PageFitMode } = require('basicprimitives');

module.exports = {
  cursorItem: 1,
  pageFitMode: PageFitMode.PageWidth,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 3,
      toItem: 8,
      label: { color: "red", badge: "1", title: "Connector annotation" },
      labelSize: { width: 80, height: 30 }, // new Size(80, 30)
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: LineType.Dashed,
      name: "usercontrolledconnector"
    }
  ],
  items: [
    {
      id: 1,
      title: '1',
      description: '1',
      image: '/api/images/photos/t.png'
    },
    {
      id: 2,
      parents: [1],
      title: '2',
      description: '2',
      image: '/api/images/photos/t.png'
    },
    {
      id: 3,
      parents: [1],
      title: '3',
      description: '3',
      image: '/api/images/photos/t.png'
    },
    {
      id: 4,
      parents: [2],
      title: '4',
      description: '4',
      image: '/api/images/photos/t.png'
    },
    {
      id: 5,
      parents: [2],
      title: '5',
      description: '5',
      image: '/api/images/photos/t.png'
    },
    {
      id: 6,
      parents: [3],
      title: '6',
      description: '6',
      image: '/api/images/photos/t.png'
    },
    {
      id: 7,
      parents: [3],
      title: '7',
      description: '7',
      image: '/api/images/photos/t.png'
    },
    {
      id: 8,
      parents: [4, 5],
      title: '8',
      description: '8',
      image: '/api/images/photos/t.png'
    },
    {
      id: 9,
      parents: [6, 7],
      title: '9',
      description: '9',
      image: '/api/images/photos/t.png'
    },
    {
      id: 10,
      parents: [8, 9],
      title: '10',
      description: '10',
      image: '/api/images/photos/t.png'
    }
  ]
};
