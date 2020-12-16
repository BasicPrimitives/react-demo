const { LabelAnnotationConfig, AnnotationType, ConnectorPlacementType, ZOrderType,
  ConnectorShapeType, HighlightPathAnnotationConfig, ShapeType, ConnectorLabelPlacementType, 
  Colors, LineType, Enabled } = require('basicprimitives');

module.exports = {
  cursorItem: 3,
  annotations: [
    {
      annotationType: AnnotationType.Connector,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      labelPlacementType: ConnectorLabelPlacementType.Between,
      zOrderType: ZOrderType.Foreground,
      fromItem: 2,
      toItem: 1,
      label: { color: "red", badge: "1", title: "Connector annotation" },
      labelSize: { width: 80, height: 30 }, // new Size(80, 30)
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: LineType.Dashed,
      name: "usercontrolledconnector"
    },
    new HighlightPathAnnotationConfig({ items: [3, 5] }),
    new HighlightPathAnnotationConfig({ items: [3, 6] }),

    new LabelAnnotationConfig({
      fromItem: 4,
      toItems: [5],
      title: '30%',
      templateName: 'LabelAnnotationTemplate'
    }),
    new LabelAnnotationConfig({ fromItem: 4, toItems: [5, 7], title: '100%' }),
    new LabelAnnotationConfig({ fromItem: 4, toItems: [7], title: '70%' }),

    new LabelAnnotationConfig({ fromItem: 3, toItems: [5], title: '20%' }),
    new LabelAnnotationConfig({ fromItem: 3, toItems: [6], title: '80%' }),
    new LabelAnnotationConfig({ fromItem: 3, toItems: [5, 6], title: '100%' }),

    new LabelAnnotationConfig({ fromItem: 6, toItems: [5], title: '⇧27%' }),
    new LabelAnnotationConfig({ fromItem: 6, toItems: [3], title: '⇧73%' }),
    new LabelAnnotationConfig({ fromItem: 6, toItems: [5, 3], title: '⇧100%' }),

    new LabelAnnotationConfig({ fromItem: 6, toItems: [7], title: '60%' }),
    new LabelAnnotationConfig({ fromItem: 6, toItems: [7, 8], title: '100%' }),
    new LabelAnnotationConfig({ fromItem: 6, toItems: [8], title: '40%' })
  ],
  items: [
    {
      id: 1,
      title: '20%',
      isActive: false,
      templateName: 'ShapeTemplate',
      shapeType: 'rhombus',
      minimizedItemShapeType: ShapeType.Rhombus
    },
    {
      id: 2,
      title: '80%',
      isActive: false,
      templateName: 'ShapeTemplate',
      shapeType: 'circle',
      minimizedItemShapeType: ShapeType.Circle
    },
    {
      id: 3,
      parents: [1, 2],
      title: 'Top Holdings',
      hasSelectorCheckbox: Enabled.True,
      minimizedItemShapeType: ShapeType.Rectangle
    },
    {
      id: 4,
      title: 'Top Holdings Ltd.',
      hasSelectorCheckbox: Enabled.True,
      minimizedItemShapeType: ShapeType.Rectangle
    },
    {
      id: 5,
      parents: [3, 4],
      title: 'ABC Holdings',
      hasSelectorCheckbox: Enabled.True,
      minimizedItemShapeType: ShapeType.Rectangle
    },
    {
      id: 6,
      parents: [5, 3],
      title: 'ABC Co Ltd',
      hasSelectorCheckbox: Enabled.True,
      minimizedItemShapeType: ShapeType.Rectangle
    },
    {
      id: 7,
      parents: [4, 6],
      title: 'II',
      isActive: false,
      templateName: 'ShapeTemplate',
      shapeType: 'rectangle',
      minimizedItemShapeType: ShapeType.Rectangle
    },
    {
      id: 8,
      parents: [6],
      title: 'I',
      isActive: false,
      templateName: 'ShapeTemplate',
      shapeType: 'rectangle',
      minimizedItemShapeType: ShapeType.Rectangle
    }
  ]
};
