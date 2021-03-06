module.exports = {
  cursorItem: 5,
  annotations: [],
  items: [
    {
      id: 10,
      title: 'Roger Dalton',
      label: 'David Dalton',
      description: '1, Chief Executive Officer (CEO)',
      phone: '352-206-7599',
      email: 'davidalt@name.com',
      image: '/api/images/photos/q.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 11,
      title: 'Bill Dalton',
      label: 'David Dalton',
      description: '1, Chief Executive Officer (CEO)',
      phone: '352-206-7599',
      email: 'davidalt@name.com',
      image: '/api/images/photos/q.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 1,
      parents: [11],
      title: 'David Dalton',
      label: 'David Dalton',
      description: '1, Chief Executive Officer (CEO)',
      phone: '352-206-7599',
      email: 'davidalt@name.com',
      image: '/api/images/photos/q.png',
      itemTitleColor: '#4169e1'
    },
    {
      id: 2,
      title: 'Steven Lacombe',
      label: 'Steven Lacombe',
      description: '2, GM, Platform Strategy',
      phone: '805-800-7397',
      email: 'stevlaco@name.com',
      image: '/api/images/photos/a.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 3,
      parents: [10],
      title: 'Ann Smith',
      label: 'Ann Smith',
      description: '3, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 4,
      parents: [2],
      title: 'Nancy Smith',
      label: 'Nancy Smith',
      description: '4, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 5,
      parents: [2],
      title: 'Helly Smith',
      label: 'Ann Smith',
      description: '5, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 6,
      parents: [1, 4],
      title: 'Kelly Smith',
      label: 'Ann Smith',
      description: '6, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    },
    {
      id: 7,
      parents: [5, 3],
      title: 'Sally Smith',
      label: 'Ann Smith',
      description: '7, GM, Strategic Marketing and Communications',
      phone: '631-787-3495',
      email: 'nancsmit@name.com',
      image: '/api/images/photos/s.png',
      itemTitleColor: '#4b0082'
    }
  ]
};
