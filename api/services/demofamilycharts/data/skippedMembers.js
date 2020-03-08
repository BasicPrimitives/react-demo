const primitives = require('basicprimitives');

export default {
  cursorItem: 12,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      connectorPlacementType: primitives.common.ConnectorPlacementType.Offbeat,
      labelPlacementType: primitives.common.ConnectorLabelPlacementType.Between,
      zOrderType: primitives.common.ZOrderType.Foreground,
      fromItem: 2,
      toItem: 13,
      label: { color: "red", badge: "1", title: "Connector annotation" },
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
      title: 'James Holt',
      label: 'James Holt',
      description: '1, Sr. VP, Server & Tools Division',
      phone: '262-215-7998',
      email: 'jameholt@name.com',
      image: '/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 101,
      title: 'Brad Whitt',
      label: 'Brad Whitt',
      description: '101, GM, Application Platform and Development Marketing',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 2,
      parents: [1, 101],
      title: 'Thomas Williams',
      label: 'Thomas Williams',
      description: '2, VP, Server & Tools Marketing and Solutions',
      phone: '904-547-5342',
      email: 'thomwill@name.com',
      image: '/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 3,
      parents: [2],
      title: 'David Kirby',
      label: 'David Kirby',
      description: '3, AGM, Infrastructure Server and IT Pro Audience Marketing',
      phone: '614-395-7238',
      email: 'davikirb@name.com',
      image: '/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 11,
      title: 'Lynette Maloney',
      label: 'Lynette Maloney',
      description: '11, GM, Name.com Experience Platforms and Solutions',
      phone: '540-822-3862',
      email: 'lynemalo@name.com',
      image: '/photos/y.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 111,
      title: 'Sara Kemp',
      label: 'Sara Kemp',
      description: '111, VP, Software & Enterprise Management Division',
      phone: '918-257-4218',
      email: 'sarakemp@name.com',
      image: '/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 12,
      parents: [11, 111],
      title: 'Glen Zeigler',
      label: 'Glen Zeigler',
      description: '12, GM, Core Infrastructure Solutions',
      phone: '920-665-7222',
      email: 'glenzeig@name.com',
      image: '/photos/u.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 13,
      parents: [12],
      title: 'Ione Gallegos',
      label: 'Ione Gallegos',
      description: '13, GM, Patterns & Practices',
      phone: '478-322-5539',
      email: 'ionegall@name.com',
      image: '/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 20,
      parents: [1, 101, 2, 11, 111, 12],
      title: 'Heather Simmons',
      label: 'Heather Simmons',
      description: '20, GM, Name Learning',
      phone: '620-368-3620',
      email: 'heatsimm@name.com',
      image: '/photos/p.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 21,
      title: 'Steven Lacombe',
      label: 'Steven Lacombe',
      description: '21, GM, Platform Strategy',
      phone: '805-800-7397',
      email: 'stevlaco@name.com',
      image: '/photos/a.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 121,
      title: 'Brian Cruz',
      label: 'Brian Cruz',
      description: '121, GM, Systems Management Server',
      phone: '320-833-9024',
      email: 'briacruz@name.com',
      image: '/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 22,
      parents: [21, 121],
      title: 'Nancy Smith',
      label: 'Nancy Smith',
      description: '22, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 23,
      parents: [22],
      title: 'Jean Kendall',
      label: 'Jean Kendall',
      description: '23, GM, DML Server Marketing',
      phone: '949-453-0415',
      email: 'jeankend@name.com',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 30,
      parents: [21, 121, 22, 11, 111, 12],
      title: 'Brad Whitt',
      label: 'Brad Whitt',
      description: '30, GM, Application Platform and Development Marketing',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/photos/f.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
