const primitives = require('basicprimitives');

export default {
  cursorItem: 1,
  enableMatrixLayout: true,
  // normalItemsInterval: 30,
  // dotItemsInterval: 20,
  // lineItemsInterval: 10,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      fromItem: 10,
      toItem: 24,
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
      parents: [],
      title: '1',
      label: '1',
      description: '',
      image: '/photos/z.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 2,
      parents: [1],
      title: '2',
      label: '2',
      description: '',
      image: '/photos/a.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 3,
      parents: [1],
      title: '3',
      label: '3',
      description: '',
      image: '/photos/b.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 4,
      parents: [1],
      title: '4',
      label: '4',
      description: '',
      image: '/photos/c.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 5,
      parents: [1],
      title: '5',
      label: '5',
      description: '',
      image: '/photos/d.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 6,
      parents: [1],
      title: '6',
      label: '6',
      description: '',
      image: '/photos/e.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 7,
      parents: [1],
      title: '7',
      label: '7',
      description: '',
      image: '/photos/f.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 8,
      parents: [1],
      title: '8',
      label: '8',
      description: '',
      image: '/photos/g.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 9,
      parents: [1],
      title: '9',
      label: '9',
      description: '',
      image: '/photos/h.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 10,
      parents: [1],
      title: '10',
      label: '10',
      description: '',
      image: '/photos/i.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 11,
      parents: [1],
      title: '11',
      label: '11',
      description: '',
      image: '/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 12,
      parents: [1],
      title: '12',
      label: '12',
      description: '',
      image: '/photos/k.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 13,
      parents: [1],
      title: '13',
      label: '13',
      description: '',
      image: '/photos/l.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 14,
      parents: [1],
      title: '14',
      label: '14',
      description: '',
      image: '/photos/m.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 15,
      parents: [1],
      title: '15',
      label: '15',
      description: '',
      image: '/photos/n.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 16,
      parents: [1],
      title: '16',
      label: '16',
      description: '',
      image: '/photos/o.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 17,
      parents: [1],
      title: '17',
      label: '17',
      description: '',
      image: '/photos/p.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 18,
      parents: [1],
      title: '18',
      label: '18',
      description: '',
      image: '/photos/q.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 19,
      parents: [1],
      title: '19',
      label: '19',
      description: '',
      image: '/photos/r.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 20,
      parents: [1],
      title: '20',
      label: '20',
      description: '',
      image: '/photos/s.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 21,
      parents: [5],
      title: 'D1',
      label: 'D1',
      description: '',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 22,
      parents: [5],
      title: 'D2',
      label: 'D2',
      description: '',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 23,
      parents: [5],
      title: 'D3',
      label: 'D3',
      description: '',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 24,
      parents: [5],
      title: 'D4',
      label: 'D4',
      description: '',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 25,
      parents: [5],
      title: 'D5',
      label: 'D5',
      description: '',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 26,
      parents: [5],
      title: 'D6',
      label: 'D6',
      description: '',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 27,
      parents: [26],
      title: 'D61',
      label: 'D61',
      description: '',
      image: '/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 28,
      parents: [26],
      title: 'D62',
      label: 'D62',
      description: '',
      image: '/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 29,
      parents: [26],
      title: 'D63',
      label: 'D63',
      description: '',
      image: '/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 30,
      parents: [26],
      title: 'D64',
      label: 'D64',
      description: '',
      image: '/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 31,
      parents: [26, 9],
      title: 'D65',
      label: 'D65',
      description: '',
      image: '/photos/c.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 32,
      parents: [27, 28, 29, 30],
      title: 'E1',
      label: 'E1',
      description: '',
      image: '/photos/e.png',
      itemTitleColor: '#4b0082'
    },

    {
      id: 33,
      parents: [2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      title: 'M1',
      label: 'M1',
      description: '',
      image: '/photos/m.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
