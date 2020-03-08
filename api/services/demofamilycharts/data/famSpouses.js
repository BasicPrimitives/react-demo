const primitives = require('basicprimitives');

export default {
  cursorItem: 5,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      connectorPlacementType: primitives.common.ConnectorPlacementType.Offbeat,
      labelPlacementType: primitives.common.ConnectorLabelPlacementType.Between,
      zOrderType: primitives.common.ZOrderType.Foreground,
      fromItem: 5,
      toItem: 8,
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
      id: '1',
      parents: ['4', '5'],
      spouses: ['2', '3'],
      title: 'Victoria Sequeira',
      label: 'Victoria Sequeira',
      description: '1, GM, Worldwide Licensing',
      phone: '973-883-9137',
      email: 'victsequ@name.com',
      image: '/photos/k.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '2',
      title: 'Norma Moore',
      label: 'Norma Moore',
      description: '2, GM, WW Licensing Solutions',
      phone: '334-496-5203',
      email: 'normmoor@name.com',
      image: '/photos/x.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '3',
      title: 'Carlos Cardenas',
      label: 'Carlos Cardenas',
      description: '3, GM, Marketing and Readiness',
      phone: '775-999-3630',
      email: 'carlcard@name.com',
      image: '/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '4',
      spouses: ['5', '22'],
      title: 'Brian Cruz',
      label: 'Brian Cruz',
      description: '4, GM, Systems Management Server',
      phone: '320-833-9024',
      email: 'briacruz@name.com',
      image: '/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '5',
      title: 'Arthur Wood',
      label: 'Arthur Wood',
      description: '5, GM, XML Enterprise Services',
      phone: '630-677-5265',
      email: 'arthwood@name.com',
      image: '/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '6',
      parents: ['4', '5'],
      title: 'Brad Whitt',
      label: 'Brad Whitt',
      description: '6, GM, Application Platform and Development Marketing',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '7',
      parents: ['5', '4'],
      title: 'George Duong',
      label: 'George Duong',
      description: '7, Sr. VP, Software Server System',
      phone: '434-406-2189',
      email: 'georduon@name.com',
      image: '/photos/x.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '8',
      parents: ['4', '5'],
      spouses: ['12', '13'],
      title: 'John Green',
      label: 'John Green',
      description: '8, Sr. VP, Software Core Operating System Division',
      phone: '937-475-8106',
      email: 'johngree@name.com',
      image: '/photos/v.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '9',
      parents: ['4', '5'],
      spouses: ['14'],
      title: 'Ralph Mercer',
      label: 'Ralph Mercer',
      description: '9, GM, DML Server Strategy',
      phone: '814-327-5895',
      email: 'ralpmerc@name.com',
      image: '/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '10',
      parents: ['4', '5'],
      title: 'Gil Adams',
      label: 'Gil Adams',
      description: '10, GM, WW Licensing Programs',
      phone: '313-630-8717',
      email: 'giladam@name.com',
      image: '/photos/z.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '11',
      parents: ['4', '5'],
      title: 'Roger Greenlee',
      label: 'Roger Greenlee',
      description: '11, Root item, it is placed close to its children.',
      phone: '847-510-2148',
      email: 'rogegree@name.com',
      image: '/photos/w.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: '12',
      title: 'James Workman',
      label: 'James Workman',
      description: '12, GM, Name Financing',
      phone: '713-624-6200',
      email: 'jamework@name.com',
      image: '/photos/l.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '13',
      spouses: ['12'],
      title: 'John Drake',
      label: 'John Drake',
      description: '13, GM, Software Management',
      phone: '469-644-8543',
      email: 'johndrak@name.com',
      image: '/photos/j.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '14',
      title: 'Melvin White',
      label: 'Melvin White',
      description: '14, GM, Real Time Collaboration & Home Entertainment Products',
      phone: '785-631-8548',
      email: 'melvwhit@name.com',
      image: '/photos/u.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '15',
      parents: ['4', '5'],
      spouses: ['16'],
      title: 'Jonathan Hitt',
      label: 'Jonathan Hitt',
      description: '15, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '16',
      title: 'Mary Spencer',
      label: 'Mary Spencer',
      description: '16, GM, Manageability and Deployment',
      phone: '605-892-8662',
      email: 'maryspen@name.com',
      image: '/photos/l.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '17',
      parents: ['15', '16'],
      spouses: ['20'],
      title: 'Abbie Lawson',
      label: 'Abbie Lawson',
      description: '17, Root item, it is placed close to its children.',
      phone: '530-322-6413',
      email: 'abbilaws@name.com',
      image: '/photos/a.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: '18',
      parents: ['16', '15'],
      title: 'Nathalie Escobedo',
      label: 'Nathalie Escobedo',
      description: '18, GM, DML Server Business Intelligence',
      phone: '504-555-8165',
      email: 'nathesco@name.com',
      image: '/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '19',
      parents: ['16', '15'],
      title: 'Bonnie Wedel',
      label: 'Bonnie Wedel',
      description: '19, VP, Enterprise Access and Security Products Division (EASP)',
      phone: '412-265-2782',
      email: 'bonnwede@name.com',
      image: '/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '20',
      title: 'Jean Kendall',
      label: 'Jean Kendall',
      description: '20, GM, DML Server Marketing',
      phone: '949-453-0415',
      email: 'jeankend@name.com',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '21',
      parents: ['10'],
      title: 'Nancy Smith',
      label: 'Nancy Smith',
      description: '21, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: '22',
      title: 'Stanley Weathers',
      label: 'Stanley Weathers',
      description: '22, Managing Dir., India Development Center',
      phone: '734-482-1633',
      email: 'stanweat@name.com',
      image: '/photos/y.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
