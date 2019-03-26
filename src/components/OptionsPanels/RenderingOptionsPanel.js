import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption,
} from 'components';
import primitives from 'basicprimitives';

class RenderingOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Rendering</h4>
        <p>
          By default widget preferes SVG graphics mode. Use this property to enforce graphics mode programmatically.
        </p>
        <RadioGroupOption
          caption="Graphics"
          propertyName="graphicsType"
          value={config.graphicsType}
          valueType="number"
          items={primitives.common.GraphicsType}
          onChange={value => setOption('graphicsType', value)}
        />
        <p>
          In order to achive better greacefull degradation of your diagram use item templates of various sizes instead of CSS scale.
        </p>
        <ComboBoxOption
          caption="CSS Scale"
          propertyName="scale"
          value={config.scale}
          valueType="number"
          items={{
            '50%': 0.5,
            '60%': 0.6,
            '70%': 0.7,
            '80%': 0.8,
            '90%': 0.9,
            '100%': 1,
            '110%': 1.1,
            '120%': 1.2,
            '130%': 1.3,
            '140%': 1.4,
            '150%': 1.5,
            '160%': 1.6,
            '170%': 1.7,
            '180%': 1.8,
            '190%': 1.9,
            '200%': 2.0
          }}
          onChange={value => setOption('scale', value)}
        />
      </div>
    );
  }
}

export default RenderingOptionsPanel;
