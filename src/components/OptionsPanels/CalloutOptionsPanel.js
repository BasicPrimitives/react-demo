import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption,
} from 'components';
import primitives from 'basicprimitives';

class CalloutOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Callout Style</h4>
        <p>
          By default callout displays item content, but it can be redefined with custom callout template.
        </p>
        <RadioGroupOption
          caption="Maximum node type visibility"
          propertyName="calloutMaximumVisibility"
          value={config.calloutMaximumVisibility}
          valueType="number"
          items={{ Normal: 1, Dot: 2, Line: 3 }}
          onChange={value => setOption('calloutMaximumVisibility', value)}
        />
        <ComboBoxOption
          caption="This option controls callout visibility for minimized items and it can be ovewritten per item"
          propertyName="showCallout"
          value={config.showCallout}
          valueType="boolean"
          items={[true, false]}
          onChange={value => setOption('showCallout', value)}
        />
        <ComboBoxOption
          caption="Call out placement offset"
          propertyName="calloutPlacementOffset"
          value={config.calloutPlacementOffset}
          valueType="number"
          items={[10, 20, 30, 40, 50, 100, 200, 300]}
          onChange={value => setOption('calloutPlacementOffset', value)}
        />
        <ComboBoxOption
          caption="Fill color"
          propertyName="calloutfillColor"
          value={config.calloutfillColor}
          valueType="string"
          items={primitives.common.Colors}
          onChange={value => setOption('calloutfillColor', value)}
        />
        <ComboBoxOption
          caption="Border line color"
          propertyName="calloutBorderColor"
          value={config.calloutBorderColor}
          isNullable
          valueType="string"
          items={primitives.common.Colors}
          onChange={value => setOption('calloutBorderColor', value)}
        />
        <ComboBoxOption
          caption="Offset"
          propertyName="calloutOffset"
          value={config.calloutOffset}
          valueType="number"
          items={[0, 1, 2, 3, 4, 5, 10, 20, 30]}
          onChange={value => setOption('calloutOffset', value)}
        />
        <ComboBoxOption
          caption="Corner Radius"
          propertyName="calloutCornerRadius"
          value={config.calloutCornerRadius}
          valueType="string"
          items={['0%', '5%', '10%', '20%', 0, 1, 2, 3, 4, 5, 10, 20, 30]}
          onChange={value => setOption('calloutCornerRadius', value)}
        />
        <ComboBoxOption
          caption="Pointer Base Width"
          propertyName="calloutPointerWidth"
          value={config.calloutPointerWidth}
          valueType="string"
          items={['0%', '5%', '10%', '20%', 0, 5, 10, 20, 50]}
          onChange={value => setOption('calloutPointerWidth', value)}
        />
        <ComboBoxOption
          caption="Line width"
          propertyName="calloutLineWidth"
          value={config.calloutLineWidth}
          valueType="number"
          items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={value => setOption('calloutLineWidth', value)}
        />
        <ComboBoxOption
          caption="Opacity"
          propertyName="calloutOpacity"
          value={config.calloutOpacity}
          valueType="number"
          items={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}
          onChange={value => setOption('calloutOpacity', value)}
        />
      </div>
    );
  }
}

export default CalloutOptionsPanel;
