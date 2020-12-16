const { AnnotationType, ConnectorPlacementType, ConnectorLabelPlacementType, ZOrderType,
  ConnectorShapeType, Colors, LineType, PageFitMode } = require('basicprimitives');

module.exports = {
  pageFitMode: PageFitMode.PageWidth,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 1,
      toItem: 5,
      label: { color: "red", badge: "1", title: "Connector annotation" },
      labelSize: { width: 80, height: 30 }, // new Size(80, 30)
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      selectItems: true,
      offset: 5,
      lineWidth: 2,
      lineType: LineType.Dashed,
      name: "usercontrolledconnector"
    },
    {
      annotationType: AnnotationType.Label,
      fromItem: 1,
      toItems: [3],
      title: '10%'
    },
    {
      annotationType: AnnotationType.Label,
      fromItem: 1,
      toItems: [5],
      title: '30%'
    },
    {
      annotationType: AnnotationType.Label,
      fromItem: 1,
      toItems: [6],
      title: '50%'
    },
    {
      annotationType: AnnotationType.Label,
      fromItem: 1,
      toItems: [7],
      title: '10%'
    },
    {
      annotationType: AnnotationType.Label,
      fromItem: 1,
      toItems: [3, 5],
      title: '40%'
    },
    {
      annotationType: AnnotationType.Label,
      fromItem: 1,
      toItems: [3, 5, 6, 7],
      title: '100%'
    },
    {
      annotationType: AnnotationType.Label,
      fromItem: 2,
      toItems: [1],
      title: '100%'
    }
  ],
  items: [
    {
      id: 1,
      parents: [3, 5, 6, 7],
      title: 'James',
      label: 'James',
      description: 'James is First and he is child of Brad, Sara & Lynette',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 2,
      parents: [1],
      title: 'Brad',
      label: 'Brad',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 3,
      parents: [2],
      title: 'Thomas',
      label: 'Thomas',
      description: '',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 4,
      parents: [3],
      title: 'David',
      label: 'David',
      description: '',
      image: '/api/images/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      parents: [4],
      title: 'Lynette',
      label: 'Lynette',
      description: '',
      image: '/api/images/photos/l.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 6,
      parents: [4],
      title: 'Sara',
      label: 'Sara',
      description: '',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 7,
      title: 'Parent',
      label: 'Parent',
      description: 'Parent node of James',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    }
  ]
};
