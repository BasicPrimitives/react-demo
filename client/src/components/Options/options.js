import primitives from 'basicprimitives';
import { phone, email } from 'utils/validation';

const images = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((agg, imageChar) => {
    agg[imageChar.toUpperCase()] = `/api/images/photos/${imageChar}.png`;
    return agg;
  }, {});

const AutoLayoutOptions = { 
    title: "Auto Layout", 
    namespace: "config",
    options: [
        { optionType: "CaptionConfig", caption: "Page Fit Mode defines rule of fitting chart into available screen space. Set it to None if you want to disable it." },
        { optionType: "RadioBoxConfig", name: "pageFitMode", caption: "Page Fit Mode", options: { None: 0, PageWidth: 1, PageHeight: 2, FitToPage: 3, SelectionOnly: 6 }, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "orientationType",  caption: "Orientation Type", options: primitives.common.OrientationType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "verticalAlignment",  caption: "Items Vertical Alignment", options: primitives.common.VerticalAlignmentType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "horizontalAlignment",  caption: "Items Horizontal Alignment", options: primitives.common.HorizontalAlignmentType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "childrenPlacementType",  caption: "Children placement", options: primitives.common.ChildrenPlacementType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "leavesPlacementType",  caption: "Leaves placement defines layout shape for items having no children", options: primitives.common.ChildrenPlacementType, valueType: "number" },
        { optionType: "CheckBoxConfig", name: "placeAdvisersAboveChildren",  caption: "Place children of advisers above their parent node children" },
        { optionType: "CheckBoxConfig", name: "placeAssistantsAboveChildren",  caption: "Place children of assistants above their parent node children" },
        { optionType: "DropDownBoxConfig", name: "maximumColumnsInMatrix", caption: "Maximum columns number in matrix children layout", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20], valueType: "number" },
        { optionType: "RadioBoxConfig", name: "minimalVisibility", caption: "Minimal nodes visibility", options: primitives.common.Visibility, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "selectionPathMode", caption: "Selection Path Mode sets visibility of items between cursor item and root", options: primitives.common.SelectionPathMode, valueType: "number" }
    ]
};

const FamilyLayoutOptions = { 
    title: "Auto Layout", 
    namespace: "config",
    options: [
        { optionType: "CaptionConfig", caption: "Page Fit Mode defines rule of fitting chart into available screen space. Set it to None if you want to disable it." },
        { optionType: "RadioBoxConfig", name: "pageFitMode", caption: "Page Fit Mode", options: { None: 0, PageWidth: 1, PageHeight: 2, FitToPage: 3, SelectionOnly: 6 }, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "orientationType",  caption: "Orientation Type", options: primitives.common.OrientationType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "verticalAlignment",  caption: "Items Vertical Alignment", options: primitives.common.VerticalAlignmentType, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "maximumColumnsInMatrix", caption: "Maximum columns number in matrix children layout", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20], valueType: "number" },
        { optionType: "RadioBoxConfig", name: "minimalVisibility", caption: "Minimal nodes visibility", options: primitives.common.Visibility, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "neighboursSelectionMode", caption: "Neighbours Selection Mode", options: primitives.common.NeighboursSelectionMode, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "selectionPathMode", caption: "Selection Path Mode sets visibility of items between cursor item and root", options: primitives.common.SelectionPathMode, valueType: "number" },
        { optionType: "CaptionConfig", caption: "Group by option defines node placement in layout close to its parents or children when node is linked across multiple levels in hierarchy. See `alignment` data set." },
        { optionType: "RadioBoxConfig", name: "groupByType", caption: "Group By", options: { Children: 2, Parents: 1 }, valueType: "number" },
        { optionType: "CaptionConfig", caption: "The following option keeps items at the same levels after connections bundling." },
        { optionType: "CheckBoxConfig", name: "alignBylevels",  caption: "Align by levels" },
        { optionType: "CaptionConfig", caption: "The following option hides direct connectors to grand parents. It helps reduce diagrams connectors layout complexity. This option should be used together with dynamic highlighting of connectors to grandparents via immidiate parents, so information is not lost." },
        { optionType: "CheckBoxConfig", name: "hideGrandParentsConnectors",  caption: "Hides grand parents connectors" },
        { optionType: "CaptionConfig", caption: "Chart optimizes items placement into layers, so the final diagram has minimal number of feedback loops between them. Use following option to disable that behaviour and place items in the same sequence as in source items collection." },
        { optionType: "RadioBoxConfig", name: "loopsLayoutMode", caption: "Loops Layout Mode", options: primitives.common.LoopsLayoutMode, valueType: "number" },
        { optionType: "CaptionConfig", caption: "The following option enables natrix layout in family diagram. Nodes having the same set of parents and children are grouped into square shaped matrix in order to keep them visualy together." },
        { optionType: "CheckBoxConfig", name: "enableMatrixLayout",  caption: "Enable Matrix Layout" },
        { optionType: "DropDownBoxConfig", name: "minimumMatrixSize", caption: "Minimum number of nodes needed in order to be formed into matrix layout", options: [2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "number", isNullable: true },
        { optionType: "DropDownBoxConfig", name: "maximumColumnsInMatrix", caption: "Maximum columns number in matrix nodes layout", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20], valueType: "number", isNullable: true }
    ]
};

