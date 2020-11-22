const primitives = require('basicprimitives');

module.exports = {
  cursorItem: 3,
  annotations: [
    {
      annotationType: primitives.common.AnnotationType.Connector,
      connectorPlacementType: primitives.common.ConnectorPlacementType.Offbeat,
      labelPlacementType: primitives.common.ConnectorLabelPlacementType.Between,
      zOrderType: primitives.common.ZOrderType.Foreground,
      fromItem: 2,
      toItem: 1,
      label: { color: "red", badge: "1", title: "Connector annotation" },
      labelSize: { width: 80, height: 30 }, // new primitives.common.Size(80, 30)
      connectorShapeType: primitives.common.ConnectorShapeType.OneWay,
      color: primitives.common.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.common.LineType.Dashed,
      name: "usercontrolledconnector"
    },
    new primitives.famdiagram.HighlightPathAnnotationConfig({ items: [3, 5] }),
    new primitives.famdiagram.HighlightPathAnnotationConfig({ items: [3, 6] }),

    new primitives.famdiagram.LabelAnnotationConfig({
      fromItem: 4,
      toItems: [5],
      title: '30%',
      templateName: 'LabelAnnotationTemplate'
    }),
    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 4, toItems: [5, 7], title: '100%' }),
    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 4, toItems: [7], title: '70%' }),

    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 3, toItems: [5], title: '20%' }),
    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 3, toItems: [6], title: '80%' }),
    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 3, toItems: [5, 6], title: '100%' }),

    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 6, toItems: [5], title: '⇧27%' }),
    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 6, toItems: [3], title: '⇧73%' }),
    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 6, toItems: [5, 3], title: '⇧100%' }),

    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 6, toItems: [7], title: '60%' }),
    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 6, toItems: [7, 8], title: '100%' }),
    new primitives.famdiagram.LabelAnnotationConfig({ fromItem: 6, toItems: [8], title: '40%' })
  ],
  items: [
    {
      id: 1,
      title: '20%',
      isActive: false,
      templateName: 'ShapeTemplate',
      shapeType: 'rhombus',
      minimizedItemShapeType: primitives.common.ShapeType.Rhombus
    },
    {
      id: 2,
      title: '80%',
      isActive: false,
      templateName: 'ShapeTemplate',
      shapeType: 'circle',
      minimizedItemShapeType: primitives.common.ShapeType.Circle
    },
    {
      id: 3,
      parents: [1, 2],
      title: 'Top Holdings',
      hasSelectorCheckbox: primitives.common.Enabled.True,
      minimizedItemShapeType: primitives.common.ShapeType.Rectangle
    },
    {
      id: 4,
      title: 'Top Holdings Ltd.',
      hasSelectorCheckbox: primitives.common.Enabled.True,
      minimizedItemShapeType: primitives.common.ShapeType.Rectangle
    },
    {
      id: 5,
      parents: [3, 4],
      title: 'ABC Holdings',
      hasSelectorCheckbox: primitives.common.Enabled.True,
      minimizedItemShapeType: primitives.common.ShapeType.Rectangle
    },
    {
      id: 6,
      parents: [5, 3],
      title: 'ABC Co Ltd',
      hasSelectorCheckbox: primitives.common.Enabled.True,
      minimizedItemShapeType: primitives.common.ShapeType.Rectangle
    },
    {
      id: 7,
      parents: [4, 6],
      title: 'II',
      isActive: false,
      templateName: 'ShapeTemplate',
      shapeType: 'rectangle',
      minimizedItemShapeType: primitives.common.ShapeType.Rectangle
    },
    {
      id: 8,
      parents: [6],
      title: 'I',
      isActive: false,
      templateName: 'ShapeTemplate',
      shapeType: 'rectangle',
      minimizedItemShapeType: primitives.common.ShapeType.Rectangle
    }
  ]
};
