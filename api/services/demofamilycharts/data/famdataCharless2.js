const primitives = require('basicprimitives');

export default {
  cursorItem: 2,
  pageFitMode: primitives.common.PageFitMode.PageWidth,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      fromItem: 3,
      toItem: 4,
      label: "<div class='bp-badge' style='width:16px; height:16px;background-color:red; color: white;'>1</div>",
      labelSize: { width: 30, height: 30 }, // new primitives.common.Size(80, 30)
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
      title: 'Philip of Castile',
      label: 'Philip of Castile',
      description: '1, 1478-1506',
      image: '/photos/p.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 2,
      title: 'Joanna of Castile',
      label: 'Joanna of Castile',
      description: '2, 1479-1555',
      image: '/photos/j.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 3,
      parents: [1, 2],
      title: 'Charles V',
      label: 'Charles V',
      description: '3, Holy Roman Emperor',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 4,
      title: 'Isabella of Portugal',
      label: 'Isabella of Portugal',
      description: '4, 1503 - 39',
      image: '/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      parents: [3, 4],
      title: 'Philip II of Spain',
      label: 'Philip II of Spain',
      description: '5, ',
      image: '/photos/p.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 6,
      parents: [3, 4],
      title: 'Maria of Spain',
      label: 'Maria of Spain',
      description: '6, 1528 - 1603',
      image: '/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 7,
      parents: [1, 2],
      title: 'Ferdinand I',
      label: 'Ferdinand I',
      description: '7, Holy Roman Emperor, 1503-64',
      image: '/photos/h.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 8,
      parents: [1, 2],
      title: 'Isabella of Burgundy',
      label: 'Isabella of Burgundy',
      description: '8, 1501-26',
      image: '/photos/h.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 9,
      title: 'Anna of Bohemia and Hungary',
      label: 'Anna of Bohemia and Hungary',
      description: '9, 1503-47',
      image: '/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 10,
      title: 'Christian II of Denmark',
      label: 'Christian II of Denmark',
      description: '10, 1481-1559',
      image: '/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 11,
      parents: [7, 9],
      title: 'Maximilian II',
      label: 'Maximilian II',
      description: '11, Holy Roman Emperor 1527-76',
      image: '/photos/h.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 12,
      parents: [7, 9],
      title: 'Charles II of Austria',
      label: 'Charles II of Austria',
      description: '12, 1540-90',
      image: '/photos/h.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 13,
      parents: [7, 9],
      title: 'Anne of Habsburg',
      label: 'Anne of Habsburg',
      description: '13, 1528-90',
      image: '/photos/a.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 14,
      title: 'Albert V',
      label: 'Albert V',
      description: '14, Duke of Bavaria 1528-79',
      image: '/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 15,
      parents: [8, 10],
      title: 'Christina of Denmark',
      label: 'Christina of Denmark',
      description: '13, 1522-90',
      image: '/photos/a.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 16,
      title: 'Francis I',
      label: 'Francis I',
      description: '14, Duke of Lorraine 1517-45',
      image: '/photos/i.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 17,
      parents: [6, 11],
      title: 'Anne of Austria',
      label: 'Anne of Austria',
      description: '17, 1549-80',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 18,
      parents: [5, 17],
      title: 'Philip III of Spain',
      label: 'Philip III of Spain',
      description: '18, 1578-1621',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 19,
      parents: [13, 14],
      title: 'Maria Anna of Bavaria',
      label: 'Maria Anna of Bavaria',
      description: '19, 1551-1608',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 20,
      parents: [13, 14],
      title: 'William V, Duke of Bavaria',
      label: 'William V, Duke of Bavaria',
      description: '20, 1548-1626',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 21,
      parents: [15, 16],
      title: 'Renata of Lorraine',
      label: 'Renata of Lorraine',
      description: '21, 1544-1602',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 22,
      parents: [12, 19],
      title: 'Margarita of Austria',
      label: 'Margarita of Austria',
      description: '22, 1584-1611',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 23,
      parents: [12, 19],
      title: 'Ferdinand II',
      label: 'Ferdinand II',
      description: '23, Holy Roman Emperor 1578-1637',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 24,
      parents: [20, 21],
      title: 'Maria Anna of Bavaria',
      label: 'Maria Anna of Bavaria',
      description: '24, 1574-1616',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 25,
      parents: [18, 22],
      title: 'Philip IV of Spain',
      label: 'Philip IV of Spain',
      description: '25, 1605-65',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 26,
      parents: [18, 22],
      title: 'Maria Anna of Spain',
      label: 'Maria Anna of Spain',
      description: '26, 1606-46',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 27,
      parents: [23, 24],
      title: 'Ferdinand III',
      label: 'Ferdinand III',
      description: '27, 1608-57',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 28,
      parents: [26, 27],
      title: 'Manata of Austria',
      label: 'Manata of Austria',
      description: '28, 1634-96',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 29,
      parents: [25, 28],
      title: 'Charles II of Spain',
      label: 'Charles II of Spain',
      description: '29, 1661-1700',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    }
  ]
};
