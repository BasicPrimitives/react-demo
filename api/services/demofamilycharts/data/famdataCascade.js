const primitives = require('basicprimitives');

export default {
  cursorItem: 10,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      fromItem: 10,
      toItem: 5,
      label: "<div class='bp-badge' style='width:18px; height:18px;background-color:red; color: white;'>1</div>Connector annotation",
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
      id: 10,
      title: 'James',
      label: 'James',
      description: 'Parent of: Steven, Heather, Ione, Glen & Sara',
      phone: '262-215-7998',
      email: 'jameholt@name.com',
      image: '/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 11,
      title: 'Brad',
      label: 'Brad',
      description: 'Parent of: Heather, Ione, Glen & Sara',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 12,
      title: 'Thomas',
      label: 'Thomas',
      description: 'Parent of: Ione, Glen & Sara',
      phone: '904-547-5342',
      email: 'thomwill@name.com',
      image: '/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 13,
      title: 'David',
      label: 'David',
      description: 'Parent of: Glen & Sara',
      phone: '614-395-7238',
      email: 'davikirb@name.com',
      image: '/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 14,
      title: 'Lynette',
      label: 'Lynette',
      description: 'Parent of Sara',
      phone: '540-822-3862',
      email: 'lynemalo@name.com',
      image: '/photos/y.png',
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
      image: '/photos/g.png',
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
      image: '/photos/u.png',
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
      image: '/photos/i.png',
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
      image: '/photos/p.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      parents: [10],
      title: 'Steven',
      label:
        'Steven',
      description: 'Child of James',
      phone: '805-800-7397',
      email: 'stevlaco@name.com',
      image: '/photos/a.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