const DefaultTemplateOptions = { 
    title: "Default Template", 
    namespace: "config",
    options: [
        { optionType: "RadioBoxConfig", name: "hasButtons", caption: "Show user buttons", options: primitives.common.Enabled, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "hasSelectorCheckbox", caption: "Show selection check box", options: primitives.common.Enabled, valueType: "number" },
        { optionType: "TextConfig", name: "selectCheckBoxLabel", caption: "Selection checkbox label", valueType: "string", isNullable: false },
        { optionType: "CaptionConfig", name: "Default chart item template tries to select the best matching font color for current title background." },
        { optionType: "DropDownBoxConfig", name: "itemTitleFirstFontColor", caption: "Title first font color", options: primitives.common.Colors, valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "itemTitleSecondFontColor", caption: "Title second font color", options: primitives.common.Colors, valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "buttonsPanelSize", caption: "Buttons panel size", options: [28, 56, 84], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "checkBoxPanelSize", caption: "Checkbox panel size", options: [24, 48, 72], valueType: "number" }
    ]
};
const GroupTitlesOptions = { 
    title: "Group Titles", 
    namespace: "config",
    options: [
        { optionType: "RadioBoxConfig", name: "groupTitlePlacementType", caption: "Placement", options: primitives.common.AdviserPlacementType, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "groupTitlePanelSize", caption: "Group title panel width", options: [24, 48, 72], valueType: "number" },
        { optionType: "RadioBoxConfig", name: "groupTitleOrientation", caption: "Orientation", options: primitives.text.TextOrientationType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "groupTitleVerticalAlignment", caption: "Vertical Alignment", options: primitives.common.VerticalAlignmentType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "groupTitleHorizontalAlignment", caption: "Horizontal Alignment", options: primitives.common.HorizontalAlignmentType, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "groupTitleColor", caption: "Background Color", options: primitives.common.Colors, valueType: "string" },
        { optionType: "CaptionConfig", caption: "For group title color, see title first and second font colors in default template options." },
        { optionType: "DropDownBoxConfig", name: "groupTitleFontSize", caption: "Font size", options: ["8px", "10px", "12px", "14px", "16px", "18px", "20px"], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "groupTitleFontWeight", caption: "Font Weight", options: ["normal", "bold"], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "groupTitleFontStyle", caption: "Font Style", options: ["normal", "italic"], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "groupTitleFontFamily", caption: "Font Style", options: ["Arial", "Verdana", "Times New Roman", "Serif", "Courier"], valueType: "string" },
    ]
};
const MarkersOptions = { 
    title: "Markers",
    namespace: "defaultTemplate",
    options: [
        { optionType: "CaptionConfig", caption: "These options are defined per item template. So if you need to show individual markers per item, you have to define template for every marker type and assign it to items. Template is some sort of named property bag." },
        { optionType: "CaptionConfig", caption: "By default marker has color of itemTitleColor property, download demos and check samples source data. If item has no title color set, then be sure that you set border line width and color for markers having no fill, othewise you are not going to see them." },
        { optionType: "SizeConfig", name: "minimizedItemSize", caption: "Marker size", widths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40], heights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40] },
        { optionType: "DropDownBoxConfig", name: "minimizedItemCornerRadius", caption: "Corner Radius", options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20], valueType: "number", isNullable: true },
        { optionType: "ThicknessConfig", name: "highlightPadding", caption: "Highlight border padding around marker", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { optionType: "RadioBoxConfig", name: "minimizedItemShapeType", caption: "Marker Shape", options: primitives.common.ShapeType, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "minimizedItemLineWidth", caption: "Marker border line width", options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "number" },
        { optionType: "RadioBoxConfig", name: "minimizedItemLineType", caption: "Marker border line type", options: primitives.common.LineType, valueType: "number" },
        { optionType: "CaptionConfig", caption: "Following Border and Fill colors properties work only for items having no title color property set. See Parners & Annotations Demo to try them." },
        { optionType: "DropDownBoxConfig", name: "minimizedItemBorderColor", caption: "Marker border line color", options: primitives.common.Colors, valueType: "string", isNullable: true },
        { optionType: "DropDownBoxConfig", name: "minimizedItemFillColor", caption: "Marker fill color", options: primitives.common.Colors, valueType: "string", isNullable: true },
        { optionType: "DropDownBoxConfig", name: "minimizedItemOpacity", caption: "Opacity", options: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], valueType: "number" }
    ]
};
const IntervalsOptions = { 
    title: "Intervals", 
    namespace: "config",
    options: [
        { optionType: "CaptionConfig", caption: "Vertical Intervals Between Rows" },
        { optionType: "DropDownBoxConfig", name: "normalLevelShift", caption: "Normal", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40], valueType: "number" },
        { optionType: "CaptionConfig", caption: "If you enable labels for dots, use the following interval to fit them between levels." },
        { optionType: "DropDownBoxConfig", name: "dotLevelShift", caption: "Dotted", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40, 80, 160, 240, 320], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "lineLevelShift", caption: "Lined", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40, 80, 160, 240, 320], valueType: "number" },
    
        { optionType: "CaptionConfig", caption: "Horizontal Intervals Between Items in Row" },
        { optionType: "DropDownBoxConfig", name: "normalItemsInterval", caption: "Normal", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "dotItemsInterval", caption: "Dotted", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "lineItemsInterval", caption: "Lined", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "cousinsIntervalMultiplier", caption: "Additional interval multiplier between cousins, it creates extra space between hierarchies", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40], valueType: "number" }
    ]
};
const ConnectorsOptions = { 
    title: "Connectors", 
    namespace: "config",
    options: [
        { optionType: "RadioBoxConfig", name: "arrowsDirection", caption: "Arrows Direction", options: primitives.common.GroupByType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "connectorType", caption: "Connectors", options: primitives.common.ConnectorType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "elbowType", caption: "Elbows Type", options: primitives.common.ElbowType, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "bevelSize", caption: "Bevel Size", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "elbowDotSize", caption: "Elbow dot Size", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "number" },
        { optionType: "RadioBoxConfig", name: "linesType", caption: "Line type", options: primitives.common.LineType, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "linesColor", caption: "Color", options: primitives.common.Colors, valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "linesWidth", caption: "Line width", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "number" },
        { optionType: "CheckBoxConfig", name: "showExtraArrows", caption: "Show extra horizontal arrows on top of connectors, for easy navigation between parents and children through connector lines" },
        { optionType: "DropDownBoxConfig", name: "extraArrowsMinimumSpace", caption: "Available minimum space to show horizontal arrow", options: [0, 5, 10, 20, 30, 40, 50, 100, 200, 1000], valueType: "number" }
    ]
};
const LabelsOptions = { 
    title: "Labels", 
    namespace: "config",
    options: [
        { optionType: "CaptionConfig", caption: "Label property should be defined for every item first, otherwise chart has nothiong to show. Labels are visible only for markers. If you need to add labels to normal size items you have to modify default item template and place text outside item boundaries." },
        { optionType: "RadioBoxConfig", name: "showLabels", caption: "Show labels", options: primitives.common.Enabled, valueType: "number" },
        { optionType: "SizeConfig", name: "labelSize", caption: "Size: Use this property to define labels bounding rectangle. Labels placed relative to markers(dots), so if they overlap each other in auto show mode, one of them would be hidden. Set appropriate intervals between levels of markers in order to fit and make all labels visible.", widths: [80, 160, 240, 320], heights: [8, 16, 24, 32, 40, 48, 56] },
        { optionType: "DropDownBoxConfig", name: "labelOffset", caption: "Offset", options: [0, 1, 2, 3, 4, 5, 10, 20, 30], valueType: "number" },
        { optionType: "RadioBoxConfig", name: "labelOrientation", caption: "Label Orientation", options: primitives.text.TextOrientationType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "labelPlacement", caption: "Label Placement", options: primitives.common.PlacementType, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "labelFontSize", caption: "Font size", options: ["8px", "10px", "12px", "14px", "16px", "18px", "20px"], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "labelFontFamily", caption: "Font Style", options: ["Arial", "Verdana", "Times New Roman", "Serif", "Courier"], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "labelColor", caption: "Font Color", options: primitives.common.Colors, valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "labelFontWeight", caption: "Font Weight", options: ["normal", "bold"], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "labelFontStyle", caption: "Font Style", options: ["normal", "italic"], valueType: "string" },
    ]
};
const CalloutOptions = { 
    title: "Callout", 
    namespace: "config",
    options: [
        { optionType: "CaptionConfig", caption: "By default callout displays item content, but it can be redefined with custom callout template." },
        { optionType: "CheckBoxConfig", name: "showCallout", caption: "Show callout" },
        { optionType: "RadioBoxConfig", name: "calloutMaximumVisibility", caption: "Maximum node type visibility", options: { Normal: 1, Dot: 2, Line: 3 }, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "calloutPlacementOffset", caption: "Call out placement offset", options: [10, 20, 30, 40, 50, 100, 200, 300], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "calloutfillColor", caption: "Fill color", options: primitives.common.Colors, valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "calloutBorderColor", caption: "Border line color", options: primitives.common.Colors, valueType: "string", isNullable: true },
        { optionType: "DropDownBoxConfig", name: "calloutOffset", caption: "Offset", options: [0, 1, 2, 3, 4, 5, 10, 20, 30], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "calloutCornerRadius", caption: "Corner Radius", options: ["0%", "5%", "10%", "20%", 0, 1, 2, 3, 4, 5, 10, 20, 30], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "calloutPointerWidth", caption: "Pointer Base Width", options: ["0%", "5%", "10%", "20%", 0, 5, 10, 20, 50], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "calloutLineWidth", caption: "Line width", options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "calloutOpacity", caption: "Opacity", options: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], valueType: "number" }
    ]
};
const InteractivityOptions = { 
    title: "Interactivity", 
    namespace: "config",
    options: [
        { optionType: "CaptionConfig", caption: "Use this option to disable mouse highlight on touch devices." },
        { optionType: "RadioBoxConfig", name: "navigationMode", caption: "Navigation mode", options: primitives.common.NavigationMode, valueType: "number" },
        { optionType: "CaptionConfig", caption: "This option defines highlight gravity radius, so minimized item gets highlighted when mouse pointer does not overlap marker but it is within gravity radius of its boundaries." },
        { optionType: "DropDownBoxConfig", name: "highlightGravityRadius", caption: "Normal", options: [0, 5, 10, 20, 30, 40, 50, 100, 200, 1000], valueType: "number" },
        { optionType: "CheckBoxConfig", name: "enablePanning", caption: "Enable Panning" }
    ]
};
const RenderingOptions = {  
    title: "Rendering", 
    namespace: "config",
    options: [
        { optionType: "CaptionConfig", caption: "By default widget preferes SVG graphics mode. Use this property to enforce graphics mode programmatically." },
        { optionType: "RadioBoxConfig", name: "graphicsType", caption: "Graphics", options: primitives.common.GraphicsType, valueType: "number" },
        { optionType: "CaptionConfig", caption: "In order to achive better greacefull degradation of your diagram use item templates of various sizes instead of CSS scale." },
        { optionType: "DropDownBoxConfig", name: "scale", caption: "CSS Scale", options: { "50%": 0.5, "60%": 0.6, "70%": 0.7, "80%": 0.8, "90%": 0.9, "100%": 1.0, "110%": 1.1, "120%": 1.2, "130%": 1.3, "140%": 1.4, "150%": 1.5, "160%": 1.6, "170%": 1.7, "180%": 1.8, "190%": 1.9, "200%": 2.0 }, valueType: "number" },
    ]
};
const FrameOptions = {  
    title: "Frame", 
    namespace: "config",
    options: [
        { optionType: "CaptionConfig", caption: "Displays selected items outside view port area." },
        { optionType: "CheckBoxConfig", name: "showFrame", caption: "Show Frame" },
        { optionType: "ThicknessConfig", name: "frameInnerPadding", caption: "Frame inner padding", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "number" },
        { optionType: "ThicknessConfig", name: "frameOuterPadding", caption: "Frame outer padding", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "number" }
    ]
};

