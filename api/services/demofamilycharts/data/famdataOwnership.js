const primitives = require('basicprimitives');

export default {
  cursorItem: 5,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      fromItem: 1,
      toItem: 5,
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
      title: 'Family Ownership',
      label: 'Family Ownership',
      description: '1, Chaiman Name',
      itemTitleColor: primitives.common.Colors.Black
    },
    {
      id: 3,
      parents: [1, 20, 31, 32],
      title: 'Everland',
      label: 'Everland',
      description: '3, Everland',
      itemTitleColor: primitives.common.Colors.Gray
    },

    {
      id: 10,
      parents: [1, 3],
      title: 'Life Insurance',
      label: 'Life Insurance',
      description: '10, Life Insurance',
      itemTitleColor: primitives.common.Colors.Blue
    },
    {
      id: 11,
      parents: [10],
      title: 'Fire & Marine',
      label: 'Fire & Marine',
      description: '11, Fire & Marine',
      itemTitleColor: primitives.common.Colors.Blue
    },
    {
      id: 12,
      parents: [10, 30],
      title: 'Card',
      label: 'Card',
      description: '12, Card',
      itemTitleColor: primitives.common.Colors.Blue
    },
    {
      id: 13,
      parents: [10, 11],
      title: 'Securities',
      label: 'Securities',
      description: '13, Securities',
      itemTitleColor: primitives.common.Colors.Blue
    },
    {
      id: 14,
      parents: [10],
      title: 'Asset Mgmt.',
      label: 'Asset Mgmt.',
      description: '14, Asset Mgmt.',
      itemTitleColor: primitives.common.Colors.Blue
    },

    {
      id: 20,
      parents: [1, 32, 11],
      title: 'C&T',
      label: 'C&T',
      description: '20, C&T',
      itemTitleColor: primitives.common.Colors.DarkRed
    },
    {
      id: 21,
      parents: [31, 30, 10],
      title: 'Heavy Industries',
      label: 'Heavy Industries',
      description: '21, Heavy Industries',
      itemTitleColor: primitives.common.Colors.DarkRed
    },
    {
      id: 22,
      parents: [20, 11, 32],
      title: 'Engineering',
      label: 'Engineering',
      description: '22, Engineering',
      itemTitleColor: primitives.common.Colors.DarkRed
    },
    {
      id: 23,
      parents: [1, 20, 31, 33, 30, 32],
      title: 'General Chemicals',
      label: 'General Chemicals',
      description: '23, General Chemicals',
      itemTitleColor: primitives.common.Colors.DarkRed
    },
    {
      id: 24,
      parents: [20, 42, 32, 30],
      title: 'Fine Chemicals',
      label: 'Fine Chemicals',
      description: '24, Fine Chemicals',
      itemTitleColor: primitives.common.Colors.DarkRed
    },

    {
      id: 30,
      parents: [1, 20, 10, 11],
      title: 'Electronics',
      label: 'Electronics',
      description: '30, Electronics',
      itemTitleColor: primitives.common.Colors.DarkBlue
    },
    {
      id: 31,
      parents: [30],
      title: 'SEMCO',
      label: 'SEMCO',
      description: '31, SEMCO',
      itemTitleColor: primitives.common.Colors.DarkBlue
    },
    {
      id: 32,
      parents: [30],
      title: 'SDI',
      label: 'SDI',
      description: '32, SDI',
      itemTitleColor: primitives.common.Colors.DarkBlue
    },
    {
      id: 33,
      parents: [30, 13],
      title: 'Techwin',
      label: 'Techwin',
      description: '33, Techwin',
      itemTitleColor: primitives.common.Colors.DarkBlue
    },
    {
      id: 34,
      parents: [1, 20, 30, 31],
      title: 'SDS',
      label: 'SDS',
      description: '34, SDS',
      itemTitleColor: primitives.common.Colors.DarkBlue
    },
    {
      id: 35,
      parents: [30, 32],
      title: 'Display',
      label: 'Display',
      description: '35, Display',
      itemTitleColor: primitives.common.Colors.DarkBlue
    },

    {
      id: 40,
      parents: [3],
      title: 'Welstory',
      label: 'Welstory',
      description: '40, Welstory',
      itemTitleColor: primitives.common.Colors.Orange
    },
    {
      id: 41,
      parents: [10, 11, 12, 32, 13],
      title: 'A1 Corporation',
      label: 'A1 Corporation',
      description: '41, A1 Corporation',
      itemTitleColor: primitives.common.Colors.Orange
    },
    {
      id: 42,
      parents: [10, 12, 13, 30],
      title: 'Hotel',
      label: 'Hotel',
      description: '42, Hotel',
      itemTitleColor: primitives.common.Colors.Orange
    },
    {
      id: 43,
      parents: [30, 12, 20],
      title: 'Worldwide',
      label: 'Worldwide',
      description: '43, Worldwide',
      itemTitleColor: primitives.common.Colors.Orange
    }
  ]
};
