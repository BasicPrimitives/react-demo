const primitives = require('basicprimitives');

export default {
  pageFitMode: primitives.common.PageFitMode.PageWidth,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      fromItem: 1,
      toItem: 5,
      label: "<div class='bp-badge' style='width:18px; height:18px;background-color:red; color: white;'>1</div>Connector annotation",
      labelSize: { width: 80, height: 30 }, // new primitives.common.Size(80, 30)
      connectorShapeType: primitives.common.ConnectorShapeType.OneWay,
      color: primitives.common.Colors.Red,
      selectItems: true,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.common.LineType.Dashed
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 1,
      toItems: [3],
      title: '10%'
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 1,
      toItems: [5],
      title: '30%'
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 1,
      toItems: [6],
      title: '50%'
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 1,
      toItems: [7],
      title: '10%'
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 1,
      toItems: [3, 5],
      title: '40%'
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 1,
      toItems: [3, 5, 6, 7],
      title: '100%'
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 2,
      toItems: [1],
      title: '100%'
    }
  ],
  items: [
    {
      id: 1,
      parents: [3, 5, 6, 7],
      title: 'James',
      label: 'James',
      description: 'James is First and he is child of Brad, Sara & Lynette',
      image: '/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 2,
      parents: [1],
      title: 'Brad',
      label: 'Brad',
      description: '',
      image: '/photos/b.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 3,
      parents: [2],
      title: 'Thomas',
      label: 'Thomas',
      description: '',
      image: '/photos/t.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 4,
      parents: [3],
      title: 'David',
      label: 'David',
      description: '',
      image: '/photos/d.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      parents: [4],
      title: 'Lynette',
      label: 'Lynette',
      description: '',
      image: '/photos/l.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 6,
      parents: [4],
      title: 'Sara',
      label: 'Sara',
      description: '',
      image: '/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 7,
      title: 'Parent',
      label: 'Parent',
      description: 'Parent node of James',
      image: '/photos/j.png',
      itemTitleColor: '#ff0000'
    }
  ]
};