const ItemOptions = {  
    title: "Properties", 
    namespace: "config",
    options: [
        { optionType: "TextConfig", name: "title", caption: "Title", valueType: "string", isNullable: false },
        { optionType: "TextConfig", name: "description", caption: "Description", valueType: "string", isNullable: false },
        { optionType: "TextConfig", name: "groupTitle", caption: "Group Title", valueType: "string", isNullable: true },
        { optionType: "TextConfig", name: "phone", caption: "Phone", placeholder: "(123) 123-12-12", onValidate: (value) => phone(value), valueType: "string", isNullable: true },
        { optionType: "TextConfig", name: "email", caption: "E-mail", placeholder: "name@server.com", onValidate: (value) => email(value), valueType: "string", isNullable: true },
        { optionType: "TextConfig", name: "label", caption: "Marker Label", isNullable: true, valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "itemTitleColor", caption: "Title Color", options: primitives.common.Colors, valueType: "string", isNullable: true },
        { optionType: "DropDownBoxConfig", name: "groupTitleColor", caption: "Group Title Color", options: primitives.common.Colors, valueType: "string", isNullable: true },
        { optionType: "DropDownBoxConfig", name: "image", caption: "Image", options: images, valueType: "string", isNullable: true },
        { optionType: "DropDownBoxConfig", name: "minimizedItemShapeType", caption: "Marker Shape", options: primitives.common.ShapeType, valueType: "string", isNullable: true },
    ]
};

