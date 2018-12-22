import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption
} from 'components';
import primitives from 'basicprimitives';

class ConnectorsOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Connectors Style</h4>
        <RadioGroupOption
          caption="Arrows Direction"
          propertyName="arrowsDirection"
          value={config.arrowsDirection}
          valueType={PropTypes.number}
          items={primitives.common.GroupByType}
          onChange={value => setOption('arrowsDirection', value)}
        />
        <RadioGroupOption
          caption="Connectors"
          propertyName="connectorType"
          value={config.connectorType}
          valueType={PropTypes.number}
          items={primitives.common.ConnectorType}
          onChange={value => setOption('connectorType', value)}
        />
        <RadioGroupOption
          caption="Elbows Type"
          propertyName="elbowType"
          value={config.elbowType}
          valueType={PropTypes.number}
          items={primitives.common.ElbowType}
          onChange={value => setOption('elbowType', value)}
        />
        <ComboBoxOption
          caption="Bevel Size"
          propertyName="bevelSize"
          value={config.bevelSize}
          valueType={PropTypes.number}
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={value => setOption('bevelSize', value)}
        />
        <ComboBoxOption
          caption="Elbow dot Size"
          propertyName="elbowDotSize"
          value={config.elbowDotSize}
          valueType={PropTypes.number}
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={value => setOption('elbowDotSize', value)}
        />
        <RadioGroupOption
          caption="Line type"
          propertyName="linesType"
          value={config.linesType}
          valueType={PropTypes.number}
          items={primitives.common.LineType}
          onChange={value => setOption('linesType', value)}
        />
        <ComboBoxOption
          caption="Color"
          propertyName="linesColor"
          value={config.linesColor}
          valueType={PropTypes.string}
          items={primitives.common.Colors}
          onChange={value => setOption('linesColor', value)}
        />
        <ComboBoxOption
          caption="Line width"
          propertyName="linesWidth"
          value={config.linesWidth}
          valueType={PropTypes.number}
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={value => setOption('linesWidth', value)}
        />
        <ComboBoxOption
          caption="Show extra horizontal arrows on top of connectors for easy navigation between parents and children through connector lines"
          propertyName="showExtraArrows"
          value={config.showExtraArrows}
          valueType={PropTypes.bool}
          items={[true, false]}
          onChange={value => setOption('showExtraArrows', value)}
        />
        <ComboBoxOption
          caption="Available minimum space to show horizontal arrow"
          propertyName="extraArrowsMinimumSpace"
          value={config.extraArrowsMinimumSpace}
          valueType={PropTypes.bool}
          items={[0, 5, 10, 20, 30, 40, 50, 100, 200, 1000]}
          onChange={value => setOption('extraArrowsMinimumSpace', value)}
        />
      </div>
    );
  }
}

export default ConnectorsOptionsPanel;
