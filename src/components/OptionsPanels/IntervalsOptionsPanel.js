import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComboBoxOption } from 'components';

class IntervalsOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Intervals</h4>
        <p>Vertical Intervals Between Rows</p>
        <ComboBoxOption
          caption="Normal"
          propertyName="normalLevelShift"
          value={config.normalLevelShift}
          valueType="number"
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40]}
          onChange={value => setOption('normalLevelShift', value)}
        />
        <p>If you enable labels for dots, use the following interval to fit them between levels</p>
        <ComboBoxOption
          caption="Dotted"
          propertyName="dotLevelShift"
          value={config.dotLevelShift}
          valueType="number"
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40, 80, 160, 240, 320]}
          onChange={value => setOption('dotLevelShift', value)}
        />
        <ComboBoxOption
          caption="Lined"
          propertyName="lineLevelShift"
          value={config.lineLevelShift}
          valueType="number"
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40, 80, 160, 240, 320]}
          onChange={value => setOption('lineLevelShift', value)}
        />
        <p>Horizontal Intervals Between Items in Row</p>
        <ComboBoxOption
          caption="Normal"
          propertyName="normalItemsInterval"
          value={config.normalItemsInterval}
          valueType="number"
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40]}
          onChange={value => setOption('normalItemsInterval', value)}
        />
        <ComboBoxOption
          caption="Dotted"
          propertyName="dotItemsInterval"
          value={config.dotItemsInterval}
          valueType="number"
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40]}
          onChange={value => setOption('dotItemsInterval', value)}
        />
        <ComboBoxOption
          caption="Lined"
          propertyName="lineItemsInterval"
          value={config.lineItemsInterval}
          valueType="number"
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40]}
          onChange={value => setOption('lineItemsInterval', value)}
        />
        <ComboBoxOption
          caption="Additional interval multiplier between cousins, it creates extra space between hierarchies"
          propertyName="cousinsIntervalMultiplier"
          value={config.cousinsIntervalMultiplier}
          valueType="number"
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40]}
          onChange={value => setOption('cousinsIntervalMultiplier', value)}
        />
      </div>
    );
  }
}

export default IntervalsOptionsPanel;
