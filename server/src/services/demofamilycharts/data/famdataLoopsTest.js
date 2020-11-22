const primitives = require('basicprimitives');

module.exports = {
  cursorItem: 2,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 2,
      toItems: [1],
      title: '2->1'
    },
    {
      annotationType: primitives.common.AnnotationType.Label,
      fromItem: 1,
      toItems: [2],
      title: '1->2'
    }
  ],
  items: [
    {
      id: 1,
      parents: [2],
      title: '1',
      label: '1',
      description: '1',
      image: '/api/images/photos/j.png',
      itemTitleColor: '#ff0000'
    },
    {
      id: 2,
      parents: [1],
      title: '2',
      label: '2',
      description: '2',
      image: '/api/images/photos/b.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
