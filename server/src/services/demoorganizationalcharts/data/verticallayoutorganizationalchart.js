const { Size, Thickness, PlacementType, ItemType, LineType, Colors, AnnotationType } = require('basicprimitives');

module.exports = {
  items: [
    /* root */
    {
      id: 0,
      parent: null,
      isVisible: true,
      description: 'Description A',
      email: 'mail@mail.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/a.png',
      phone: '1-900-800-70-60',
      title: 'Title A',
      templateName: 'managerTemplate',
      labelSize: new Size(300, 14),
      labelPlacement: PlacementType.Right,
      groupTitle: "Root"
    },
    {
      id: 1,
      parent: 0,
      isVisible: true,
      description: 'Adviser Description',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/z.png',
      title: 'Adviser 1',
      label: 'Adviser 1',
      itemType: ItemType.Adviser
    },
    {
      id: 2,
      parent: 0,
      isVisible: true,
      description: 'Adviser Description',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/z.png',
      title: 'Adviser 2',
      label: 'Adviser 2',
      itemType: ItemType.Adviser
    },
    {
      id: 3,
      parent: 0,
      isVisible: true,
      description: 'Assitant Description',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/y.png',
      title: 'Assistant 1',
      label: 'Assistant 1',
      itemType: ItemType.Assistant,
      labelSize: new Size(300, 14),
      labelPlacement: PlacementType.Right
    },
    /* managers */
    {
      id: 4,
      parent: 0,
      isVisible: true,
      description: 'Managers E description ',
      email: 'mail1@mail.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      phone: '1-900-800-70-15',
      title: 'Manager E',
      label: 'Manager E',
      templateName: 'managerTemplate',
      labelSize: new Size(300, 14),
      labelPlacement: PlacementType.Right
    },
    {
      id: 20,
      parent: 0,
      isVisible: true,
      description: 'Managers V description ',
      email: 'mail2@mail.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      phone: '1-900-800-70-17',
      title: 'Manager V',
      label: 'Manager V',
      templateName: 'managerTemplate',
      labelSize: new Size(300, 14),
      labelPlacement: PlacementType.Right
    },
    {
      id: 38,
      parent: 0,
      isVisible: true,
      description: 'Managers U description ',
      email: 'mail3@mail.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      phone: '1-900-800-70-18',
      title: 'Manager U',
      label: 'Manager U',
      templateName: 'managerTemplate',
      labelSize: new Size(300, 14),
      labelPlacement: PlacementType.Right
    },
    {
      id: 57,
      parent: 0,
      isVisible: true,
      description: 'Managers O description ',
      email: 'mail4@mail.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      phone: '1-900-800-70-15',
      title: 'Manager O',
      label: 'Manager O',
      templateName: 'managerTemplate',
      labelSize: new Size(300, 14),
      labelPlacement: PlacementType.Right
    },
    {
      id: 73,
      parent: 0,
      isVisible: true,
      description: 'Managers P description ',
      email: 'mail5@mail.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      phone: '1-900-800-70-16',
      title: 'Manager P',
      label: 'Manager P',
      templateName: 'managerTemplate',
      labelSize: new Size(300, 14),
      labelPlacement: PlacementType.Right
    },
    {
      id: 90,
      parent: 0,
      isVisible: true,
      description: 'Managers L description ',
      email: 'mail6@mail.com',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      phone: '1-900-800-70-13',
      title: 'Manager L',
      label: 'Manager L',
      templateName: 'managerTemplate',
      labelSize: new Size(300, 14),
      labelPlacement: PlacementType.Right
    },
    /* direct reports */
    {
      id: 5,
      parent: 4,
      isVisible: true,
      description: 'Description of member0',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '0 member of E',
      label: '0'
    },
    {
      id: 6,
      parent: 4,
      isVisible: true,
      description: 'Description of member1',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '1 member of E',
      label: '1'
    },
    {
      id: 7,
      parent: 4,
      isVisible: true,
      description: 'Description of member2',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '2 member of E',
      label: '2'
    },
    {
      id: 8,
      parent: 4,
      isVisible: true,
      description: 'Description of member3',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '3 member of E',
      label: '3'
    },
    {
      id: 9,
      parent: 4,
      isVisible: true,
      description: 'Description of member4',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '4 member of E',
      label: '4'
    },
    {
      id: 10,
      parent: 4,
      isVisible: true,
      description: 'Description of member5',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '5 member of E',
      label: '5'
    },
    {
      id: 11,
      parent: 4,
      isVisible: true,
      description: 'Description of member6',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '6 member of E',
      label: '6'
    },
    {
      id: 12,
      parent: 4,
      isVisible: true,
      description: 'Description of member7',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '7 member of E',
      label: '7'
    },
    {
      id: 13,
      parent: 4,
      isVisible: true,
      description: 'Description of member8',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '8 member of E',
      label: '8'
    },
    {
      id: 14,
      parent: 4,
      isVisible: true,
      description: 'Description of member9',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '9 member of E',
      label: '9'
    },
    {
      id: 15,
      parent: 4,
      isVisible: true,
      description: 'Description of member10',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '10 member of E',
      label: '10'
    },
    {
      id: 16,
      parent: 4,
      isVisible: true,
      description: 'Description of member11',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '11 member of E',
      label: '11'
    },
    {
      id: 17,
      parent: 4,
      isVisible: true,
      description: 'Description of member12',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '12 member of E',
      label: '12'
    },
    {
      id: 18,
      parent: 4,
      isVisible: true,
      description: 'Description of member13',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '13 member of E',
      label: '13'
    },
    {
      id: 19,
      parent: 4,
      isVisible: true,
      description: 'Description of member14',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/e.png',
      title: '14 member of E',
      label: '14'
    },
    {
      id: 21,
      parent: 20,
      isVisible: true,
      description: 'Description of member0',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '0 member of V',
      label: '0'
    },
    {
      id: 22,
      parent: 20,
      isVisible: true,
      description: 'Description of member1',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '1 member of V',
      label: '1'
    },
    {
      id: 23,
      parent: 20,
      isVisible: true,
      description: 'Description of member2',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '2 member of V',
      label: '2'
    },
    {
      id: 24,
      parent: 20,
      isVisible: true,
      description: 'Description of member3',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '3 member of V',
      label: '3'
    },
    {
      id: 25,
      parent: 20,
      isVisible: true,
      description: 'Description of member4',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '4 member of V',
      label: '4'
    },
    {
      id: 26,
      parent: 20,
      isVisible: true,
      description: 'Description of member5',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '5 member of V',
      label: '5'
    },
    {
      id: 27,
      parent: 20,
      isVisible: true,
      description: 'Description of member6',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '6 member of V',
      label: '6'
    },
    {
      id: 28,
      parent: 20,
      isVisible: true,
      description: 'Description of member7',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '7 member of V',
      label: '7'
    },
    {
      id: 29,
      parent: 20,
      isVisible: true,
      description: 'Description of member8',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '8 member of V',
      label: '8'
    },
    {
      id: 30,
      parent: 20,
      isVisible: true,
      description: 'Description of member9',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '9 member of V',
      label: '9'
    },
    {
      id: 31,
      parent: 20,
      isVisible: true,
      description: 'Description of member10',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '10 member of V',
      label: '10'
    },
    {
      id: 32,
      parent: 20,
      isVisible: true,
      description: 'Description of member11',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '11 member of V',
      label: '11'
    },
    {
      id: 33,
      parent: 20,
      isVisible: true,
      description: 'Description of member12',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '12 member of V',
      label: '12'
    },
    {
      id: 34,
      parent: 20,
      isVisible: true,
      description: 'Description of member13',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '13 member of V',
      label: '13'
    },
    {
      id: 35,
      parent: 20,
      isVisible: true,
      description: 'Description of member14',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '14 member of V',
      label: '14'
    },
    {
      id: 36,
      parent: 20,
      isVisible: true,
      description: 'Description of member15',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '15 member of V',
      label: '15'
    },
    {
      id: 37,
      parent: 20,
      isVisible: true,
      description: 'Description of member16',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/v.png',
      title: '16 member of V',
      label: '16'
    },
    {
      id: 39,
      parent: 38,
      isVisible: true,
      description: 'Description of member0',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '0 member of U',
      label: '0'
    },
    {
      id: 40,
      parent: 38,
      isVisible: true,
      description: 'Description of member1',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '1 member of U',
      label: '1'
    },
    {
      id: 41,
      parent: 38,
      isVisible: true,
      description: 'Description of member2',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '2 member of U',
      label: '2'
    },
    {
      id: 42,
      parent: 38,
      isVisible: true,
      description: 'Description of member3',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '3 member of U',
      label: '3'
    },
    {
      id: 43,
      parent: 38,
      isVisible: true,
      description: 'Description of member4',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '4 member of U',
      label: '4'
    },
    {
      id: 44,
      parent: 38,
      isVisible: true,
      description: 'Description of member5',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '5 member of U',
      label: '5'
    },
    {
      id: 45,
      parent: 38,
      isVisible: true,
      description: 'Description of member6',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '6 member of U',
      label: '6'
    },
    {
      id: 46,
      parent: 38,
      isVisible: true,
      description: 'Description of member7',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '7 member of U',
      label: '7'
    },
    {
      id: 47,
      parent: 38,
      isVisible: true,
      description: 'Description of member8',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '8 member of U',
      label: '8'
    },
    {
      id: 48,
      parent: 38,
      isVisible: true,
      description: 'Description of member9',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '9 member of U',
      label: '9'
    },
    {
      id: 49,
      parent: 38,
      isVisible: true,
      description: 'Description of member10',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '10 member of U',
      label: '10'
    },
    {
      id: 50,
      parent: 38,
      isVisible: true,
      description: 'Description of member11',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '11 member of U',
      label: '11'
    },
    {
      id: 51,
      parent: 38,
      isVisible: true,
      description: 'Description of member12',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '12 member of U',
      label: '12'
    },
    {
      id: 52,
      parent: 38,
      isVisible: true,
      description: 'Description of member13',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '13 member of U',
      label: '13'
    },
    {
      id: 53,
      parent: 38,
      isVisible: true,
      description: 'Description of member14',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '14 member of U',
      label: '14'
    },
    {
      id: 54,
      parent: 38,
      isVisible: true,
      description: 'Description of member15',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '15 member of U',
      label: '15'
    },
    {
      id: 55,
      parent: 38,
      isVisible: true,
      description: 'Description of member16',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '16 member of U',
      label: '16'
    },
    {
      id: 56,
      parent: 38,
      isVisible: true,
      description: 'Description of member17',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/u.png',
      title: '17 member of U',
      label: '17'
    },
    {
      id: 58,
      parent: 57,
      isVisible: true,
      description: 'Description of member0',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '0 member of O',
      label: '0'
    },
    {
      id: 59,
      parent: 57,
      isVisible: true,
      description: 'Description of member1',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '1 member of O',
      label: '1'
    },
    {
      id: 60,
      parent: 57,
      isVisible: true,
      description: 'Description of member2',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '2 member of O',
      label: '2'
    },
    {
      id: 61,
      parent: 57,
      isVisible: true,
      description: 'Description of member3',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '3 member of O',
      label: '3'
    },
    {
      id: 62,
      parent: 57,
      isVisible: true,
      description: 'Description of member4',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '4 member of O',
      label: '4'
    },
    {
      id: 63,
      parent: 57,
      isVisible: true,
      description: 'Description of member5',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '5 member of O',
      label: '5'
    },
    {
      id: 64,
      parent: 57,
      isVisible: true,
      description: 'Description of member6',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '6 member of O',
      label: '6'
    },
    {
      id: 65,
      parent: 57,
      isVisible: true,
      description: 'Description of member7',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '7 member of O',
      label: '7'
    },
    {
      id: 66,
      parent: 57,
      isVisible: true,
      description: 'Description of member8',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '8 member of O',
      label: '8'
    },
    {
      id: 67,
      parent: 57,
      isVisible: true,
      description: 'Description of member9',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '9 member of O',
      label: '9'
    },
    {
      id: 68,
      parent: 57,
      isVisible: true,
      description: 'Description of member10',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '10 member of O',
      label: '10'
    },
    {
      id: 69,
      parent: 57,
      isVisible: true,
      description: 'Description of member11',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '11 member of O',
      label: '11'
    },
    {
      id: 70,
      parent: 57,
      isVisible: true,
      description: 'Description of member12',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '12 member of O',
      label: '12'
    },
    {
      id: 71,
      parent: 57,
      isVisible: true,
      description: 'Description of member13',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '13 member of O',
      label: '13'
    },
    {
      id: 72,
      parent: 57,
      isVisible: true,
      description: 'Description of member14',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/o.png',
      title: '14 member of O',
      label: '14'
    },
    {
      id: 74,
      parent: 73,
      isVisible: true,
      description: 'Description of member0',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '0 member of P',
      label: '0'
    },
    {
      id: 75,
      parent: 73,
      isVisible: true,
      description: 'Description of member1',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '1 member of P',
      label: '1'
    },
    {
      id: 76,
      parent: 73,
      isVisible: true,
      description: 'Description of member2',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '2 member of P',
      label: '2'
    },
    {
      id: 77,
      parent: 73,
      isVisible: true,
      description: 'Description of member3',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '3 member of P',
      label: '3'
    },
    {
      id: 78,
      parent: 73,
      isVisible: true,
      description: 'Description of member4',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '4 member of P',
      label: '4'
    },
    {
      id: 79,
      parent: 73,
      isVisible: true,
      description: 'Description of member5',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '5 member of P',
      label: '5'
    },
    {
      id: 80,
      parent: 73,
      isVisible: true,
      description: 'Description of member6',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '6 member of P',
      label: '6'
    },
    {
      id: 81,
      parent: 73,
      isVisible: true,
      description: 'Description of member7',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '7 member of P',
      label: '7'
    },
    {
      id: 82,
      parent: 73,
      isVisible: true,
      description: 'Description of member8',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '8 member of P',
      label: '8'
    },
    {
      id: 83,
      parent: 73,
      isVisible: true,
      description: 'Description of member9',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '9 member of P',
      label: '9'
    },
    {
      id: 84,
      parent: 73,
      isVisible: true,
      description: 'Description of member10',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '10 member of P',
      label: '10'
    },
    {
      id: 85,
      parent: 73,
      isVisible: true,
      description: 'Description of member11',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '11 member of P',
      label: '11'
    },
    {
      id: 86,
      parent: 73,
      isVisible: true,
      description: 'Description of member12',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '12 member of P',
      label: '12'
    },
    {
      id: 87,
      parent: 73,
      isVisible: true,
      description: 'Description of member13',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '13 member of P',
      label: '13'
    },
    {
      id: 88,
      parent: 73,
      isVisible: true,
      description: 'Description of member14',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '14 member of P',
      label: '14'
    },
    {
      id: 89,
      parent: 73,
      isVisible: true,
      description: 'Description of member15',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/p.png',
      title: '15 member of P',
      label: '15'
    },
    {
      id: 91,
      parent: 90,
      isVisible: true,
      description: 'Description of member0',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '0 member of L',
      label: '0'
    },
    {
      id: 92,
      parent: 90,
      isVisible: true,
      description: 'Description of member1',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '1 member of L',
      label: '1'
    },
    {
      id: 93,
      parent: 90,
      isVisible: true,
      description: 'Description of member2',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '2 member of L',
      label: '2'
    },
    {
      id: 94,
      parent: 90,
      isVisible: true,
      description: 'Description of member3',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '3 member of L',
      label: '3'
    },
    {
      id: 95,
      parent: 90,
      isVisible: true,
      description: 'Description of member4',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '4 member of L',
      label: '4'
    },
    {
      id: 96,
      parent: 90,
      isVisible: true,
      description: 'Description of member5',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '5 member of L',
      label: '5'
    },
    {
      id: 97,
      parent: 90,
      isVisible: true,
      description: 'Description of member6',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '6 member of L',
      label: '6'
    },
    {
      id: 98,
      parent: 90,
      isVisible: true,
      description: 'Description of member7',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '7 member of L',
      label: '7'
    },
    {
      id: 99,
      parent: 90,
      isVisible: true,
      description: 'Description of member8',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '8 member of L',
      label: '8'
    },
    {
      id: 100,
      parent: 90,
      isVisible: true,
      description: 'Description of member9',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '9 member of L',
      label: '9'
    },
    {
      id: 101,
      parent: 90,
      isVisible: true,
      description: 'Description of member10',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '10 member of L',
      label: '10'
    },
    {
      id: 102,
      parent: 90,
      isVisible: true,
      description: 'Description of member11',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '11 member of L',
      label: '11'
    },
    {
      id: 103,
      parent: 90,
      isVisible: true,
      description: 'Description of member12',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '12 member of L',
      label: '12'
    },
    {
      id: 104,
      parent: 90,
      isVisible: true,
      description: 'Description of member13',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '13 member of L',
      label: '13'
    },
    {
      id: 105,
      parent: 90,
      isVisible: true,
      description: 'Description of member14',
      groupTitleColor: '#4169e1',
      image: '/api/images/photos/l.png',
      title: '14 member of L',
      label: '14'
    }
  ],
  annotations: [
    {
      annotationType: AnnotationType.Level,
      levels: [0],
      title: "CEO",
      titleColor: Colors.RoyalBlue,
      offset: new Thickness(0, 0, 0, -1),
      lineWidth: new Thickness(0, 0, 0, 0),
      opacity: 0,
      borderColor: Colors.Gray,
      fillColor: Colors.Gray,
      lineType: LineType.Dotted
    },
    {
      annotationType: AnnotationType.Level,
      levels: [1],
      title: "Management",
      titleColor: Colors.RoyalBlue,
      offset: new Thickness(0, 0, 0, -1),
      lineWidth: new Thickness(0, 0, 0, 0),
      opacity: 0.08,
      borderColor: Colors.Gray,
      fillColor: Colors.Gray,
      lineType: LineType.Dotted
    },
    {
      annotationType: AnnotationType.Level,
      levels: [2],
      title: "Members",
      titleColor: Colors.RoyalBlue,
      offset: new Thickness(0, 0, 0, -1),
      lineWidth: new Thickness(0, 0, 0, 0),
      opacity: 0,
      borderColor: Colors.Gray,
      fillColor: Colors.Gray,
      lineType: LineType.Dotted
    }
  ]
};
