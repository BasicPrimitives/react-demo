const { AnnotationType, ConnectorPlacementType, ConnectorLabelPlacementType, ZOrderType,
  ConnectorShapeType, Colors, LineType, ShapeType, Size } = require('basicprimitives');

module.exports = {
  cursorItem: 5,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 5,
      toItem: 81,
      label: { color: "red", badge: "1", title: "Connector annotation" },
      labelSize: { width: 80, height: 30 }, // new Size(80, 30)
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: LineType.Dashed,
      name: "usercontrolledconnector"
    },
    {
      annotationType: AnnotationType.Background,
      items: [81, 82, 83, 84, 85],
      borderColor: '#f8e5f9',
      fillColor: '#e5f9f8',
      lineWidth: 2,
      selectItems: true,
      lineType: LineType.Dotted
    },
    {
      annotationType: AnnotationType.Shape,
      items: [5],
      label: { color: "red", badge: "3", title: "Cross Out shape annotation" },
      labelSize: { width: 120, height: 50 }, // new Size(120, 50)
      shapeType: ShapeType.CrossOut,
      borderColor: Colors.Red,
      offset: {
        left: 6,
        top: 3,
        right: 6,
        bottom: 6
      },
      lineWidth: 2,
      selectItems: false,
      lineType: LineType.Dashed
    },
    {
      annotationType: AnnotationType.Shape,
      items: [81],
      label: { color: "red", badge: "4", title: "Oval shape annotation" },
      labelSize: new Size(100, 50), // new Size(100, 50)
      shapeType: ShapeType.Oval,
      borderColor: Colors.Red,
      offset: {
        left: 14,
        top: 14,
        right: 14,
        bottom: 14
      },
      lineWidth: 2,
      selectItems: true,
      lineType: LineType.Dashed,
      fillColor: null
    }
  ],
  items: [
    {
      id: 3,

      title: 'James Holt 2',
      label: 'James Holt',
      description: '3, Sr. VP, Server & Tools Division',
      phone: '262-215-7998',
      email: 'jameholt@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 4,
      title: 'Thomas Williams 2',
      label: 'Thomas Williams',
      description: '4, VP, Server & Tools Marketing and Solutions',
      phone: '904-547-5342',
      email: 'thomwill@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      title: 'David Kirby 2',
      label: 'David Kirby',
      description: '5, AGM, Infrastructure Server and IT Pro Audience Marketing',
      phone: '614-395-7238',
      email: 'davikirb@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 6,
      title: 'Lynette Maloney 2',
      label: 'Lynette Maloney',
      description: '6, GM, Name.com Experience Platforms and Solutions',
      phone: '540-822-3862',
      email: 'lynemalo@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 7,
      parents: [1, 2],
      title: 'Glen Zeigler',
      label: 'Glen Zeigler',
      description: '7, GM, Core Infrastructure Solutions',
      phone: '920-665-7222',
      email: 'glenzeig@name.com',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 8,
      title: 'Ione Gallegos',
      label: 'Ione Gallegos',
      description: '8, GM, Patterns & Practices',
      phone: '478-322-5539',
      email: 'ionegall@name.com',
      image: '/api/images/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 10,
      parents: [3, 4],
      title: 'Heather Simmons',
      label: 'Heather Simmons',
      description: '10, GM, Name Learning',
      phone: '620-368-3620',
      email: 'heatsimm@name.com',
      image: '/api/images/photos/p.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 11,
      parents: [3, 4],
      title: 'Steven Lacombe',
      label: 'Steven Lacombe',
      description: '11, GM, Platform Strategy',
      phone: '805-800-7397',
      email: 'stevlaco@name.com',
      image: '/api/images/photos/a.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 12,
      parents: [5, 6],
      title: 'Nancy Smith',
      label: 'Nancy Smith',
      description: '12, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 13,
      parents: [5, 6],
      title: 'Jean Kendall',
      label: 'Jean Kendall',
      description: '13, GM, DML Server Marketing',
      phone: '949-453-0415',
      email: 'jeankend@name.com',
      image: '/api/images/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 14,
      parents: [5, 6],
      title: 'Brad Whitt',
      label: 'Brad Whitt',
      description: '14, GM, Application Platform and Development Marketing',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 15,
      parents: [5, 6],
      title: 'Sara Kemp',
      label: 'Sara Kemp',
      description: '15, VP, Software & Enterprise Management Division',
      phone: '918-257-4218',
      email: 'sarakemp@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 16,
      title: 'Brian Cruz',
      label: 'Brian Cruz',
      description: '16, GM, Systems Management Server',
      phone: '320-833-9024',
      email: 'briacruz@name.com',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 17,
      title: 'John Drake',
      label: 'John Drake',
      description: '17, GM, Software Management',
      phone: '469-644-8543',
      email: 'johndrak@name.com',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 18,
      parents: [8, 13],
      title: 'Patrick Perry',
      label: 'Patrick Perry',
      description: '18, GM, Storage Platforms & Solutions',
      phone: '781-515-5949',
      email: 'patrperr@name.com',
      image: '/api/images/photos/k.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 180,
      parents: [18],
      title: 'Patrick Perry Jr.',
      label: 'Patrick Perry Jr.',
      description: '180, GM, Storage Platforms & Solutions',
      phone: '781-515-5949',
      email: 'patrperr@name.com',
      image: '/api/images/photos/k.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 19,
      parents: [8, 13],
      title: 'Mary Spencer',
      label: 'Mary Spencer',
      description: '19, GM, Manageability and Deployment',
      phone: '605-892-8662',
      email: 'maryspen@name.com',
      image: '/api/images/photos/l.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 20,
      parents: [8, 13],
      title: 'Thomas Dixon',
      label: 'Thomas Dixon',
      description: '20, GM, Operations Manager',
      phone: '651-249-4047',
      email: 'thomdixo@name.com',
      image: '/api/images/photos/z.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 21,
      parents: [7, 12],
      title: 'George Duong',
      label: 'George Duong',
      description: '21, Sr. VP, Software Server System',
      phone: '434-406-2189',
      email: 'georduon@name.com',
      image: '/api/images/photos/x.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 22,
      parents: [11, 14],
      title: 'Ralph Mercer',
      label: 'Ralph Mercer',
      description: '22, GM, DML Server Strategy',
      phone: '814-327-5895',
      email: 'ralpmerc@name.com',
      image: '/api/images/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 23,
      parents: [11, 14],
      title: 'Howard Williams',
      label: 'Howard Williams',
      description: '23, GM, User Experience',
      phone: '703-740-8612',
      email: 'howawill@name.com',
      image: '/api/images/photos/v.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 24,
      parents: [11, 14],
      title: 'Nathalie Escobedo',
      label: 'Nathalie Escobedo',
      description: '24, GM, DML Server Business Intelligence',
      phone: '504-555-8165',
      email: 'nathesco@name.com',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 25,
      parents: [15, 16, 72, 90, 92, 94],
      title: 'Ashley Rue',
      label: 'Ashley Rue',
      description: '25, VP, Developer Division',
      phone: '515-324-4969',
      email: 'ashlrue@name.com',
      image: '/api/images/photos/n.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 26,
      parents: [15, 16],
      title: 'Joan Whitham',
      label: 'Joan Whitham',
      description: '26, VP, .ORG Developer Platform Team',
      phone: '914-614-5020',
      email: 'joanwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 27,
      parents: [15, 16],
      title: 'Janella Cannon',
      label: 'Janella Cannon',
      description: '27, GM, Web and UI Development Platform',
      phone: '484-870-9064',
      email: 'janecann@name.com',
      image: '/api/images/photos/q.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 28,
      parents: [15, 16],
      title: 'Roger Greenlee',
      label: 'Roger Greenlee',
      description: '28, GM, Visual Studio',
      phone: '847-510-2148',
      email: 'rogegree@name.com',
      image: '/api/images/photos/w.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 29,
      title: 'Edna Garner',
      label: 'Edna Garner',
      description: '29, GM, Office System and Applications Developer Tools',
      phone: '620-873-1915',
      email: 'ednagarn@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 30,
      parents: [17, 22],
      title: 'Brent Holston',
      label: 'Brent Holston',
      description: '30, GM, Visual Studio Team System',
      phone: '925-386-2127',
      email: 'brenhols@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 31,
      parents: [17, 22],
      title: 'Mary Russ',
      label: 'Mary Russ',
      description: '31, GM, Visual Studio Language and Data Tools',
      phone: '443-271-9086',
      email: 'maryruss@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 32,
      parents: [17, 22],
      title: 'Stanley Weathers',
      label: 'Stanley Weathers',
      description: '32, Managing Dir., India Development Center',
      phone: '734-482-1633',
      email: 'stanweat@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 33,
      parents: [18, 21],
      title: 'Melvin White',
      label: 'Melvin White',
      description: '33, GM, Real Time Collaboration & Home Entertainment Products',
      phone: '785-631-8548',
      email: 'melvwhit@name.com',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 34,
      parents: [23, 28],
      title: 'Bonnie Wedel',
      label: 'Bonnie Wedel',
      description: '34, VP, Enterprise Access and Security Products Division (EASP)',
      phone: '412-265-2782',
      email: 'bonnwede@name.com',
      image: '/api/images/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 35,
      parents: [23, 28],
      title: 'Norman Dalton',
      label: 'Norman Dalton',
      description: '35, GM, Haifa R&D Center',
      phone: '316-334-6273',
      email: 'normdalt@name.com',
      image: '/api/images/photos/o.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 36,
      parents: [23, 28],
      title: 'Melissa Houser',
      label: 'Melissa Houser',
      description: '36, GM, Core File Solutions',
      phone: '630-887-1188',
      email: 'melihous@name.com',
      image: '/api/images/photos/p.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 37,
      parents: [23, 28],
      title: 'Abbie Lawson',
      label: 'Abbie Lawson',
      description: '37, GM, Software Server Solutions Group',
      phone: '530-322-6413',
      email: 'abbilaws@name.com',
      image: '/api/images/photos/a.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 38,
      parents: [27, 29],
      title: 'Ernest Putnam',
      label: 'Ernest Putnam',
      description: '38, GM, Connected Systems Division',
      phone: '626-831-0555',
      email: 'erneputn@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 39,
      parents: [27, 29],
      title: 'Robert Lemieux',
      label: 'Robert Lemieux',
      description: '39, GM, Connected Framework',
      phone: '662-787-2600',
      email: 'robelemi@name.com',
      image: '/api/images/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 40,
      parents: [27, 29],
      title: 'Arthur Wood',
      label: 'Arthur Wood',
      description: '40, GM, XML Enterprise Services',
      phone: '630-677-5265',
      email: 'arthwood@name.com',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 390,
      parents: [27, 29],
      title: 'Jonathan Hitt 2',
      label: 'Jonathan Hitt 2',
      description: '390, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 400,
      parents: [27, 29],
      title: 'Celestina Crum 2',
      label: 'Celestina Crum 2',
      description: '400, CFO, Platforms Products & Services',
      phone: '419-578-6479',
      email: 'celecrum@name.com',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 41,
      title: 'Jonathan Hitt',
      label: 'Jonathan Hitt',
      description: '41, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 42,
      parents: [65],
      title: 'Celestina Crum',
      label: 'Celestina Crum',
      description: '42, CFO, Platforms Products & Services',
      phone: '419-578-6479',
      email: 'celecrum@name.com',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 43,
      parents: [30, 33],
      title: 'Cindy Turner',
      label: 'Cindy Turner',
      description: '43, GM, Pricing',
      phone: '530-934-4295',
      email: 'cindturn@name.com',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 44,
      parents: [30, 33],
      title: 'Victoria Sequeira',
      label: 'Victoria Sequeira',
      description: '44, GM, Worldwide Licensing',
      phone: '973-883-9137',
      email: 'victsequ@name.com',
      image: '/api/images/photos/k.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 45,
      parents: [30, 33],
      title: 'James Workman',
      label: 'James Workman',
      description: '45, GM, Name Financing',
      phone: '713-624-6200',
      email: 'jamework@name.com',
      image: '/api/images/photos/l.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 46,
      parents: [32, 40],
      title: 'Gil Adams',
      label: 'Gil Adams',
      description: '46, GM, WW Licensing Programs',
      phone: '313-630-8717',
      email: 'giladam@name.com',
      image: '/api/images/photos/z.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 47,
      parents: [32, 40],
      title: 'Norma Moore',
      label: 'Norma Moore',
      description: '47, GM, WW Licensing Solutions',
      phone: '334-496-5203',
      email: 'normmoor@name.com',
      image: '/api/images/photos/x.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 48,
      parents: [35, 36],
      title: 'Carlos Cardenas',
      label: 'Carlos Cardenas',
      description: '48, GM, Marketing and Readiness',
      phone: '775-999-3630',
      email: 'carlcard@name.com',
      image: '/api/images/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 49,
      parents: [37, 39],
      title: 'John Green',
      label: 'John Green',
      description: '49, Sr. VP, Software Core Operating System Division',
      phone: '937-475-8106',
      email: 'johngree@name.com',
      image: '/api/images/photos/v.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 50,
      parents: [37, 39],
      title: 'Richard Morales',
      label: 'Richard Morales',
      description: '50, VP, Core OS Development',
      phone: '650-729-6483',
      email: 'richmora@name.com',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 51,
      parents: [37, 39],
      title: 'Carolyn Jones',
      label: 'Carolyn Jones',
      description: '51, VP, Software Architecture and Kernel',
      phone: '903-859-0477',
      email: 'carojone@name.com',
      image: '/api/images/photos/n.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 52,
      parents: [41, 42],
      title: 'Charlotte White',
      label: 'Charlotte White',
      description: '52, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 53,
      parents: [41, 42, 60],
      title: 'Elizabeth Zito',
      label: 'Elizabeth Zito',
      description: '53, GM, Software Device Experience Group',
      phone: '307-201-4036',
      email: 'elizzito@name.com',
      image: '/api/images/photos/q.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 54,
      parents: [41, 42],
      title: 'Edna Cavazos',
      label: 'Edna Cavazos',
      description: '54, GM, Software Device Experience',
      phone: '337-977-6357',
      email: 'ednacava@name.com',
      image: '/api/images/photos/w.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 55,
      parents: [44, 48],
      title: 'Debra Mayers',
      label: 'Debra Mayers',
      description: '55, GM, Core Networking and Collaboration',
      phone: '334-538-2338',
      email: 'debrmaye@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 56,
      parents: [44, 48],
      title: 'Gerald Castonguay',
      label: 'Gerald Castonguay',
      description: '56, GM, Cableless & Mobility',
      phone: '706-541-8969',
      email: 'geracast@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 57,
      parents: [47, 49],
      title: 'Kevin Carico',
      label: 'Kevin Carico',
      description: '57, GM, Network Infrastructure Servers',
      phone: '530-452-7085',
      email: 'kevicari@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 58,
      parents: [50, 53],
      title: 'Robert Morgan',
      label: 'Robert Morgan',
      description: '58, VP, Security Technology Unit (STU)',
      phone: '308-532-6548',
      email: 'robemorg@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 59,
      parents: [50, 53],
      title: 'Susan Haines',
      label: 'Susan Haines',
      description: '59, VP',
      phone: '937-738-0077',
      email: 'susahain@name.com',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 60,
      title: 'Susan Zito',
      label: 'Susan Zito',
      description: '60, VP',
      phone: '937-738-0077',
      email: 'susahain@name.com',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 61,
      parents: [65],
      title: 'Jonathan Hitt',
      label: 'Jonathan Hitt',
      description: '61, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 62,
      parents: [66],
      title: 'Celestina Crum',
      label: 'Celestina Crum',
      description: '62, CFO, Platforms Products & Services',
      phone: '419-578-6479',
      email: 'celecrum@name.com',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 63,
      parents: [61, 62],
      title: 'Carolyn Jones',
      label: 'Carolyn Jones',
      description: '63, VP, Software Architecture and Kernel',
      phone: '903-859-0477',
      email: 'carojone@name.com',
      image: '/api/images/photos/n.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 64,
      parents: [61, 62],
      title: 'Charlotte White',
      label: 'Charlotte White',
      description: '64, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 65,
      title: 'Natalia Kudinova',
      label: 'Natalia Kudinova',
      description: '65, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 66,
      title: 'Natalia Kudinova',
      label: 'Natalia Kudinova',
      description: '66, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 67,
      parents: [66],
      title: 'Jonathan Hitt',
      label: 'Jonathan Hitt',
      description: '67, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 68,
      title: 'Celestina Crum',
      label: 'Celestina Crum',
      description: '68, CFO, Platforms Products & Services',
      phone: '419-578-6479',
      email: 'celecrum@name.com',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 69,
      parents: [67, 68],
      title: 'Carolyn Jones',
      label: 'Carolyn Jones',
      description: '69, VP, Software Architecture and Kernel',
      phone: '903-859-0477',
      email: 'carojone@name.com',
      image: '/api/images/photos/n.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 70,
      parents: [67, 68],
      title: 'Charlotte White',
      label: 'Charlotte White',
      description: '70, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 71,
      parents: [67, 68],
      title: 'Charlotte White',
      label: 'Charlotte White',
      description: '71, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 73,
      parents: [38, 390, 400],
      title: 'Test Node 1',
      label: 'Test Node 1',
      description: '73, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 74,
      parents: [38, 390, 400],
      title: 'Test Node 2',
      label: 'Test Node 2',
      description: '74, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 75,
      parents: [38, 390, 400],
      title: 'Test Node 3',
      label: 'Test Node 3',
      description: '75, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 76,
      parents: [38, 390, 400],
      title: 'Test Node 4',
      label: 'Test Node 4',
      description: '76, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 77,
      parents: [19, 20],
      title: 'Test Node 5',
      label: 'Test Node 5',
      description: '77, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 78,
      parents: [19, 20],
      title: 'Test Node 6',
      label: 'Test Node 6',
      description: '78, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 81,
      parents: [3],
      title: 'Ext Node 81',
      label: 'Ext Node 81',
      description: '81, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 82,
      parents: [81],
      title: 'Ext Node 82',
      label: 'Ext Node 82',
      description: '82, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 85,
      parents: [81, 3],
      title: 'Ext Node 85',
      label: 'Ext Node 85',
      description: '85, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 83,
      parents: [82, 3],
      title: 'Ext Node 83',
      label: 'Ext Node 83',
      description: '83, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 84,
      parents: [82, 3],
      title: 'Ext Node 84',
      label: 'Ext Node 84',
      description: '84, VP, Software Networking & Device Technologies',
      phone: '248-402-6142',
      email: 'charwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 103,
      title: 'James Holt',
      label: 'James Holt',
      description: '103, Sr. VP, Server & Tools Division',
      phone: '262-215-7998',
      email: 'jameholt@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 104,
      title: 'Thomas Williams',
      label: 'Thomas Williams',
      description: '104, VP, Server & Tools Marketing and Solutions',
      phone: '904-547-5342',
      email: 'thomwill@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 105,
      title: 'David Kirby',
      label: 'David Kirby',
      description: '105, GM, Infrastructure Server and IT Pro Audience Marketing',
      phone: '614-395-7238',
      email: 'davikirb@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 106,
      title: 'Lynette Maloney',
      label: 'Lynette Maloney',
      description: '106, GM, Name.com Experience Platforms and Solutions',
      phone: '540-822-3862',
      email: 'lynemalo@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 109,
      title: 'Jose Clark',
      label: 'Jose Clark',
      description: '109, GM, TechNet and MSDN',
      phone: '401-218-3019',
      email: 'joseclar@name.com',
      image: '/api/images/photos/o.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 112,
      parents: [103, 104, 3],
      title: 'Nancy Smith',
      label: 'Nancy Smith',
      description: '112, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 113,
      parents: [103, 104],
      title: 'Jean Kendall',
      label: 'Jean Kendall',
      description: '113, GM, DML Server Marketing',
      phone: '949-453-0415',
      email: 'jeankend@name.com',
      image: '/api/images/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 114,
      parents: [103, 104],
      title: 'Brad Whitt',
      label: 'Brad Whitt',
      description: '114, GM, Application Platform and Development Marketing',
      phone: '502-528-6379',
      email: 'bradwhit@name.com',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 115,
      parents: [105, 106],
      title: 'Sara Kemp',
      label: 'Sara Kemp',
      description: '115, VP, Software & Enterprise Management Division',
      phone: '918-257-4218',
      email: 'sarakemp@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 116,
      parents: [105, 106],
      title: 'Brian Cruz',
      label: 'Brian Cruz',
      description: '116, GM, Systems Management Server',
      phone: '320-833-9024',
      email: 'briacruz@name.com',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 117,
      parents: [105, 106],
      title: 'John Drake',
      label: 'John Drake',
      description: '117, GM, Software Management',
      phone: '469-644-8543',
      email: 'johndrak@name.com',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 118,
      title: 'Patrick Perry',
      label: 'Patrick Perry',
      description: '118, GM, Storage Platforms & Solutions',
      phone: '781-515-5949',
      email: 'patrperr@name.com',
      image: '/api/images/photos/k.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 119,
      parents: [109, 112],
      title: 'Mary Spencer',
      label: 'Mary Spencer',
      description: '119, GM, Manageability and Deployment',
      phone: '605-892-8662',
      email: 'maryspen@name.com',
      image: '/api/images/photos/l.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 120,
      parents: [109, 112],
      title: 'Thomas Dixon',
      label: 'Thomas Dixon',
      description: '120, GM, Operations Manager',
      phone: '651-249-4047',
      email: 'thomdixo@name.com',
      image: '/api/images/photos/z.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 121,
      parents: [114],
      title: 'George Duong',
      label: 'George Duong',
      description: '121, Sr. VP, Software Server System',
      phone: '434-406-2189',
      email: 'georduon@name.com',
      image: '/api/images/photos/x.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 122,
      parents: [114],
      title: 'Ralph Mercer',
      label: 'Ralph Mercer',
      description: '122, GM, DML Server Strategy',
      phone: '814-327-5895',
      email: 'ralpmerc@name.com',
      image: '/api/images/photos/c.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 123,
      parents: [116],
      title: 'Howard Williams',
      label: 'Howard Williams',
      description: '123, GM, User Experience',
      phone: '703-740-8612',
      email: 'howawill@name.com',
      image: '/api/images/photos/v.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 124,
      parents: [117, 118],
      title: 'Nathalie Escobedo',
      label: 'Nathalie Escobedo',
      description: '124, GM, DML Server Business Intelligence',
      phone: '504-555-8165',
      email: 'nathesco@name.com',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 125,
      title: 'Ashley Rue',
      label: 'Ashley Rue',
      description: '125, VP, Developer Division',
      phone: '515-324-4969',
      email: 'ashlrue@name.com',
      image: '/api/images/photos/n.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 126,
      title: 'Joan Whitham',
      label: 'Joan Whitham',
      description: '126, VP, .ORG Developer Platform Team',
      phone: '914-614-5020',
      email: 'joanwhit@name.com',
      image: '/api/images/photos/m.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 127,
      parents: [120],
      title: 'Edna Garner',
      label: 'Edna Garner',
      description: '127, GM, Office System and Applications Developer Tools',
      phone: '620-873-1915',
      email: 'ednagarn@name.com',
      image: '/api/images/photos/e.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 128,
      title: 'Roger Greenlee',
      label: 'Roger Greenlee',
      description: '128, GM, Visual Studio',
      phone: '847-510-2148',
      email: 'rogegree@name.com',
      image: '/api/images/photos/w.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 129,
      title: 'Janella Cannon',
      label: 'Janella Cannon',
      description: '129, GM, Web and UI Development Platform',
      phone: '484-870-9064',
      email: 'janecann@name.com',
      image: '/api/images/photos/q.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 130,
      parents: [129, 128, 149],
      title: 'Natalia Kudinova',
      label: 'Natalia Kudinova',
      description: '130, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 131,
      parents: [130, 132],
      title: 'Mary Russ',
      label: 'Mary Russ',
      description: '131, GM, Visual Studio Language and Data Tools',
      phone: '443-271-9086',
      email: 'maryruss@name.com',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 132,
      parents: [127],
      title: 'Stanley Weathers',
      label: 'Stanley Weathers',
      description: '132, Managing Dir., India Development Center',
      phone: '734-482-1633',
      email: 'stanweat@name.com',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 133,
      parents: [127],
      title: 'Melvin White',
      label: 'Melvin White',
      description: '133, GM, Real Time Collaboration & Home Entertainment Products',
      phone: '785-631-8548',
      email: 'melvwhit@name.com',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 134,
      parents: [133, 135, 43],
      title: 'Bonnie Wedel',
      label: 'Bonnie Wedel',
      description: '134, VP, Enterprise Access and Security Products Division (EASP)',
      phone: '412-265-2782',
      email: 'bonnwede@name.com',
      image: '/api/images/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 135,
      parents: [136, 137],
      title: 'Norman Dalton',
      label: 'Norman Dalton',
      description: '135, GM, Haifa R&D Center',
      phone: '316-334-6273',
      email: 'normdalt@name.com',
      image: '/api/images/photos/o.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 136,
      parents: [120],
      isActive: false,
      title: 'Brent Holston',
      label: 'Brent Holston',
      description: '136, GM, Visual Studio Team System',
      phone: '925-386-2127',
      email: 'brenhols@name.com',
      image: '/api/images/photos/r.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 137,
      title: 'Abbie Lawson',
      label: 'Abbie Lawson',
      description: '137, GM, Software Server Solutions Group',
      phone: '530-322-6413',
      email: 'abbilaws@name.com',
      image: '/api/images/photos/a.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 138,
      parents: [122],
      title: 'Ernest Putnam',
      label: 'Ernest Putnam',
      description: '138, GM, Connected Systems Division',
      phone: '626-831-0555',
      email: 'erneputn@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 139,
      parents: [122, 123],
      title: 'Robert Lemieux',
      label: 'Robert Lemieux',
      description: '139, GM, Connected Framework',
      phone: '662-787-2600',
      email: 'robelemi@name.com',
      image: '/api/images/photos/d.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 140,
      parents: [139],
      title: 'Arthur Wood',
      label: 'Arthur Wood',
      description: '140, GM, XML Enterprise Services',
      phone: '630-677-5265',
      email: 'arthwood@name.com',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 141,
      parents: [139],
      title: 'Jonathan Hitt',
      label: 'Jonathan Hitt',
      description: '141, GM, BizTalk Server',
      phone: '443-591-0659',
      email: 'jonahitt@name.com',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 142,
      parents: [124],
      title: 'Celestina Crum',
      label: 'Celestina Crum',
      description: '142, CFO, Platforms Products & Services',
      phone: '419-578-6479',
      email: 'celecrum@name.com',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 143,
      parents: [124],
      title: 'Cindy Turner',
      label: 'Cindy Turner',
      description: '143, GM, Pricing',
      phone: '530-934-4295',
      email: 'cindturn@name.com',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 144,
      parents: [124],
      title: 'Victoria Sequeira',
      label: 'Victoria Sequeira',
      description: '144, GM, Worldwide Licensing',
      phone: '973-883-9137',
      email: 'victsequ@name.com',
      image: '/api/images/photos/k.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 145,
      parents: [144],
      title: 'James Workman',
      label: 'James Workman',
      description: '145, GM, Name Financing',
      phone: '713-624-6200',
      email: 'jamework@name.com',
      image: '/api/images/photos/l.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 146,
      parents: [144],
      title: 'Gil Adams',
      label: 'Gil Adams',
      description: '146, GM, WW Licensing Programs',
      phone: '313-630-8717',
      email: 'giladam@name.com',
      image: '/api/images/photos/z.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 147,
      parents: [149, 128, 129],
      title: 'Norma Moore',
      label: 'Norma Moore',
      description: '147, GM, WW Licensing Solutions',
      phone: '334-496-5203',
      email: 'normmoor@name.com',
      image: '/api/images/photos/x.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 148,
      parents: [146, 147],
      title: 'Carlos Cardenas',
      label: 'Carlos Cardenas',
      description: '48, GM, Marketing and Readiness',
      phone: '775-999-3630',
      email: 'carlcard@name.com',
      image: '/api/images/photos/c.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 149,
      parents: [125, 126],
      title: 'John Green',
      label: 'John Green',
      description: '149, Sr. VP, Software Core Operating System Division',
      phone: '937-475-8106',
      email: 'johngree@name.com',
      image: '/api/images/photos/v.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
