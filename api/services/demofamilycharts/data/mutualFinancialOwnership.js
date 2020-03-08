const primitives = require('basicprimitives');

export default {
  cursorItem: 1,
  items: [
    { id: 1, title: "Family Ownership", label: "Family Ownership", description: "1, Chaiman Name", itemTitleColor: primitives.common.Colors.Black, labels: { "20": "1.4%", "30": "4.7%", "3": "46.0%", "10": "20.8%", "23": "5.9%", "34": "19.1" } },
    { id: 2, title: "KCC", label: "KCC", description: "1, KCC", itemTitleColor: primitives.common.Colors.Grey },
    { id: 3, parents: [1, 2, 12, 20, 31, 32], title: "Samsung Everland", label: "Samsung Everland", description: "3, Samsung Everland", itemTitleColor: primitives.common.Colors.Gray, labels: { "10": "19.3%", "40": "100%" } },

    { id: 10, parents: [1, 3], title: "Samsung Life Insurance", label: "Samsung Life Insurance", description: "10, Samsung Life Insurance", itemTitleColor: primitives.common.Colors.Blue, labels: { "30": "7.2%", "12": "34.4%", "13": "11.1%", "14": "100%", "41": "5.3%", "42": "7.3%", "21": "3.4%" } },
    { id: 11, parents: [10], title: "Samsung Fire & Marine", label: "Samsung Fire & Marine", description: "11, Samsung Fire & Marine", itemTitleColor: primitives.common.Colors.Blue, labels: { "20": "4.8%", "30": "1.3%", "22": "1.1%", "13": "8.0%", "41": "1.0%" } },
    { id: 12, parents: [10, 30], title: "Samsung Card", label: "Samsung Card", description: "12, Samsung Card", itemTitleColor: primitives.common.Colors.Blue, labels: { "3": "5%", "41": "1.9%", "42": "1.3%", "43": "3.0%" } },
    { id: 13, parents: [10, 11], title: "Samsung Securities", label: "Samsung Securities", description: "13, Samsung Securities", itemTitleColor: primitives.common.Colors.Blue, labels: { "33": "2.0%", "41": "1.3%", "42": "3.1%" } },
    { id: 14, parents: [10], title: "Samsung Asset Mgmt.", label: "Samsung Asset Mgmt.", description: "14, Samsung Asset Mgmt.", itemTitleColor: primitives.common.Colors.Blue },

    { id: 20, parents: [1, 32, 11], title: "Samsung C&T", label: "Samsung C&T", description: "20, Samsung C&T", itemTitleColor: primitives.common.Colors.DarkRed, labels: { "3": "1.5%", "30": "4.1%", "22": "7.8%", "23": "37.0%", "24": "5.6%", "34": "17.1", "43": "12.6%" } },
    { id: 21, parents: [31, 30, 10], title: "Samsung Heavy Industries", label: "Samsung Heavy Industries", description: "21, Samsung Heavy Industries", itemTitleColor: primitives.common.Colors.DarkRed },
    { id: 22, parents: [20, 11, 32], title: "Samsung Engineering", label: "Samsung Engineering", description: "22, Samsung Engineering", itemTitleColor: primitives.common.Colors.DarkRed },
    { id: 23, parents: [1, 20, 24, 31, 33, 30, 32], title: "Samsung General Chemicals", label: "Samsung General Chemicals", description: "23, Samsung General Chemicals", itemTitleColor: primitives.common.Colors.DarkRed },
    { id: 24, parents: [20, 42, 32, 30], title: "Samsung Fine Chemicals", label: "Samsung Fine Chemicals", description: "24, Samsung Fine Chemicals", itemTitleColor: primitives.common.Colors.DarkRed, labels: { "23": "3.1%" } },

    { id: 30, parents: [1, 20, 10, 11], title: "Samsung Electronics", label: "Samsung Electronics", description: "30, Samsung Electronics", itemTitleColor: primitives.common.Colors.DarkBlue, labels: { "12": "37.5%", "31": "23.7%", "32": "19.6%", "21": "17.6%", "33": "25.5%", "23": "5.3%", "24": "8.4%", "34": "22.6", "35": "84.8%", "42": "5.1%", "43": "2.6%" } },
    { id: 31, parents: [30], title: "SEMCO", label: "SEMCO", description: "31, SEMCO", itemTitleColor: primitives.common.Colors.DarkBlue, labels: { "21": "0%", "3": "4.0%", "23": "9.0%", "34": "7.9%" } },
    { id: 32, parents: [30], title: "Samsung SDI", label: "Samsung SDI", description: "32, Samsung SDI", itemTitleColor: primitives.common.Colors.DarkBlue, labels: { "20": "7.2%", "3": "8.0%", "41": "11.0%", "22": "13.1%", "23": "13.1%", "24": "14.7%", "35": "15.2%" } },
    { id: 33, parents: [30, 13], title: "Samsung Techwin", label: "Samsung Techwin", description: "33, Samsung Techwin", itemTitleColor: primitives.common.Colors.DarkBlue, labels: { "23": "22.6%" } },
    { id: 34, parents: [1, 20, 30, 31], title: "Samsung SDS", label: "Samsung SDS", description: "34, Samsung SDS", itemTitleColor: primitives.common.Colors.DarkBlue },
    { id: 35, parents: [30, 32], title: "Samsung Display", label: "Samsung Display", description: "35, Samsung Display", itemTitleColor: primitives.common.Colors.DarkBlue },

    { id: 40, parents: [3], title: "Samsung Welstory", label: "Samsung Welstory", description: "40, Samsung Welstory", itemTitleColor: primitives.common.Colors.Orange },
    { id: 41, parents: [10, 11, 12, 32, 13], title: "S1 Corporation", label: "S1 Corporation", description: "41, S1 Corporation", itemTitleColor: primitives.common.Colors.Orange },
    { id: 42, parents: [10, 12, 13, 30], title: "Hotel Shilla", label: "Hotel Shilla", description: "42, Hotel Shilla", itemTitleColor: primitives.common.Colors.Orange, labels: { "24": "2.2%" } },
    { id: 43, parents: [30, 12, 20], title: "Chell Worldwide", label: "Chell Worldwide", description: "43, Chell Worldwide", itemTitleColor: primitives.common.Colors.Orange }
  ]
};
