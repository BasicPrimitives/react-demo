const primitives = require('basicprimitives');

export default {
  cursorItem: 5,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      connectorPlacementType: primitives.common.ConnectorPlacementType.Offbeat,
      labelPlacementType: primitives.common.ConnectorLabelPlacementType.Between,
      zOrderType: primitives.common.ZOrderType.Foreground,
      fromItem: 1,
      toItem: 15,
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
      title: 'David Dalton',
      label: 'David Dalton',
      description: '1, Chief Executive Officer (CEO)',
      phone: '352-206-7599',
      email: 'davidalt@name.com',
      image: '/photos/q.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 2,
      title: 'Jeanna White',
      label: 'Jeanna White',
      description: '2, Co-Presidents, Platform Products & Services Division',
      phone: '505-791-1689',
      email: 'jeanwhit@name.com',
      image: '/photos/w.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 4,
      title: 'Thomas Williams',
      label: 'Thomas Williams',
      description: '4, VP, Server & Tools Marketing and Solutions',
      phone: '904-547-5342',
      email: 'thomwill@name.com',
      image: '/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      title: 'David Kirby',
      label: 'David Kirby',
      description: '5, GM, Infrastructure Server and IT Pro Audience Marketing',
      phone: '614-395-7238',
      email: 'davikirb@name.com',
      image: '/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 6,
      title: 'Lynette Maloney',
      label: 'Lynette Maloney',
      description: '6, GM, Name.com Experience Platforms and Solutions',
      phone: '540-822-3862',
      email: 'lynemalo@name.com',
      image: '/photos/y.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 11,
      title: 'Steven Lacombe',
      label: 'Steven Lacombe',
      description: '11, GM, Platform Strategy',
      phone: '805-800-7397',
      email: 'stevlaco@name.com',
      image: '/photos/a.png',
      itemTitleColor: '#4b0082',
      parents: [1, 2]
    },
    {
      id: 12,
      title: 'Nancy Smith',
      label: 'Nancy Smith',
      description: '12, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/photos/s.png',
      itemTitleColor: '#4b0082',
      parents: [1, 2]
    },

    {
      id: 13,
      title: 'Jean Kendall',
      label: 'Jean Kendall',
      description: '13, GM, DML Server Marketing',
      phone: '949-453-0415',
      email: 'jeankend@name.com',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082',
      parents: [4, 5]
    },
    {
      id: 14,
      title: 'Brad Whitt',
      label: 'Brad Whitt',
      description: '14, GM, Application Platform and Development Marketing',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/photos/f.png',
      itemTitleColor: '#4b0082',
      parents: [4, 5]
    },

    {
      id: 15,
      title: 'Sara Kemp',
      label: 'Sara Kemp',
      description: '15, VP, Software & Enterprise Management Division',
      phone: '918-257-4218',
      email: 'sarakemp@name.com',
      image: '/photos/g.png',
      itemTitleColor: '#4b0082',
      parents: [5, 6]
    },
    {
      id: 16,
      title: 'Brian Cruz',
      label: 'Brian Cruz',
      description: '16, GM, Systems Management Server',
      phone: '320-833-9024',
      email: 'briacruz@name.com',
      image: '/photos/h.png',
      itemTitleColor: '#4b0082',
      parents: [5, 6]
    },
    {
      id: 17,
      title: 'John Drake',
      label: 'John Drake',
      description: '17, GM, Software Management',
      phone: '469-644-8543',
      email: 'johndrak@name.com',
      image: '/photos/j.png',
      itemTitleColor: '#4b0082',
      parents: [5, 6]
    },

    {
      id: 18,
      title: 'Thomas Dixon',
      label: 'Thomas Dixon',
      description: '18, GM, Operations Manager',
      phone: '651-249-4047',
      email: 'thomdixo@name.com',
      image: '/photos/z.png',
      itemTitleColor: '#4b0082',
      parents: [11, 13]
    },
    {
      id: 19,
      title: 'George Duong',
      label: 'George Duong',
      description: '19, Sr. VP, Software Server System',
      phone: '434-406-2189',
      email: 'georduon@name.com',
      image: '/photos/x.png',
      itemTitleColor: '#4b0082',
      parents: [11, 13]
    },

    {
      id: 20,
      title: 'Ralph Mercer',
      label: 'Ralph Mercer',
      description: '20, GM, DML Server Strategy',
      phone: '814-327-5895',
      email: 'ralpmerc@name.com',
      image: '/photos/c.png',
      itemTitleColor: '#4b0082',
      parents: [12, 15]
    },
    {
      id: 21,
      title: 'Howard Williams',
      label: 'Howard Williams',
      description: '21, GM, User Experience',
      phone: '703-740-8612',
      email: 'howawill@name.com',
      image: '/photos/v.png',
      itemTitleColor: '#4b0082',
      parents: [12, 15]
    },

    {
      id: 22,
      title: 'Nathalie Escobedo',
      label: 'Nathalie Escobedo',
      description: '22, GM, DML Server Business Intelligence',
      phone: '504-555-8165',
      email: 'nathesco@name.com',
      image: '/photos/b.png',
      itemTitleColor: '#4b0082',
      parents: [14, 17]
    },
    {
      id: 23,
      title: 'Ashley Rue',
      label: 'Ashley Rue',
      description: '23, VP, Developer Division',
      phone: '515-324-4969',
      email: 'ashlrue@name.com',
      image: '/photos/n.png',
      itemTitleColor: '#4b0082',
      parents: [14, 17]
    }
  ]
};
