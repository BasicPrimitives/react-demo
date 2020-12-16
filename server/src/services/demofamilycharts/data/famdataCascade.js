const { AnnotationType, ConnectorPlacementType, ConnectorLabelPlacementType, ZOrderType,
  ConnectorShapeType, Colors, LineType } = require('basicprimitives');

module.exports = {
  cursorItem: 10,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 10,
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
      id: 10,
      title: 'James',
      label: 'James',
      description: 'Parent of: Steven, Heather, Ione, Glen & Sara',
      phone: '262-215-7998',
      email: 'jameholt@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 11,
      title: 'Brad',
      label: 'Brad',
      description: 'Parent of: Heather, Ione, Glen & Sara',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 12,
      title: 'Thomas',
      label: 'Thomas',
      description: 'Parent of: Ione, Glen & Sara',
      phone: '904-547-5342',
      email: 'thomwill@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 13,
      title: 'David',
      label: 'David',
      description: 'Parent of: Glen & Sara',
      phone: '614-395-7238',
      email: 'davikirb@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 14,
      title: 'Lynette',
      label: 'Lynette',
      description: 'Parent of Sara',
      phone: '540-822-3862',
      email: 'lynemalo@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 1,
      parents: [10, 11, 12, 13, 14],
      title: 'Sara',
      label: 'Sara',
      description: 'Child of James, Brad, Thomas, David & Lynette',
      phone: '918-257-4218',
      email: 'sarakemp@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 2,
      parents: [10, 11, 12, 13],
      title: 'Glen',
      label: 'Glen',
      description: 'Child of James, Brad, Thomas & David',
      phone: '920-665-7222',
      email: 'glenzeig@name.com',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 3,
      parents: [10, 11, 12],
      title: 'Ione',
      label: 'Ione',
      description: 'Child of James, Brad & Thomas',
      phone: '478-322-5539',
      email: 'ionegall@name.com',
      image: '/api/images/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 4,
      parents: [10, 11],
      title: 'Heather',
      label: 'Heather',
      description: 'Child of James & Brad',
      phone: '620-368-3620',
      email: 'heatsimm@name.com',
      image: '/api/images/photos/p.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      parents: [10],
      title: 'Steven',
      label: 'Steven',
      description: 'Child of James',
      phone: '805-800-7397',
      email: 'stevlaco@name.com',
      image: '/api/images/photos/a.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
