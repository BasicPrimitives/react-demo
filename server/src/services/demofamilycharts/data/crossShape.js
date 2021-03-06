const { AnnotationType, ConnectorPlacementType, ConnectorLabelPlacementType, ZOrderType,
  ConnectorShapeType, Colors, LineType } = require('basicprimitives');

module.exports = {
  cursorItem: 2,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 2,
      toItem: 1,
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
      parents: [1],
      title: '4',
      description: '4',
      image: '/api/images/photos/t.png'
    },
    {
      id: 5,
      parents: [1],
      title: '5',
      description: '5',
      image: '/api/images/photos/t.png'
    },
    {
      id: 6,
      parents: [2],
      title: '6',
      description: '6',
      image: '/api/images/photos/t.png'
    },
    {
      id: 7,
      parents: [2],
      title: '7',
      description: '7',
      image: '/api/images/photos/t.png'
    },
    {
      id: 8,
      parents: [2],
      title: '8',
      description: '8',
      image: '/api/images/photos/t.png'
    },
    {
      id: 9,
      parents: [3],
      title: '9',
      description: '9',
      image: '/api/images/photos/t.png'
    },
    {
      id: 12,
      parents: [8],
      title: '12',
      description: '12',
      image: '/api/images/photos/t.png'
    },
    {
      id: 10,
      parents: [4, 6],
      title: '10',
      description: '10',
      image: '/api/images/photos/t.png'
    },
    {
      id: 11,
      parents: [5, 7],
      title: '11',
      description: '11',
      image: '/api/images/photos/t.png'
    }
  ]
};
