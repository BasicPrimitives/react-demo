const primitives = require('basicprimitives');

export default {
  cursorItem: 1,
  pageFitMode: primitives.common.PageFitMode.None,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      fromItem: 2,
      toItem: 31,
      label: "<div class='bp-badge' style='width:18px; height:18px;background-color:red; color: white;'>1</div>Connector annotation",
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
      title: 'Dubreuilh Thierry',
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '1',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 2,
      title: 'Marillier Patricia',
      relativeItem: 1,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '2',
      image: '/photos/m.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 3,
      parents: [1, 2],
      title: 'Wedding',
      description: '3',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 4,
      parents: [3],
      title: 'DUBREUILH François',
      description: '1st child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 5,
      parents: [3],
      title: 'DUBREUILH Josie',
      relativeItem: 4,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: '2nd child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 6,
      parents: [3],
      title: 'DUBREUILH Marc',
      relativeItem: 5,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '3rd child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 7,
      title: 'NIKITENKI Patrick',
      relativeItem: 1,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '7',
      image: '/photos/n.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 8,
      title: 'PERROT Brigitte',
      relativeItem: 7,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '8',
      image: '/photos/p.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 9,
      parents: [7, 8],
      title: 'Wedding',
      description: '9',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 10,
      parents: [9],
      title: 'NIKITENKI Alexandra',
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '10',
      image: '/photos/n.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 11,
      parents: [6, 10],
      title: 'Wedding',
      description: '11',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 12,
      title: 'TAUZIAC Didier',
      relativeItem: 7,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '12',
      image: '/photos/t.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 13,
      title: 'FAGETE Nadine',
      relativeItem: 12,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '13',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 14,
      parents: [12, 13],
      title: 'Wedding',
      description: '14',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 15,
      title: 'PEYRONNEAU Bernard',
      relativeItem: 12,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '15',
      image: '/photos/n.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 16,
      title: 'SCHAEFFER Nicole',
      relativeItem: 15,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '16',
      image: '/photos/p.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 17,
      parents: [15, 16],
      title: 'Wedding',
      description: '17',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 18,
      parents: [14],
      title: 'TAUZIAC Georges',
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '18',
      image: '/photos/t.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 19,
      parents: [17],
      title: 'PERYRONNEAU Francine',
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '19',
      image: '/photos/p.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 20,
      parents: [18, 19],
      title: 'Wedding',
      description: '20',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 21,
      parents: [11],
      title: 'DUBREUILH Patrick',
      description: '1st child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 22,
      parents: [11],
      title: 'DUBREUILH Pierre',
      relativeItem: 21,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '2nd child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 23,
      parents: [11],
      title: 'REBIERE Christiane',
      relativeItem: 22,
      placementType: primitives.common.AdviserPlacementType.Left,
      position: 1,
      description: '23',
      image: '/photos/r.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 24,
      parents: [23, 22],
      title: '2nd Wedding',
      description: '24, Pierre Divorced',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 25,
      title: 'SERTILLANGE Louise',
      relativeItem: 22,
      placementType: primitives.common.AdviserPlacementType.Left,
      position: 2,
      description: '25',
      image: '/photos/s.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 26,
      parents: [25, 22],
      title: '3nd Wedding',
      description: '26, Pierre',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 27,
      parents: [20],
      title: 'TAUZIAC Marie',
      relativeItem: 22,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '27',
      image: '/photos/t.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 28,
      parents: [27, 22],
      title: '1st Wedding',
      description: '26, Divorced',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 29,
      parents: [],
      title: 'BRUGEAUD Michel',
      relativeItem: 27,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: '28',
      image: '/photos/b.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 30,
      parents: [27, 29],
      title: '2nd Wedding',
      description: '30, of Marie Divorced',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 31,
      parents: [],
      title: 'FLEURANT Yves',
      relativeItem: 27,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 2,
      description: '31',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 32,
      parents: [27, 31],
      title: '3nd Wedding',
      description: '32, of Marie',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 33,
      parents: [24],
      title: 'DUBREUILH Marie',
      description: '1st child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 34,
      parents: [24],
      title: 'DUBREUILH Anne',
      relativeItem: 33,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: '2nd child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 35,
      parents: [],
      title: 'ROUGHEOL Christian',
      relativeItem: 34,
      placementType: primitives.common.AdviserPlacementType.Left,
      position: 1,
      description: '35',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 36,
      parents: [35, 34],
      title: 'Wedding',
      description: '36',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 37,
      parents: [28],
      title: 'DUBREUILH Emile',
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '37',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 38,
      title: 'DUBUR Maxime',
      groupTitleColor: '#0000FF',
      groupTitle: 'Male',
      description: '38',
      image: '/photos/t.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 39,
      title: 'GIRAUDON Françoise',
      relativeItem: 38,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '39',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 40,
      parents: [38, 39],
      title: 'Wedding',
      description: '40',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 41,
      parents: [40],
      title: 'DUBUR Marthe Hélène',
      groupTitleColor: '#FF0000',
      groupTitle: 'Female',
      description: '41',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 42,
      parents: [37, 41],
      title: 'Wedding',
      description: '42',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 43,
      parents: [42],
      title: 'DUBREUILH René',
      description: '1st child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 44,
      parents: [42],
      title: 'DUBREUILH Yvette',
      relativeItem: 43,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: 'Deceased 2nd child ',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 45,
      parents: [42],
      title: 'DUBREUILH Yvonne',
      relativeItem: 43,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 2,
      description: '3rd child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 46,
      parents: [42],
      title: 'DUBREUILH Germaine',
      relativeItem: 43,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 3,
      description: '4th child',
      image: '/photos/d.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 47,
      title: 'FLAMAND René',
      relativeItem: 45,
      placementType: primitives.common.AdviserPlacementType.Left,
      position: 1,
      description: '47',
      image: '/photos/t.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 48,
      parents: [47, 45],
      title: '1st Wedding',
      description: '48, of Yvonne Divorced',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 49,
      title: 'BORGES José Manuel',
      relativeItem: 45,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: '49',
      image: '/photos/t.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 50,
      parents: [49, 45],
      title: '2nd Wedding',
      description: '50, of Yvonne Divorced',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 51,
      title: 'SERRE Gilbert',
      relativeItem: 45,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 2,
      description: '47',
      image: '/photos/t.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 52,
      parents: [51, 45],
      title: '3d Wedding',
      description: '52, of Yvonne Divorced',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 53,
      title: 'AISA Michel Daniel',
      relativeItem: 46,
      placementType: primitives.common.AdviserPlacementType.Left,
      position: 1,
      description: '53',
      image: '/photos/t.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 54,
      parents: [53, 46],
      title: 'Wedding',
      description: '54',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 55,
      parents: [48],
      title: 'FLAMAND Pierre',
      description: '1st child',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 56,
      parents: [48],
      title: 'FLAMAND Jeanine',
      relativeItem: 55,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: '2nd child ',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 57,
      parents: [48],
      title: 'FLAMAND Lucette',
      relativeItem: 55,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 2,
      description: '3rd child',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 58,
      parents: [54],
      title: 'AISA Jean-luc',
      description: '1st child',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 59,
      parents: [54],
      title: 'AISA Christine',
      relativeItem: 58,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: '2nd child ',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 60,
      parents: [54],
      title: 'AISA Sandrine',
      relativeItem: 58,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 2,
      description: '3rd child Natural Parent',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 61,
      parents: [57],
      title: 'This bloc is created to keep a consistent display',
      description: '61, but is invisible',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 62,
      parents: [61],
      title: 'FLAMAND Pierre Fernand',
      description: '62',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 63,
      parents: [55, 59],
      title: 'Wedding',
      description: '63',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 64,
      title: 'CHARRIERAS Pierre',
      relativeItem: 60,
      placementType: primitives.common.AdviserPlacementType.Left,
      position: 1,
      description: '64, Natural Parent',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 65,
      parents: [64, 60],
      title: 'Wedding',
      description: '65',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 66,
      title: 'DUWATT Lionel',
      relativeItem: 60,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: 'Adoptive Parent',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 67,
      title: 'CASTEL Paulette',
      relativeItem: 66,
      placementType: primitives.common.AdviserPlacementType.Right,
      position: 1,
      description: 'Adoptive Parent',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    },

    {
      id: 68,
      parents: [66, 67],
      title: 'Wedding',
      description: '68',
      image: '/photos/w.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 69,
      parents: [65, 68],
      title: 'DUWATT Jean',
      description: '69',
      image: '/photos/f.png',
      itemTitleColor: '#4169e1'
    }
  ]
};