const ConnectorAnnotationOptions = {  
    title: "Connector Annotation", 
    namespace: "annotation",
    options: [
        { optionType: "RadioBoxConfig", name: "connectorPlacementType", caption: "Placement", options: primitives.common.ConnectorPlacementType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "connectorShapeType", caption: "Shape", options: primitives.common.ConnectorShapeType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "labelPlacementType", caption: "Label Placement", options: primitives.common.ConnectorLabelPlacementType, valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "lineWidth", caption: "Line width", options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "lineType", caption: "Line type", options: primitives.common.LineType, valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "color", caption: "Color", options: primitives.common.Colors, valueType: "string" },
        { optionType: "DropDownBoxConfig", name: "offset", caption: "Offset", options: [-50, -20, -10, -5, 0, 5, 10, 20, 50], valueType: "number" },
        { optionType: "DropDownBoxConfig", name: "zOrderType", caption: "Connector Z order type", options: primitives.common.ZOrderType, valueType: "number" }
    ]
};

const ItemLayoutOptions = {  
    title: "Layout", 
    namespace: "config",
    options: [
        { optionType: "RadioBoxConfig", name: "itemType", caption: "Item Type", options: {
            Regular: 0,
            Assistant: 1,
            SubAssistant: 4,
            SubAdviser: 5,
            Adviser: 2,
            GeneralPartner: 6,
            LimitedPartner: 7,
            AdviserPartner: 8
          }, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "adviserPlacementType", caption: "Placement", options: primitives.common.AdviserPlacementType, valueType: "number" },
        { optionType: "RadioBoxConfig", name: "childrenPlacementType", caption: "Children Layout", options: primitives.common.ChildrenPlacementType, valueType: "number" }
        // { optionType: "CheckBoxConfig", name: "placeAdvisersAboveChildren", caption: "Place advisers above children" },
        // { optionType: "CheckBoxConfig", name: "placeAssistantsAboveChildren", caption: "Place assistants above children" }
    ]
};

const ChildrenOrderOptions = {  
    title: "Children", 
    namespace: "children",
    options: [
        { optionType: "CaptionConfig", caption: "Drag to order children." },
        { optionType: "ItemsOrderConfig", name: "children", caption: "Drag to order children" }
    ]
};

const Options = {
    AutoLayoutOptions,
    FamilyLayoutOptions,
    DefaultTemplateOptions,
    ConnectorAnnotationOptions,
    GroupTitlesOptions,
    MarkersOptions,
    IntervalsOptions,
    ConnectorsOptions,
    LabelsOptions,
    CalloutOptions,
    InteractivityOptions,
    RenderingOptions,
    FrameOptions,
    ItemOptions,
    ItemLayoutOptions,
    ChildrenOrderOptions
};
export default Options;