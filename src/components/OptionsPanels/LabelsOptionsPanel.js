import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption,
  SizeOption
} from 'components';
import primitives from 'basicprimitives';

class LabelsOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Labels</h4>
        <p>
          Label property should be defined for every item first, otherwise chart has nothiong to show.
          Labels are visible only for markers. If you need to add labels to normal size items you have
          to modify default item template and place text outside item boundaries.
        </p>
        <RadioGroupOption
          caption="Show labels"
          propertyName="showLabels"
          value={config.showLabels}
          valueType="number"
          items={primitives.common.Enabled}
          onChange={value => setOption('showLabels', value)}
        />
        <p>
          Size: Use this property to define labels bounding rectangle.
          Labels placed relative to markers(dots), so when they overlap in auto show mode
          one of them would be hidden. Set appropriate intervals between levels of markers
          in order to fit and make all labels visible.
        </p>
        <SizeOption
          caption="Label Size"
          propertyName="labelSize"
          value={config.labelSize}
          widths={[80, 160, 240, 320]}
          heights={[8, 16, 24, 32, 40, 48, 56]}
          onChange={value => setOption('labelSize', value)}
        />
        <ComboBoxOption
          caption="Offset"
          propertyName="labelOffset"
          value={config.labelOffset}
          valueType="number"
          items={[0, 1, 2, 3, 4, 5, 10, 20, 30]}
          onChange={value => setOption('labelOffset', value)}
        />
        <RadioGroupOption
          caption="Label Orientation"
          propertyName="labelOrientation"
          value={config.labelOrientation}
          valueType="number"
          items={primitives.text.TextOrientationType}
          onChange={value => setOption('labelOrientation', value)}
        />
        <ComboBoxOption
          caption="Label Placement"
          propertyName="labelPlacement"
          value={config.labelPlacement}
          valueType="number"
          items={primitives.common.PlacementType}
          onChange={value => setOption('labelPlacement', value)}
        />
        <ComboBoxOption
          caption="Font size"
          propertyName="labelFontSize"
          value={config.labelFontSize}
          valueType="string"
          items={['8px', '10px', '12px', '14px', '16px', '18px', '20px']}
          onChange={value => setOption('labelFontSize', value)}
        />
        <RadioGroupOption
          caption="Font"
          propertyName="labelFontFamily"
          value={config.labelFontFamily}
          valueType="string"
          items={['Arial', 'Verdana', 'Times New Roman', 'Serif', 'Courier']}
          onChange={value => setOption('labelFontFamily', value)}
        />
        <ComboBoxOption
          caption="Font Color"
          propertyName="labelColor"
          value={config.labelColor}
          valueType="string"
          items={primitives.common.Colors}
          onChange={value => setOption('labelColor', value)}
        />
        <RadioGroupOption
          caption="Font Weight"
          propertyName="labelFontWeight"
          value={config.labelFontWeight}
          valueType="string"
          items={['normal', 'bold']}
          onChange={value => setOption('labelFontWeight', value)}
        />
        <RadioGroupOption
          caption="Font Style"
          propertyName="labelFontStyle"
          value={config.labelFontStyle}
          valueType="boolean"
          items={['normal', 'italic']}
          onChange={value => setOption('labelFontStyle', value)}
        />
      </div>
    );
  }
}

export default LabelsOptionsPanel;
