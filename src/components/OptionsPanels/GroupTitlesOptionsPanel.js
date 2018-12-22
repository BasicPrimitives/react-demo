import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption
} from 'components';
import primitives from 'basicprimitives';

class GroupTitlesOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Group Title Style</h4>
        <RadioGroupOption
          caption="Placement"
          propertyName="groupTitlePlacementType"
          value={config.groupTitlePlacementType}
          valueType={PropTypes.number}
          items={primitives.common.AdviserPlacementType}
          onChange={value => setOption('groupTitlePlacementType', value)}
        />
        <ComboBoxOption
          caption="Group title panel width"
          propertyName="groupTitlePanelSize"
          value={config.groupTitlePanelSize}
          valueType={PropTypes.number}
          items={[24, 48, 72]}
          onChange={value => setOption('groupTitlePanelSize', value)}
        />
        <RadioGroupOption
          caption="Orientation"
          propertyName="groupTitleOrientation"
          value={config.groupTitleOrientation}
          valueType={PropTypes.number}
          items={primitives.text.TextOrientationType}
          onChange={value => setOption('groupTitleOrientation', value)}
        />
        <RadioGroupOption
          caption="Vertical Alignment"
          propertyName="groupTitleVerticalAlignment"
          value={config.groupTitleVerticalAlignment}
          valueType={PropTypes.number}
          items={primitives.common.VerticalAlignmentType}
          onChange={value => setOption('groupTitleVerticalAlignment', value)}
        />
        <ComboBoxOption
          caption="Horizontal Alignment"
          propertyName="groupTitleHorizontalAlignment"
          value={config.groupTitleHorizontalAlignment}
          valueType={PropTypes.number}
          items={primitives.common.HorizontalAlignmentType}
          onChange={value => setOption('groupTitleHorizontalAlignment', value)}
        />
        <ComboBoxOption
          caption="Background Color"
          propertyName="groupTitleColor"
          value={config.groupTitleColor}
          valueType={PropTypes.number}
          items={primitives.common.Colors}
          onChange={value => setOption('groupTitleColor', value)}
        />
        <p>
          For group title color, see title first and second font colors in default template options.
        </p>
        <ComboBoxOption
          caption="Font size"
          propertyName="groupTitleFontSize"
          value={config.groupTitleFontSize}
          valueType={PropTypes.string}
          items={['8px', '10px', '12px', '14px', '16px', '18px', '20px']}
          onChange={value => setOption('groupTitleFontSize', value)}
        />
        <ComboBoxOption
          caption="Font Weight"
          propertyName="groupTitleFontWeight"
          value={config.groupTitleFontWeight}
          valueType={PropTypes.string}
          items={['normal', 'bold']}
          onChange={value => setOption('groupTitleFontWeight', value)}
        />
        <ComboBoxOption
          caption="Font Style"
          propertyName="groupTitleFontStyle"
          value={config.groupTitleFontStyle}
          valueType={PropTypes.string}
          items={['normal', 'italic']}
          onChange={value => setOption('groupTitleFontStyle', value)}
        />
        <ComboBoxOption
          caption="Font Style"
          propertyName="groupTitleFontFamily"
          value={config.groupTitleFontFamily}
          valueType={PropTypes.string}
          items={['Arial', 'Verdana', 'Times New Roman', 'Serif', 'Courier']}
          onChange={value => setOption('groupTitleFontFamily', value)}
        />
      </div>
    );
  }
}

export default GroupTitlesOptionsPanel;
