import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioGroupOption, ComboBoxOption } from 'components';
import primitives from 'basicprimitives';

class AnnotationOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>On-screen Annotations Specific</h4>
        <RadioGroupOption
          caption="Placement type"
          propertyName="connectorPlacementType"
          value={config.connectorPlacementType}
          valueType="number"
          items={primitives.common.ConnectorPlacementType}
          onChange={value => setOption('connectorPlacementType', value)}
        />
        <RadioGroupOption
          caption="Connector shape type"
          propertyName="connectorShapeType"
          value={config.connectorShapeType}
          valueType="number"
          items={primitives.common.ConnectorShapeType}
          onChange={value => setOption('connectorShapeType', value)}
        />
        <RadioGroupOption
          caption="Label Placement type"
          propertyName="labelPlacementType"
          value={config.labelPlacementType}
          valueType="number"
          items={primitives.common.ConnectorLabelPlacementType}
          onChange={value => setOption('labelPlacementType', value)}
        />
        <ComboBoxOption
          caption="Line width"
          propertyName="lineWidth"
          value={config.lineWidth}
          valueType="number"
          items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={value => setOption('lineWidth', value)}
        />
        <RadioGroupOption
          caption="Line type"
          propertyName="lineType"
          value={config.lineType}
          valueType="number"
          items={primitives.common.LineType}
          onChange={value => setOption('lineType', value)}
        />
        <ComboBoxOption
          caption="Color"
          propertyName="color"
          value={config.color}
          valueType="string"
          items={primitives.common.Colors}
          onChange={value => setOption('color', value)}
        />
        <ComboBoxOption
          caption="Offset"
          propertyName="offset"
          value={config.offset}
          valueType="number"
          items={[-50, -20, -10, -5, 0, 5, 10, 20, 50]}
          onChange={value => setOption('offset', value)}
        />
        <RadioGroupOption
          caption="Connector Z order type"
          propertyName="zOrderType"
          value={config.zOrderType}
          valueType="number"
          items={primitives.common.ZOrderType}
          onChange={value => setOption('zOrderType', value)}
        />
      </div>
    );
  }
}

export default AnnotationOptionsPanel;
