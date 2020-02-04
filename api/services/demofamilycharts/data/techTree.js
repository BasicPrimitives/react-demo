const primitives = require('basicprimitives');

export default {
  cursorItem: 1,
  pageFitMode: primitives.common.PageFitMode.None,
  items: [
    { id: 1, parents: [], title: "Start", itemTitleColor: "green" },

    { id: 2, parents: [1], title: "Basic Rocketry", itemTitleColor: "green" },
    { id: 3, parents: [1], title: "Engineering 101", itemTitleColor: "green", relativeItem: 2, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 4, parents: [1], title: "Subsonic Flight", itemTitleColor: "blue", relativeItem: 3, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 5, parents: [1], title: "Airships", itemTitleColor: "blue", relativeItem: 4, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 6, parents: [1], title: "Physics and Chemistry", itemTitleColor: "green", relativeItem: 5, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },

    { id: 7, parents: [2], title: "General Rocketry", itemTitleColor: "green", primaryParent: 2 },
    { id: 8, parents: [2, 3], title: "Launch Stands", itemTitleColor: "green" },
    { id: 9, parents: [3], title: "Naval Engineering", itemTitleColor: "green" },
    { id: 10, parents: [3, 4, 6], title: "Stability", itemTitleColor: "green", primaryParent: 4 },
    { id: 11, parents: [5], title: "Improved Airships", itemTitleColor: "blue" },
    { id: 12, parents: [6], title: "Survivability", itemTitleColor: "green" },
    { id: 13, parents: [6], title: "Advanced Physics and Chemistry", itemTitleColor: "green", relativeItem: 12, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },

    { id: 14, parents: [7], title: "Advanced Rocketry", itemTitleColor: "green", primaryParent: 7 },
    { id: 15, parents: [7, 8], title: "Standardized Construction", itemTitleColor: "green" },
    { id: 16, parents: [8], title: "General Launch Bases", itemTitleColor: "green" },
    { id: 17, parents: [8], title: "Specialized Launch Bases", itemTitleColor: "green", relativeItem: 16, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 18, parents: [9], title: "Submarine Engineering", itemTitleColor: "green" },
    { id: 19, parents: [10], title: "Aviation", itemTitleColor: "green", primaryParent: 10 },
    { id: 20, parents: [11], title: "Advanced Airships", itemTitleColor: "blue" },
    { id: 21, parents: [10, 12], title: "Flight Control", primaryParent: 12, itemTitleColor: "green" },
    { id: 22, parents: [12], title: "Enhancend Survivability", itemTitleColor: "magenta" },
    { id: 23, parents: [13], title: "Elemental Physics and Chemistry", itemTitleColor: "green" },

    { id: 24, parents: [14], title: "Heavy Rocketry", itemTitleColor: "green", primaryParent: 14 },
    { id: 25, parents: [14], title: "Propulsion Systems", itemTitleColor: "green", relativeItem: 24, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 26, parents: [14, 15], title: "Fuel Systems", itemTitleColor: "green" },
    { id: 27, parents: [15], title: "Advanced Construction", itemTitleColor: "green" },
    { id: 28, parents: [16], title: "Heavy Mobile Launches", itemTitleColor: "green" },
    { id: 29, parents: [18], title: "Advanced Naval Engineering", itemTitleColor: "green" },
    { id: 30, parents: [15, 19], title: "Aerodynamics", itemTitleColor: "green", primaryParent: 19 },
    { id: 31, parents: [19], title: "Retractable Landing Gear", itemTitleColor: "blue", relativeItem: 30, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 32, parents: [19, 21], title: "VTOL Flight", itemTitleColor: "green" },
    { id: 33, parents: [21], title: "Advanced Flight Control", itemTitleColor: "green" },
    { id: 34, parents: [22], title: "Command Pods", itemTitleColor: "magenta" },
    { id: 35, parents: [21, 23], title: "Space Exploration", itemTitleColor: "green", primaryParent: 23 },
    { id: 36, parents: [23], title: "Minituarization", itemTitleColor: "green" },
    { id: 37, parents: [23], title: "Solid-State Electronics", itemTitleColor: "green", relativeItem: 36, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 38, parents: [23], title: "Storage technology", itemTitleColor: "gray", relativeItem: 37, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },

    { id: 39, parents: [24], title: "Nuclear Power", itemTitleColor: "brown" },
    { id: 40, parents: [24], title: "Heavier Rocketry", itemTitleColor: "green", primaryParent: 24, relativeItem: 39, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 41, parents: [25], title: "Precision Propulsion", itemTitleColor: "green" },
    { id: 42, parents: [25, 26], title: "Advanced Fuel Systems", itemTitleColor: "green" },
    { id: 43, parents: [27], title: "Specialized Construction", itemTitleColor: "green" },
    { id: 44, parents: [28], title: "Specialized Mobile Launches", itemTitleColor: "green" },
    { id: 45, parents: [27], title: "Actuators", itemTitleColor: "green", relativeItem: 43, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 46, parents: [30], title: "Supersonic Flight", itemTitleColor: "green" },
    { id: 47, parents: [30], title: "Advanced Aerodynamics", itemTitleColor: "green", primaryParent: 30, relativeItem: 46, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 48, parents: [30, 31], title: "Electric Engines", itemTitleColor: "blue", primaryParent: 31 },
    { id: 49, parents: [30, 32], title: "Advanced VTOL Flight", itemTitleColor: "green", primaryParent: 32 },
    { id: 50, parents: [33], title: "Specialized Control", itemTitleColor: "green" },
    { id: 51, parents: [33, 34, 35], title: "Advanced Command Pods", itemTitleColor: "magenta" },
    { id: 52, parents: [35], title: "Space Science", itemTitleColor: "green" },
    { id: 53, parents: [36, 37], title: "Large Scale Integration", itemTitleColor: "green" },
    { id: 54, parents: [37], title: "High-Power Electronics", itemTitleColor: "green" },
    { id: 55, parents: [37], title: "Heat Management Systems", itemTitleColor: "orange", relativeItem: 54, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 56, parents: [38], title: "Early Modular Habitation", itemTitleColor: "green" },


    { id: 57, parents: [39, 40, 42], title: "Nuclear Propulsion", itemTitleColor: "green", primaryParent: 39 },
    { id: 58, parents: [41], title: "Advanced Propulsion", itemTitleColor: "green", primaryParent: 41 },
    { id: 59, parents: [42, 43], title: "Large Volume Containment", itemTitleColor: "green" },
    { id: 60, parents: [43], title: "Advanced Metal Works", itemTitleColor: "green" },
    { id: 61, parents: [43], title: "Composites", itemTitleColor: "green", relativeItem: 60, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 62, parents: [45], title: "Advanced Actuators", itemTitleColor: "gray" },
    { id: 63, parents: [46], title: "High Altitude Flight", itemTitleColor: "green" },
    { id: 64, parents: [44, 47], title: "Heavy Aerodynamics", itemTitleColor: "green", primaryParent: 47 },
    { id: 65, parents: [49, 50], title: "Specialized VTOL Flight", itemTitleColor: "green" },
    { id: 66, parents: [52], title: "Field Geology", itemTitleColor: "green" },
    { id: 67, parents: [51], title: "Command Modules", itemTitleColor: "green" },
    { id: 68, parents: [52, 53], title: "Scanning Tech", itemTitleColor: "green" },
    { id: 69, parents: [53], title: "Unmanned Tech", itemTitleColor: "green" },
    { id: 70, parents: [53, 54], title: "Very Large Scale Integration", itemTitleColor: "green" },
    { id: 71, parents: [54], title: "High Efficiency Electronics", itemTitleColor: "green" },
    { id: 72, parents: [56], title: "Recycling", itemTitleColor: "green" },
    { id: 73, parents: [166], title: "Logistics", itemTitleColor: "gray" },

    { id: 74, parents: [171], title: "Improved Nuclear Power", itemTitleColor: "brown" },
    { id: 75, parents: [171], title: "Nuclear Fuel Systems", itemTitleColor: "brown", relativeItem: 74, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 76, parents: [57], title: "Imporved Nuclear Propulsion", itemTitleColor: "brown" },
    { id: 77, parents: [40, 59], title: "Very Heavy Rocketry", itemTitleColor: "green", primaryParent: 40 },
    { id: 78, parents: [59], title: "High Performance Fuel Systems", itemTitleColor: "green" },
    { id: 79, parents: [60], title: "Nanolathing", itemTitleColor: "green" },
    { id: 80, parents: [61], title: "Meta-materials", itemTitleColor: "green" },
    { id: 81, parents: [61, 62], title: "Experimental Actuators", itemTitleColor: "gray" },
    { id: 82, parents: [63], title: "Hypersonic Flight", itemTitleColor: "green" },
    { id: 83, parents: [64], title: "Experimental Aerodynamics", itemTitleColor: "green", primaryParent: 64 },
    { id: 84, parents: [48, 65], title: "Specialized Flight Systems", itemTitleColor: "blue" },
    { id: 85, parents: [66], title: "Advanced Rovers", itemTitleColor: "green" },
    { id: 86, parents: [67], title: "Heavy Command Modules", itemTitleColor: "magenta" },
    { id: 87, parents: [66, 68], title: "Advanced Field Geology", itemTitleColor: "green" },
    { id: 88, parents: [68], title: "Specialized Science Technology", itemTitleColor: "LightSeaGreen" },
    { id: 89, parents: [68, 69], title: "Ion Propulsion", itemTitleColor: "green" },
    { id: 90, parents: [69], title: "Advanced Unmanned Tech", itemTitleColor: "green" },
    { id: 91, parents: [69, 70], title: "Automation", itemTitleColor: "green" },
    { id: 92, parents: [70, 71], title: "Specialized Electronics", itemTitleColor: "green" },
    { id: 93, parents: [71], title: "Advanced Solar Technology", itemTitleColor: "navy" },
    { id: 94, parents: [168], title: "Advanced Heat Management", itemTitleColor: "orange" },
    { id: 95, parents: [72, 73], title: "Short-Term Habitation", itemTitleColor: "green" },

    { id: 96, parents: [74], title: "High Energy Nuclear Power", itemTitleColor: "brown" },
    { id: 97, parents: [76], title: "High Efficiency Nuclear Propulsion", itemTitleColor: "brown" },
    { id: 98, parents: [77, 78], title: "Experimental Rocketry", itemTitleColor: "red", primaryParent: 77 },
    { id: 99, parents: [78], title: "Specialized Fuel Storage", itemTitleColor: "red" },
    { id: 100, parents: [79], title: "Exotic Alloys", itemTitleColor: "gray" },
    { id: 101, parents: [79, 80], title: "Orbital Assembly", itemTitleColor: "gray" },
    { id: 102, parents: [80, 81], title: "Off-World Robotics", itemTitleColor: "gray" },
    { id: 103, parents: [82], title: "Aerospace Composites", itemTitleColor: "blue" },
    { id: 104, parents: [83, 84], title: "Aerospace Tech", itemTitleColor: "green", primaryParent: 83 },
    { id: 105, parents: [65, 86], title: "Specialized Landers", itemTitleColor: "magenta" },
    { id: 106, parents: [85], title: "Experimental Rovers", itemTitleColor: "green" },
    { id: 107, parents: [86], title: "Specialized Command Modules", itemTitleColor: "magenta" },
    { id: 108, parents: [87], title: "Off-World Mining", itemTitleColor: "green" },
    { id: 109, parents: [88], title: "Long-Term Science Technology", itemTitleColor: "LightSeaGreen" },
    { id: 110, parents: [89], title: "Advanced Ion Propulsion", itemTitleColor: "#533153" },
    { id: 111, parents: [90, 91], title: "Large Probes", itemTitleColor: "green" },
    { id: 112, parents: [91], title: "Emergent Systems", itemTitleColor: "magenta" },
    { id: 113, parents: [92], title: "Experimental Electronics", itemTitleColor: "green" },
    { id: 114, parents: [93], title: "Advanced Photovoltaic Materials", itemTitleColor: "navy" },
    { id: 115, parents: [93], title: "Cutting-Edge Solar Technology", itemTitleColor: "navy", relativeItem: 114, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 116, parents: [95], title: "Life Sciences", itemTitleColor: "green" },
    { id: 117, parents: [167], title: "Advanced Logistics", itemTitleColor: "gray" },


    { id: 118, parents: [96], title: "Experimental Nuclear Power", itemTitleColor: "brown" },
    { id: 119, parents: [96], title: "Fusion Power", itemTitleColor: "brown" },
    { id: 120, parents: [97], title: "Fusion Rockets", itemTitleColor: "brown" },
    { id: 121, parents: [97, 98], title: "Experimental Nuclear Propulsion", itemTitleColor: "brown" },
    { id: 122, parents: [98], title: "Gigantic Rocketry", itemTitleColor: "red", primaryParent: 98 },
    { id: 123, parents: [99, 100], title: "Exotic Fuel Storage", itemTitleColor: "red" },
    { id: 124, parents: [100, 101], title: "Orbital Megastructures", itemTitleColor: "gray" },
    { id: 125, parents: [103], title: "Adv Aerospace Engineering", itemTitleColor: "blue" },
    { id: 126, parents: [104], title: "Experimental Aircraft Engines", itemTitleColor: "blue", primaryParent: 104 },
    { id: 127, parents: [105], title: "Heavy Landers", itemTitleColor: "magenta" },
    { id: 128, parents: [107], title: "Specialized Command Centers", itemTitleColor: "magenta" },
    { id: 129, parents: [108], title: "Advanced Off-World Mining", itemTitleColor: "green" },
    { id: 130, parents: [109], title: "Scientific Outposts", itemTitleColor: "LightSeaGreen" },
    { id: 131, parents: [110], title: "Plasma Propulsion", itemTitleColor: "#533153" },
    { id: 132, parents: [110], title: "Advanced Electrostatic Thrusters", itemTitleColor: "#533153", relativeItem: 131, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 133, parents: [111, 112], title: "Speculative Execution", itemTitleColor: "magenta" },
    { id: 134, parents: [113], title: "High-Tech Electrical Systems", itemTitleColor: "navy" },
    { id: 135, parents: [113, 114], title: "Microwave Power Transmission", itemTitleColor: "navy" },
    { id: 136, parents: [115], title: "Exotic Solar Technology", itemTitleColor: "navy" },
    { id: 137, parents: [169], title: "Specialized Radiators", itemTitleColor: "orange" },
    { id: 138, parents: [116, 117], title: "Long-Term Habitation", itemTitleColor: "green" },
    { id: 139, parents: [117], title: "Planetary Logistics", itemTitleColor: "gray" },

    { id: 140, parents: [118], title: "Exotic Nuclear Power", itemTitleColor: "brown" },
    { id: 141, parents: [119, 120], title: "Advanced Fusion Reactions", itemTitleColor: "brown" },
    { id: 142, parents: [121, 122], title: "Exotic Nuclear Propulsion", itemTitleColor: "brown" },
    { id: 143, parents: [122], title: "Colossal Rocketry", itemTitleColor: "red", primaryParent: 122 },
    { id: 144, parents: [123], title: "Extreme Fuel Storage", itemTitleColor: "red" },
    { id: 145, parents: [125, 126], title: "Cutting-Edge Aeronautics", itemTitleColor: "blue", primaryParent: 126 },
    { id: 146, parents: [128], title: "Heavy Command Centers", itemTitleColor: "magenta" },
    { id: 147, parents: [129], title: "Resourse Exploitation", itemTitleColor: "green" },
    { id: 148, parents: [130], title: "High Energy Science", itemTitleColor: "LightSeaGreen" },
    { id: 149, parents: [131], title: "Advanced Plasma Propulsion", itemTitleColor: "#533153" },
    { id: 150, parents: [132], title: "Exp. Electrostatic Thrusters", itemTitleColor: "#533153" },
    { id: 151, parents: [134], title: "Experimental Electrical Systems", itemTitleColor: "navy" },
    { id: 152, parents: [138, 139], title: "Colonization", itemTitleColor: "green" },

    { id: 153, parents: [140, 141], title: "Antimatter Power", itemTitleColor: "brown" },
    { id: 154, parents: [141], title: "Exotic Fusion Reactions", itemTitleColor: "brown" },
    { id: 155, parents: [148], title: "Applied High Energy Physics", itemTitleColor: "LightSeaGreen" },
    { id: 156, parents: [149], title: "Specialized Plasma Propulsion", itemTitleColor: "#533153" },
    { id: 157, parents: [133, 151], title: "Artificial Intelligence", itemTitleColor: "green" },
    { id: 158, parents: [151], title: "High-Power Electrical Systems", itemTitleColor: "navy" },
    { id: 159, parents: [170], title: "Exotic Radiators", itemTitleColor: "orange" },
    { id: 160, parents: [152], title: "Advanced Colonization", itemTitleColor: "green" },


    { id: 161, parents: [153, 154], title: "Quantum Reactions", itemTitleColor: "brown" },
    { id: 162, parents: [155], title: "Ultra High Energy Physics", itemTitleColor: "LightSeaGreen" },
    { id: 163, parents: [156], title: "Exotic Plasma Propulsion", itemTitleColor: "#533153" },
    { id: 164, parents: [158], title: "Exotic Electrical Systems", itemTitleColor: "navy" },

    { id: 165, parents: [161, 162], title: "Unified Field Theory", itemTitleColor: "brown" },

    { id: 166, parents: [38], templateName: "dot", itemTitleColor: "gray", relativeItem: 56, placementType: primitives.common.AdviserPlacementType.Right, position: 1 },
    { id: 167, parents: [73], templateName: "dot", itemTitleColor: "gray" },
    { id: 168, parents: [55], templateName: "dot", itemTitleColor: "orange" },
    { id: 169, parents: [94], templateName: "dot", itemTitleColor: "orange" },
    { id: 170, parents: [137], templateName: "dot", itemTitleColor: "orange" },
    { id: 171, parents: [39], templateName: "dot", itemTitleColor: "brown" }
  ]
};
