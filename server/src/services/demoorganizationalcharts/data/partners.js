const { Colors, ItemType, AdviserPlacementType, ChildrenPlacementType,
  LineType, AnnotationType, ZOrderType, ConnectorShapeType, ConnectorPlacementType,
  ConnectorLabelPlacementType, Thickness } = require('basicprimitives');

module.exports = {
  items: [
    {
      id: 0,
      parent: null /* if parent set to null, it is shown at the root of hierarchy */,
      title: 'Root',
      description: 'Regular root item',
      image: '/api/images/photos/r.png',
      groupTitle: 'Has Partners',
      groupTitleColor: Colors.Red,
      email: 'root@name.com',
      phone: '648-123-12-12'
    },
    {
      id: 1,
      parent: 0,
      title: 'GP 1',
      description: 'General Partner on right',
      image: '/api/images/photos/g.png',
      itemType: ItemType.GeneralPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitleColor: Colors.Green,
      groupTitle: 'Partner',
      email: 'gp1@name.com',
      phone: '648-123-12-13'
    },
    {
      id: 2,
      parent: 0,
      title: 'LP 2',
      description: 'Limited Partner on right',
      image: '/api/images/photos/l.png',
      itemType: ItemType.LimitedPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: 'Partner',
      email: 'lp2@name.com',
      phone: '648-123-12-14'
    },
    {
      id: 3,
      parent: 0,
      title: 'LP 3',
      description: 'Limited Partner on left',
      image: '/api/images/photos/l.png',
      itemType: ItemType.LimitedPartner,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: 'Partner',
      email: 'lp3@name.com',
      phone: '648-123-12-15'
    },
    {
      id: 4,
      parent: 0,
      title: 'Regular 1',
      description: 'Regular',
      image: '/api/images/photos/r.png',
      email: 'regular1@name.com',
      phone: '648-123-12-16'
    },
    {
      id: 5,
      parent: 4,
      title: 'Adviser 5',
      description: 'Adviser on right',
      image: '/api/images/photos/a.png',
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitleColor: Colors.Red,
      groupTitle: 'Has Partners',
      email: 'adviser5@name.com',
      phone: '648-123-12-17'
    },
    {
      id: 6,
      parent: 5,
      title: 'GP 6',
      description: 'General Partner on right',
      image: '/api/images/photos/g.png',
      itemType: ItemType.GeneralPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitleColor: Colors.Green,
      groupTitle: 'Partner',
      email: 'gp6@name.com',
      phone: '648-123-12-18'
    },
    {
      id: 7,
      parent: 0,
      title: 'Regular 7',
      description: 'Regular',
      image: '/api/images/photos/r.png',
      childrenPlacementType: ChildrenPlacementType.Matrix,
      groupTitle: 'Has Partners',
      groupTitleColor: Colors.Red,
      email: 'regular7@name.com',
      phone: '648-123-12-19'
    },
    {
      id: 8,
      parent: 7,
      title: 'LP 8',
      description: 'Limited Partner on the right',
      image: '/api/images/photos/l.png',
      itemType: ItemType.LimitedPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: 'Partner',
      email: 'lp8@name.com',
      phone: '648-123-12-20'
    },
    {
      id: 9,
      parent: 8,
      title: 'Assistant 9',
      description: 'Assistant having its own partner node',
      image: '/api/images/photos/r.png',
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      email: 'assistant9@name.com',
      phone: '648-123-12-21'
    },
    {
      id: 10,
      parent: 9,
      title: 'Adviser 10',
      description: 'Adviser on the left',
      image: '/api/images/photos/a.png',
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitleColor: Colors.Red,
      groupTitle: 'Has Partners',
      email: 'adviser10@name.com',
      phone: '648-123-12-22'
    },
    {
      id: 11,
      parent: 10,
      title: 'GP 11',
      description: 'General Partner on right',
      image: '/api/images/photos/g.png',
      itemType: ItemType.GeneralPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitleColor: Colors.Green,
      groupTitle: 'Partner',
      email: 'gp11@name.com',
      phone: '648-123-12-23'
    },
    {
      id: 12,
      parent: 7,
      title: 'GP 12',
      description: 'General Partner on right',
      image: '/api/images/photos/g.png',
      itemType: ItemType.GeneralPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitleColor: Colors.Green,
      groupTitle: 'Partner',
      email: 'gp12@name.com',
      phone: '648-123-12-24'
    },
    {
      id: 13,
      parent: 12,
      title: 'Adviser 13',
      description: 'Adviser',
      image: '/api/images/photos/a.png',
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: 'Has Partners',
      groupTitleColor: Colors.Red,
      email: 'adviser13@name.com',
      phone: '648-123-12-25'
    },
    {
      id: 14,
      parent: 13,
      title: 'GP 14',
      description: 'General Partner on right',
      image: '/api/images/photos/g.png',
      itemType: ItemType.GeneralPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitleColor: Colors.Green,
      groupTitle: 'Partner',
      email: 'gp14@name.com',
      phone: '648-123-12-26'
    },
    {
      id: 15,
      parent: 13,
      title: 'Adviser 15',
      description: 'Adviser',
      image: '/api/images/photos/a.png',
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Right,
      email: 'adviser15@name.com',
      phone: '648-123-12-27'
    },
    {
      id: 16,
      parent: 13,
      title: 'Regular 16',
      description: 'Regular',
      image: '/api/images/photos/r.png',
      childrenPlacementType: ChildrenPlacementType.Matrix,
      email: 'regular16@name.com',
      phone: '648-123-12-28'
    },
    {
      id: 17,
      parent: 16,
      title: 'Regular 17',
      description: 'Regular',
      image: '/api/images/photos/r.png',
      itemType: ItemType.Regular /* We explisitly set iteType of regular item */,
      email: 'regular17@name.com',
      phone: '648-123-12-29'
    },
    {
      id: 18,
      parent: 12,
      title: 'Assistant 18',
      description: 'Assistant item on right',
      image: '/api/images/photos/s.png',
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      email: 'assistant18@name.com',
      phone: '648-123-12-30'
    },
    {
      id: 19,
      parent: 12,
      title: 'Assistant 19',
      description: 'Assistant item on right',
      image: '/api/images/photos/s.png',
      itemType: ItemType.Regular,
      adviserPlacementType: AdviserPlacementType.Right,
      email: 'assistant19@name.com',
      phone: '648-123-12-31'
    },
    {
      id: 20,
      parent: 7,
      title: 'GP 20',
      description: 'General Partner on right',
      image: '/api/images/photos/g.png',
      itemType: ItemType.GeneralPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitleColor: Colors.Green,
      groupTitle: 'Partner',
      email: 'gp20@name.com',
      phone: '648-123-12-32'
    },
    {
      id: 21,
      parent: 20,
      title: 'Assistant 21',
      description: 'Assistant item on right',
      image: '/api/images/photos/s.png',
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      email: 'assistant21@name.com',
      phone: '648-123-12-32'
    },
    {
      id: 22,
      parent: 20,
      title: 'Regular 22',
      description: 'Regular item assigned to Partner is shown as its Assistant.',
      image: '/api/images/photos/r.png',
      itemType: ItemType.Regular,
      email: 'regular22@name.com',
      phone: '648-123-12-33'
    },
    {
      id: 23,
      parent: 21,
      title: 'Regular 23',
      description: 'Regular item assigned to assistant.',
      image: '/api/images/photos/r.png',
      itemType: ItemType.Regular,
      email: 'regular23@name.com',
      phone: '648-123-12-34'
    },
    {
      id: 24,
      parent: 21,
      title: 'Regular 24',
      description: 'Regular item assigned to assistant.',
      image: '/api/images/photos/r.png',
      itemType: ItemType.Regular,
      email: 'regular24@name.com',
      phone: '648-123-12-35'
    },
    {
      id: 25,
      parent: 21,
      title: 'Regular 25',
      description: 'Regular item assigned to assistant.',
      image: '/api/images/photos/r.png',
      itemType: ItemType.Regular,
      email: 'regular25@name.com',
      phone: '648-123-12-36'
    },
    /* Add assitants and adviser to item which has Partners attached */
    /* create array of items and merge them to final collections of items */
    {
      id: 26,
      parent: 7,
      title: 'Adviser 26',
      description: 'Adviser on left',
      image: '/api/images/photos/a.png',
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Left,
      email: 'regular26@name.com',
      phone: '648-123-12-37'
    },
    {
      id: 27,
      parent: 7,
      title: 'Adviser 27',
      description: 'Adviser on right',
      image: '/api/images/photos/a.png',
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Right,
      email: 'regular27@name.com',
      phone: '648-123-12-38'
    },
    {
      id: 28,
      parent: 7,
      title: 'Assistant 28',
      description: 'Assistant on right',
      image: '/api/images/photos/s.png',
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      email: 'assistant28@name.com',
      phone: '648-123-12-39'
    },
    {
      id: 29,
      parent: 7,
      title: 'Assistant 29',
      description: 'Assistant on left',
      image: '/api/images/photos/s.png',
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      email: 'assistant29@name.com',
      phone: '648-123-12-40'
    },
    {
      id: 30,
      parent: 7,
      description: 'GM, Visual Studio Language and Data Tools',
      email: 'maryruss@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/t.png',
      itemTitleColor: '#4b0082',
      phone: '443-271-9086',
      title: 'Mary Russ',
      label: 'Mary Russ'
    },
    {
      id: 31,
      parent: 7,
      description: 'Managing Dir., India Development Center',
      email: 'stanweat@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/y.png',
      itemTitleColor: '#4b0082',
      phone: '734-482-1633',
      title: 'Stanley Weathers',
      label: 'Stanley Weathers'
    },
    {
      id: 32,
      parent: 7,
      description: 'GM, Real Time Collaboration & Home Entertainment Products',
      email: 'melvwhit@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      itemTitleColor: '#4b0082',
      phone: '785-631-8548',
      title: 'Melvin White',
      label: 'Melvin White'
    },
    {
      id: 33,
      parent: 7,
      description: 'VP, Enterprise Access and Security Products Division (EASP)',
      email: 'bonnwede@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/i.png',
      itemTitleColor: '#4b0082',
      phone: '412-265-2782',
      title: 'Bonnie Wedel',
      label: 'Bonnie Wedel'
    },
    {
      id: 34,
      parent: 7,
      description: 'GM, Haifa R&D Center',
      email: 'normdalt@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      itemTitleColor: '#4b0082',
      phone: '316-334-6273',
      title: 'Norman Dalton',
      label: 'Norman Dalton'
    },
    {
      id: 35,
      parent: 7,
      description: 'GM, Core File Solutions',
      email: 'melihous@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      itemTitleColor: '#4b0082',
      phone: '630-887-1188',
      title: 'Melissa Houser',
      label: 'Melissa Houser'
    },
    {
      id: 36,
      parent: 7,
      description: 'GM, Software Server Solutions Group',
      email: 'abbilaws@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/a.png',
      itemTitleColor: '#4b0082',
      phone: '530-322-6413',
      title: 'Abbie Lawson',
      label: 'Abbie Lawson'
    },
    {
      id: 37,
      parent: 7,
      description: 'GM, Connected Systems Division',
      email: 'erneputn@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082',
      phone: '626-831-0555',
      title: 'Ernest Putnam',
      label: 'Ernest Putnam'
    },
    {
      id: 38,
      parent: 7,
      description: 'GM, Connected Framework',
      email: 'robelemi@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/d.png',
      itemTitleColor: '#4b0082',
      phone: '662-787-2600',
      title: 'Robert Lemieux',
      label: 'Robert Lemieux'
    },
    {
      id: 39,
      parent: 7,
      description: 'GM, XML Enterprise Services',
      email: 'arthwood@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/f.png',
      itemTitleColor: '#4b0082',
      phone: '630-677-5265',
      title: 'Arthur Wood',
      label: 'Arthur Wood'
    },
    {
      id: 40,
      parent: 7,
      description: 'GM, BizTalk Server',
      email: 'jonahitt@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/g.png',
      itemTitleColor: '#4b0082',
      phone: '443-591-0659',
      title: 'Jonathan Hitt',
      label: 'Jonathan Hitt'
    },
    {
      id: 41,
      parent: 7,
      description: 'CFO, Platforms Products & Services',
      email: 'celecrum@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/h.png',
      itemTitleColor: '#4b0082',
      phone: '419-578-6479',
      title: 'Celestina Crum',
      label: 'Celestina Crum'
    },
    {
      id: 42,
      parent: 7,
      description: 'GM, Pricing',
      email: 'cindturn@name.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#4b0082',
      phone: '530-934-4295',
      title: 'Cindy Turner',
      label: 'Cindy Turner'
    }
  ],
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      zOrderType: ZOrderType.Foreground,
      fromItem: 31,
      toItem: 7,
      connectorShapeType: ConnectorShapeType.OneWay,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      offset: new Thickness(0, 0, 0, 0),
      lineWidth: 2,
      color: '#ff0000',
      lineType: LineType.Dashed,
      selectItems: false,
      label: { color: "green", badge: "1", title: "Parent"},
      labelSize: { width: 70, height: 30 }
    },
    {
      annotationType: AnnotationType.Background,
      items: [30, 31, 32, 33, 34, 37, 38, 39, 40, 41, 42, 18, 19],
      borderColor: '#f8e5f9',
      fillColor: '#e5f9f8',
      lineWidth: 2,
      selectItems: true,
      lineType: LineType.Solid
    },
    {
      annotationType: AnnotationType.Background,
      items: [21, 22, 23, 24, 25],
      borderColor: '#ccffb3',
      fillColor: '#effda4',
      lineWidth: 2,
      selectItems: false,
      lineType: LineType.Solid
    },
    {
      annotationType: AnnotationType.Background,
      items: [13, 14],
      borderColor: '#e3c5ad',
      fillColor: '#f6eeeb',
      lineWidth: 2,
      selectItems: true,
      includeChildren: true,
      lineType: LineType.Solid
    },
    {
      annotationType: AnnotationType.HighlightPath,
      items: [41, 3],
      selectItems: true,
      color: Colors.Black,
      lineWidth: 2,
      lineType: LineType.Solid
    },
    {
      annotationType: AnnotationType.HighlightPath,
      items: [35, 1],
      selectItems: true,
      color: Colors.Red,
      lineWidth: 2,
      lineType: LineType.Solid
    }
  ]
};
