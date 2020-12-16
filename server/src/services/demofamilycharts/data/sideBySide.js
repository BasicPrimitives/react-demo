const { AnnotationType, ConnectorPlacementType, ConnectorLabelPlacementType, ZOrderType,
  ConnectorShapeType, Colors, LineType, PageFitMode } = require('basicprimitives');

module.exports = {
  cursorItem: 5,
  pageFitMode: PageFitMode.PageWidth,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 36,
      toItem: 16,
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
      title: 'David Dalton',
      label: 'David Dalton',
      description: '1, Chief Executive Officer (CEO)',
      phone: '352-206-7599',
      email: 'davidalt@name.com',
      image: '/api/images/photos/q.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 2,
      title: 'Jeanna White',
      label: 'Jeanna White',
      description: '2, Co-Presidents, Platform Products & Services Division',
      phone: '505-791-1689',
      email: 'jeanwhit@name.com',
      image: '/api/images/photos/w.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 3,
      title: 'James Holt',
      label: 'James Holt',
      description: '3, Sr. VP, Server & Tools Division',
      phone: '262-215-7998',
      email: 'jameholt@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 4,
      title: 'Thomas Williams',
      label: 'Thomas Williams',
      description: '4, VP, Server & Tools Marketing and Solutions',
      phone: '904-547-5342',
      email: 'thomwill@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 5,
      title: 'David Kirby',
      label: 'David Kirby',
      description: '5, GM, Infrastructure Server and IT Pro Audience Marketing',
      phone: '614-395-7238',
      email: 'davikirb@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 6,
      title: 'Lynette Maloney',
      label: 'Lynette Maloney',
      description: '6, GM, Name.com Experience Platforms and Solutions',
      phone: '540-822-3862',
      email: 'lynemalo@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 7,
      title: 'Glen Zeigler',
      label: 'Glen Zeigler',
      description: '7, GM, Core Infrastructure Solutions',
      phone: '920-665-7222',
      email: 'glenzeig@name.com',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 8,
      title: 'Ione Gallegos',
      label: 'Ione Gallegos',
      description: '8, GM, Patterns & Practices',
      phone: '478-322-5539',
      email: 'ionegall@name.com',
      image: '/api/images/photos/i.png',
      itemTitleColor: '#ff0000'
    },

    {
      id: 9,
      title: 'Jose Clark',
      label: 'Jose Clark',
      description: '9, GM, TechNet and MSDN',
      phone: '401-218-3019',
      email: 'joseclar@name.com',
      image: '/api/images/photos/o.png',
      itemTitleColor: '#4b0082',
      parents: [1, 2]
    },
    {
      id: 10,
      title: 'Heather Simmons',
      label: 'Heather Simmons',
      description: '10, GM, Name Learning',
      phone: '620-368-3620',
      email: 'heatsimm@name.com',
      image: '/api/images/photos/p.png',
      itemTitleColor: '#4b0082',
      parents: [1, 2]
    },
    {
      id: 11,
      title: 'Steven Lacombe',
      label: 'Steven Lacombe',
      description: '11, GM, Platform Strategy',
      phone: '805-800-7397',
      email: 'stevlaco@name.com',
      image: '/api/images/photos/a.png',
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
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082',
      parents: [3, 4]
    },
    {
      id: 13,
      title: 'Jean Kendall',
      label: 'Jean Kendall',
      description: '13, GM, DML Server Marketing',
      phone: '949-453-0415',
      email: 'jeankend@name.com',
      image: '/api/images/photos/d.png',
      itemTitleColor: '#4b0082',
      parents: [3, 4]
    },
    {
      id: 14,
      title: 'Brad Whitt',
      label: 'Brad Whitt',
      description: '14, GM, Application Platform and Development Marketing',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082',
      parents: [3, 4, 5]
    },

    {
      id: 15,
      title: 'Sara Kemp',
      label: 'Sara Kemp',
      description: '15, VP, Software & Enterprise Management Division',
      phone: '918-257-4218',
      email: 'sarakemp@name.com',
      image: '/api/images/photos/g.png',
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
      image: '/api/images/photos/h.png',
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
      image: '/api/images/photos/j.png',
      itemTitleColor: '#4b0082',
      parents: [5, 6]
    },

    {
      id: 18,
      title: 'Patrick Perry',
      label: 'Patrick Perry',
      description: '18, GM, Storage Platforms & Solutions',
      phone: '781-515-5949',
      email: 'patrperr@name.com',
      image: '/api/images/photos/k.png',
      itemTitleColor: '#4b0082',
      parents: [7, 8]
    },

    {
      id: 19,
      title: 'Mary Spencer',
      label: 'Mary Spencer',
      description: '19, GM, Manageability and Deployment',
      phone: '605-892-8662',
      email: 'maryspen@name.com',
      image: '/api/images/photos/l.png',
      itemTitleColor: '#4b0082',
      parents: [9, 12]
    },
    {
      id: 20,
      title: 'Thomas Dixon',
      label: 'Thomas Dixon',
      description: '20, GM, Operations Manager',
      phone: '651-249-4047',
      email: 'thomdixo@name.com',
      image: '/api/images/photos/z.png',
      itemTitleColor: '#4b0082',
      parents: [9, 12]
    },

    {
      id: 21,
      title: 'George Duong',
      label: 'George Duong',
      description: '21, Sr. VP, Software Server System',
      phone: '434-406-2189',
      email: 'georduon@name.com',
      image: '/api/images/photos/x.png',
      itemTitleColor: '#4b0082',
      parents: [14]
    },
    {
      id: 22,
      title: 'Ralph Mercer',
      label: 'Ralph Mercer',
      description: '22, GM, DML Server Strategy',
      phone: '814-327-5895',
      email: 'ralpmerc@name.com',
      image: '/api/images/photos/c.png',
      itemTitleColor: '#4b0082',
      parents: [14]
    },

    {
      id: 23,
      title: 'Howard Williams',
      label: 'Howard Williams',
      description: '23, GM, User Experience',
      phone: '703-740-8612',
      email: 'howawill@name.com',
      image: '/api/images/photos/v.png',
      itemTitleColor: '#4b0082',
      parents: [16]
    },

    {
      id: 24,
      title: 'Nathalie Escobedo',
      label: 'Nathalie Escobedo',
      description: '24, GM, DML Server Business Intelligence',
      phone: '504-555-8165',
      email: 'nathesco@name.com',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082',
      parents: [17, 18]
    },

    {
      id: 25,
      title: 'Ashley Rue',
      label: 'Ashley Rue',
      description: '25, Root item, it is placed close to its children.',
      phone: '515-324-4969',
      email: 'ashlrue@name.com',
      image: '/api/images/photos/n.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 26,
      title: 'Joan Whitham',
      label: 'Joan Whitham',
      description: '26, Root item, it is placed close to its children.',
      phone: '914-614-5020',
      email: 'joanwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#ff0000'
    },

    {
      id: 27,
      title: 'Edna Garner',
      label: 'Edna Garner',
      description: '27, GM, Office System and Applications Developer Tools',
      phone: '620-873-1915',
      email: 'ednagarn@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#4b0082',
      parents: [20]
    },
    {
      id: 28,
      title: 'Roger Greenlee',
      label: 'Roger Greenlee',
      description: '28, Root item, it is placed close to its children.',
      phone: '847-510-2148',
      email: 'rogegree@name.com',
      image: '/api/images/photos/w.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 29,
      title: 'Janella Cannon',
      label: 'Janella Cannon',
      description: '29, Root item, it is placed close to its children.',
      phone: '484-870-9064',
      email: 'janecann@name.com',
      image: '/api/images/photos/q.png',
      itemTitleColor: '#ff0000'
    },

    {
      id: 30,
      title: 'Natalia Kudinova',
      label: 'Natalia Kudinova',
      description: '65, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082',
      parents: [29, 28]
    },
    {
      id: 31,
      title: 'Mary Russ',
      label: 'Mary Russ',
      description: '31, GM, Visual Studio Language and Data Tools',
      phone: '443-271-9086',
      email: 'maryruss@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082',
      parents: [30, 32]
    },
    {
      id: 32,
      title: 'Stanley Weathers',
      label: 'Stanley Weathers',
      description: '32, Managing Dir., India Development Center',
      phone: '734-482-1633',
      email: 'stanweat@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082',
      parents: [27]
    },
    {
      id: 33,
      title: 'Melvin White',
      label: 'Melvin White',
      description: '33, GM, Real Time Collaboration & Home Entertainment Products',
      phone: '785-631-8548',
      email: 'melvwhit@name.com',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#4b0082',
      parents: [27]
    },
    {
      id: 34,
      title: 'Bonnie Wedel',
      label: 'Bonnie Wedel',
      description: '34, VP, Enterprise Access and Security Products Division (EASP)',
      phone: '412-265-2782',
      email: 'bonnwede@name.com',
      image: '/api/images/photos/i.png',
      itemTitleColor: '#4b0082',
      parents: [33, 35]
    },
    {
      id: 35,
      title: 'Norman Dalton',
      label: 'Norman Dalton',
      description: '35, GM, Haifa R&D Center',
      phone: '316-334-6273',
      email: 'normdalt@name.com',
      image: '/api/images/photos/o.png',
      itemTitleColor: '#4b0082',
      parents: [36, 37]
    },
    {
      id: 36,
      title: 'Brent Holston',
      label: 'Brent Holston',
      description: '36, GM, Visual Studio Team System',
      phone: '925-386-2127',
      email: 'brenhols@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#4b0082',
      parents: [20]
    },
    {
      id: 37,
      title: 'Abbie Lawson',
      label: 'Abbie Lawson',
      description: '37, Root item, it is placed close to its children.',
      phone: '530-322-6413',
      email: 'abbilaws@name.com',
      image: '/api/images/photos/a.png',
      itemTitleColor: '#ff0000'
    },

    {
      id: 38,
      title: 'Ernest Putnam',
      label: 'Ernest Putnam',
      description: '38, GM, Connected Systems Division',
      phone: '626-831-0555',
      email: 'erneputn@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082',
      parents: [22]
    },
    {
      id: 39,
      title: 'Robert Lemieux',
      label: 'Robert Lemieux',
      description: '39, GM, Connected Framework',
      phone: '662-787-2600',
      email: 'robelemi@name.com',
      image: '/api/images/photos/d.png',
      itemTitleColor: '#4b0082',
      parents: [22, 23]
    },

    {
      id: 40,
      title: 'Arthur Wood',
      label: 'Arthur Wood',
      description: '40, GM, XML Enterprise Services',
      phone: '630-677-5265',
      email: 'arthwood@name.com',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082',
      parents: [39]
    },
    {
      id: 41,
      title: 'Jonathan Hitt',
      label: 'Jonathan Hitt',
      description: '41, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082',
      parents: [39]
    },

    {
      id: 42,
      title: 'Celestina Crum',
      label: 'Celestina Crum',
      description: '42, CFO, Platforms Products & Services',
      phone: '419-578-6479',
      email: 'celecrum@name.com',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082',
      parents: [24]
    },
    {
      id: 43,
      title: 'Cindy Turner',
      label: 'Cindy Turner',
      description: '43, GM, Pricing',
      phone: '530-934-4295',
      email: 'cindturn@name.com',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#4b0082',
      parents: [24]
    },
    {
      id: 44,
      title: 'Victoria Sequeira',
      label: 'Victoria Sequeira',
      description: '44, GM, Worldwide Licensing',
      phone: '973-883-9137',
      email: 'victsequ@name.com',
      image: '/api/images/photos/k.png',
      itemTitleColor: '#4b0082',
      parents: [24]
    },

    {
      id: 45,
      title: 'James Workman',
      label: 'James Workman',
      description: '45, GM, Name Financing',
      phone: '713-624-6200',
      email: 'jamework@name.com',
      image: '/api/images/photos/l.png',
      itemTitleColor: '#4b0082',
      parents: [44]
    },
    {
      id: 46,
      title: 'Gil Adams',
      label: 'Gil Adams',
      description: '46, GM, WW Licensing Programs',
      phone: '313-630-8717',
      email: 'giladam@name.com',
      image: '/api/images/photos/z.png',
      itemTitleColor: '#4b0082',
      parents: [44]
    },

    {
      id: 47,
      title: 'Norma Moore',
      label: 'Norma Moore',
      description: '47, GM, WW Licensing Solutions',
      phone: '334-496-5203',
      email: 'normmoor@name.com',
      image: '/api/images/photos/x.png',
      itemTitleColor: '#4b0082',
      parents: [49]
    },
    {
      id: 48,
      title: 'Carlos Cardenas',
      label: 'Carlos Cardenas',
      description: '48, GM, Marketing and Readiness',
      phone: '775-999-3630',
      email: 'carlcard@name.com',
      image: '/api/images/photos/c.png',
      itemTitleColor: '#4b0082',
      parents: [46, 47]
    },

    {
      id: 49,
      title: 'John Green',
      label: 'John Green',
      description: '49, Sr. VP, Software Core Operating System Division',
      phone: '937-475-8106',
      email: 'johngree@name.com',
      image: '/api/images/photos/v.png',
      itemTitleColor: '#4b0082',
      parents: [25, 26]
    }
  ]
};
