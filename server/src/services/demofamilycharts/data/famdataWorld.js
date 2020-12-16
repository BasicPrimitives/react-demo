const { AnnotationType, ConnectorPlacementType, ConnectorLabelPlacementType, ZOrderType,
  ConnectorShapeType, Colors, LineType, PageFitMode } = require('basicprimitives');

module.exports = {
  cursorItem: 2,
  pageFitMode: PageFitMode.PageWidth,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 2,
      toItem: 31,
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
      parents: [],
      title: 'S1',
      label: 'S1',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 2,
      parents: [1],
      title: '2',
      label: '2',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 3,
      parents: [2],
      title: '3',
      label: '3',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 4,
      parents: [3, 11, 26, 38, 42],
      title: '4',
      label: '4',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 5,
      parents: [4],
      title: '5',
      label: '5',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 6,
      parents: [5],
      title: '6',
      label: '6',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 7,
      parents: [6],
      title: '7',
      label: '7',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 8,
      parents: [],
      title: 'S8',
      label: 'S8',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 9,
      parents: [8],
      title: '9',
      label: '9',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 10,
      parents: [1],
      title: '10',
      label: '10',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 11,
      parents: [10],
      title: '11',
      label: '11',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 12,
      parents: [10],
      title: '12',
      label: '12',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 13,
      parents: [10],
      title: '13',
      label: '13',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 14,
      parents: [10],
      title: '14',
      label: '14',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 15,
      parents: [14, 16, 20, 39],
      title: '15',
      label: '15',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 16,
      parents: [2],
      title: '16',
      label: '16',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 17,
      parents: [2],
      title: '17',
      label: '17',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 18,
      parents: [2],
      title: '18',
      label: '18',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 19,
      parents: [13, 17, 36, 40],
      title: '19',
      label: '19',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 20,
      parents: [19],
      title: '20',
      label: '20',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 21,
      parents: [19],
      title: '21',
      label: '21',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 22,
      parents: [21],
      title: '22',
      label: '22',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 23,
      parents: [5, 22, 32],
      title: '23',
      label: '23',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 24,
      parents: [],
      title: 'S24',
      label: 'S24',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 25,
      parents: [24],
      title: '25',
      label: '25',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 26,
      parents: [25],
      title: '26',
      label: '26',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 27,
      parents: [24],
      title: '27',
      label: '27',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 28,
      parents: [19],
      title: '28',
      label: '28',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 29,
      parents: [12, 18, 28, 34, 41],
      title: '29',
      label: '29',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 30,
      parents: [],
      title: 'S30',
      label: 'S30',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 31,
      parents: [30],
      title: '31',
      label: '31',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 32,
      parents: [31],
      title: '32',
      label: '32',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 33,
      parents: [30],
      title: '33',
      label: '33',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 34,
      parents: [33],
      title: '34',
      label: '34',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 35,
      parents: [],
      title: '35',
      label: '35',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 36,
      parents: [35],
      title: '36',
      label: '36',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 37,
      parents: [],
      title: '37',
      label: '37',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 38,
      parents: [37, 43],
      title: '38',
      label: '38',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 39,
      parents: [37],
      title: '39',
      label: '39',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 40,
      parents: [37, 43],
      title: '40',
      label: '40',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 41,
      parents: [37],
      title: '41',
      label: '41',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 42,
      parents: [9],
      title: '42',
      label: '42',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 43,
      parents: [35],
      title: '43',
      label: '43',
      description: '',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 1001,
      parents: [2, 9, 10, 15, 23, 25, 31],
      title: 'T1',
      label: 'T1',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 1008,
      parents: [7],
      title: 'T8',
      label: 'T8',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 1024,
      parents: [23, 27],
      title: 'T24',
      label: 'T24',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 1030,
      parents: [29, 33],
      title: 'T30',
      label: 'T30',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 1035,
      parents: [5, 22],
      title: 'T35',
      label: 'T35',
      description: '',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    }
  ]
};
