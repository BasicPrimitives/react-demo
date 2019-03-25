import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption,
  CheckboxOption,
} from 'components';
import primitives from 'basicprimitives';

class InteractivityOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Interactivity</h4>
        <p>
          Use this option to disable mouse highlight on touch devices.
        </p>
        <RadioGroupOption
          caption="Navigation mode"
          propertyName="navigationMode"
          value={config.navigationMode}
          valueType="number"
          items={primitives.common.NavigationMode}
          onChange={value => setOption('navigationMode', value)}
        />
        <p>
          This option defines highlight gravity radius, so minimized item gets highlighted when mouse
          pointer gets into marker gravity radius boundaries.
        </p>
        <ComboBoxOption
          caption="Highlight Gravity Radius"
          propertyName="highlightGravityRadius"
          value={config.highlightGravityRadius}
          valueType="number"
          items={[0, 5, 10, 20, 30, 40, 50, 100, 200, 1000]}
          onChange={value => setOption('highlightGravityRadius', value)}
        />
        <CheckboxOption
          caption="Enable Panning"
          propertyName="enablePanning"
          value={config.enablePanning}
          onChange={value => setOption('enablePanning', value)}
        />
      </div>
    );
  }
}

export default InteractivityOptionsPanel;
