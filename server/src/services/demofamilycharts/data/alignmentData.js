const { AnnotationType, ConnectorPlacementType, ConnectorLabelPlacementType, ZOrderType,
  ConnectorShapeType, Colors, LineType } = require('basicprimitives');

module.exports = {
  cursorItem: 6,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 2,
      toItem: 5,
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
      title: 'James Holt',
      label: 'James Holt',
      description: '1, Sr. VP, Server & Tools Division',
      phone: '262-215-7998',
      email: 'jameholt@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 2,
      parents: [1],
      title: 'Brad Whitt',
      label: 'Brad Whitt',
      description: '2, GM, Application Platform and Development Marketing',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 3,
      parents: [2],
      title: 'Thomas Williams',
      label: 'Thomas Williams',
      description: '3, VP, Server & Tools Marketing and Solutions',
      phone: '904-547-5342',
      email: 'thomwill@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 4,
      parents: [3],
      title: 'David Kirby',
      label: 'David Kirby',
      description: '4, AGM, Infrastructure Server and IT Pro Audience Marketing',
      phone: '614-395-7238',
      email: 'davikirb@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      parents: [4],
      title: 'Lynette Maloney',
      label: 'Lynette Maloney',
      description: '5, GM, Name.com Experience Platforms and Solutions',
      phone: '540-822-3862',
      email: 'lynemalo@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 6,
      parents: [1],
      title: 'Aligned Item',
      label: 'Aligned Item',
      description: 'Use GroupBy Parents/Children option to align this item',
      phone: '620-368-3620',
      email: 'heatsimm@name.com',
      image: '/api/images/photos/p.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 7,
      parents: [5, 6],
      title: 'Steven Lacombe',
      label: 'Steven Lacombe',
      description: '10, GM, Platform Strategy',
      phone: '805-800-7397',
      email: 'stevlaco@name.com',
      image: '/api/images/photos/a.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
