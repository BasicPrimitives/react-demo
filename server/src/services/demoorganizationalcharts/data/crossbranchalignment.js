const { Colors, ItemType } = require('basicprimitives');

module.exports = {
  items: [
        /* root */
        { id: 0, parent: null, isVisible: true, description: "Description A", email: "mail@mail.com", groupTitleColor: "#4169e1", image: "/api/images/photos/a.png", phone: "1-900-807-70-60", title: "Title A" },
        /* managers */
        { id: 4, parent: 0, isVisible: true, description: "Managers E description ", email: "mail1@mail.com", groupTitleColor: Colors.Red, groupTitle: "Management", image: "/api/images/photos/e.png", phone: "1-900-806-70-15", title: "Manager E", label: "Manager E" },
          { id: 10, parent: 4, isVisible: true, description: "Assistant Description", groupTitleColor: Colors.Olive, groupTitle: "Audit", image: "/api/images/photos/y.png", title: "Assistant 2", label: "Assistant 2", itemType: ItemType.Assistant },
        { id: 5, parent: 0, isVisible: true, description: "Managers V description ", email: "mail2@mail.com", groupTitleColor: Colors.Red, groupTitle: "Management", image: "/api/images/photos/v.png", phone: "1-900-805-70-17", title: "Manager V", label: "Manager V" },
        { id: 6, parent: 0, isVisible: true, description: "Managers U description ", email: "mail3@mail.com", groupTitleColor: Colors.Red, groupTitle: "Management", image: "/api/images/photos/u.png", phone: "1-900-804-70-18", title: "Manager U", label: "Manager U" },
          { id: 11, parent: 6, isVisible: true, description: "Assistant Description", groupTitleColor: Colors.Olive, groupTitle: "Audit", image: "/api/images/photos/y.png", title: "Assistant 3", label: "Assistant 3", itemType: ItemType.Assistant },
        { id: 7, parent: 0, isVisible: true, description: "Managers O description ", email: "mail4@mail.com", groupTitleColor: Colors.Red, groupTitle: "Management", image: "/api/images/photos/o.png", phone: "1-900-801-70-15", title: "Manager O", label: "Manager O" },
        { id: 8, parent: 0, isVisible: true, description: "Managers P description ", email: "mail5@mail.com", groupTitleColor: Colors.Red, groupTitle: "Management", image: "/api/images/photos/p.png", phone: "1-900-802-70-16", title: "Manager P", label: "Manager P" },
        { id: 9, parent: 0, isVisible: true, description: "Managers L description ", email: "mail6@mail.com", groupTitleColor: Colors.Red, groupTitle: "Management", image: "/api/images/photos/l.png", phone: "1-900-803-70-13", title: "Manager L", label: "Manager L" },
        /* direct reports of E*/
        { id: 12, parent: 4, isVisible: true, description: "Description of member 1", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/e.png", title: "1 member of E", label: "1" },
        { id: 13, parent: 4, isVisible: true, description: "Description of member 2", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/e.png", title: "2 member of E", label: "2" },
        { id: 14, parent: 4, isVisible: true, description: "Description of member 3", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/e.png", title: "3 member of E", label: "3" },
          { id: 15, parent: 14, isVisible: true, description: "Assistant Description", groupTitleColor: Colors.Olive, groupTitle: "Audit", image: "/api/images/photos/y.png", title: "Assistant 4", label: "Assistant 4", itemType: ItemType.Assistant },
          { id: 16, parent: 14, isVisible: true, description: "Description of member 4", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/e.png", title: "4 member of E", label: "4" },
          { id: 17, parent: 14, isVisible: true, description: "Description of member 5", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/e.png", title: "5 member of E", label: "5" },
          { id: 18, parent: 14, isVisible: true, description: "Description of member 6", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/e.png", title: "6 member of E", label: "6" },

        /* direct reports of V*/
        { id: 19, parent: 5, isVisible: true, description: "Description of member 1", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/v.png", title: "1 member of V", label: "1" },
        { id: 20, parent: 5, isVisible: true, description: "Description of member 2", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/v.png", title: "2 member of V", label: "2" },
        { id: 21, parent: 5, isVisible: true, description: "Description of member 3", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/v.png", title: "3 member of V", label: "3" },

        /* direct reports of U*/
        { id: 22, parent: 6, isVisible: true, description: "Description of member 1", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/u.png", title: "1 member of U", label: "1" },
        { id: 23, parent: 6, isVisible: true, description: "Description of member 2", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/u.png", title: "2 member of U", label: "2" },
        { id: 24, parent: 6, isVisible: true, description: "Description of member 3", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/u.png", title: "3 member of U", label: "3" },

        /* direct reports of O*/
        { id: 25, parent: 7, isVisible: true, description: "Description of member 1", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/o.png", title: "1 member of O", label: "1" },
        { id: 26, parent: 7, isVisible: true, description: "Description of member 2", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/o.png", title: "2 member of O", label: "2" },
          { id: 28, parent: 26, isVisible: true, description: "Assistant Description", groupTitleColor: Colors.Olive, groupTitle: "Audit", image: "/api/images/photos/y.png", title: "Assistant 5", label: "Assistant 5", itemType: ItemType.Assistant },
        { id: 27, parent: 7, isVisible: true, description: "Description of member 3", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/o.png", title: "3 member of O", label: "3" },

          { id: 29, parent: 26, isVisible: true, description: "Description of member 4", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/o.png", title: "4 member of O", label: "4" },
          { id: 30, parent: 26, isVisible: true, description: "Description of member 5", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/o.png", title: "5 member of O", label: "5" },
          { id: 31, parent: 26, isVisible: true, description: "Description of member 6", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/o.png", title: "6 member of O", label: "6" },
          
        /* direct reports of P*/
        { id: 32, parent: 8, isVisible: true, description: "Description of member 1", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/p.png", title: "1 member of P", label: "1" },
        { id: 33, parent: 8, isVisible: true, description: "Description of member 2", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/p.png", title: "2 member of P", label: "2" },
        { id: 34, parent: 8, isVisible: true, description: "Description of member 3", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/p.png", title: "3 member of P", label: "3" },

        /* direct reports of L*/
        { id: 35, parent: 9, isVisible: true, description: "Description of member 1", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/l.png", title: "1 member of L", label: "1" },
        { id: 36, parent: 9, isVisible: true, description: "Description of member 2", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/l.png", title: "2 member of L", label: "2" },
        { id: 37, parent: 9, isVisible: true, description: "Description of member 3", groupTitleColor: "#4169e1", groupTitle: "Full Time", image: "/api/images/photos/l.png", title: "3 member of L", label: "3" },

        { id: 38, parent: 35, isVisible: true, description: "Description of member 4", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/l.png", title: "4 member of L", label: "4" },
        { id: 39, parent: 35, isVisible: true, description: "Description of member 5", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/l.png", title: "5 member of L", label: "5" },
        { id: 40, parent: 35, isVisible: true, description: "Description of member 6", groupTitleColor: Colors.Red, groupTitle: "Contract", image: "/api/images/photos/l.png", title: "6 member of L", label: "6" }
  ]
};
