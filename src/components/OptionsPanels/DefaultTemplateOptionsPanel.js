import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption
} from 'components';
import primitives from 'basicprimitives';

class DefaultTemplateOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Default Template</h4>
        <RadioGroupOption
          caption="Show user buttons"
          propertyName="hasButtons"
          value={config.hasButtons}
          valueType="number"
          items={primitives.common.Enabled}
          onChange={value => setOption('hasButtons', value)}
        />
        <RadioGroupOption
          caption="Show selection check box"
          propertyName="hasSelectorCheckbox"
          value={config.hasSelectorCheckbox}
          valueType="number"
          items={primitives.common.Enabled}
          onChange={value => setOption('hasSelectorCheckbox', value)}
        />
        <RadioGroupOption
          caption="Selection checkbox label"
          propertyName="selectCheckBoxLabel"
          value={config.selectCheckBoxLabel}
          valueType="string"
          items={['Selected', 'Included', 'Pinned', 'Any label']}
          onChange={value => setOption('selectCheckBoxLabel', value)}
        />
        <p>
          Default chart item template tries to select the best matching font color for current title background.
        </p>
        <ComboBoxOption
          caption="Title first font color"
          propertyName="itemTitleFirstFontColor"
          value={config.itemTitleFirstFontColor}
          valueType="string"
          items={primitives.common.Colors}
          onChange={value => setOption('itemTitleFirstFontColor', value)}
        />
        <ComboBoxOption
          caption="Title second font color"
          propertyName="itemTitleSecondFontColor"
          value={config.itemTitleSecondFontColor}
          valueType="string"
          items={primitives.common.Colors}
          onChange={value => setOption('itemTitleSecondFontColor', value)}
        />
        <ComboBoxOption
          caption="Buttons panel size"
          propertyName="buttonsPanelSize"
          value={config.buttonsPanelSize}
          valueType="number"
          items={[28, 56, 84]}
          onChange={value => setOption('buttonsPanelSize', value)}
        />
        <ComboBoxOption
          caption="Checkbox panel size"
          propertyName="checkBoxPanelSize"
          value={config.checkBoxPanelSize}
          valueType="number"
          items={[24, 48, 72]}
          onChange={value => setOption('checkBoxPanelSize', value)}
        />
      </div>
    );
  }
}

export default DefaultTemplateOptionsPanel;
