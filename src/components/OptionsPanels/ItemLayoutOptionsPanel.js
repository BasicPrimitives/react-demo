import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioGroupOption } from 'components';
import primitives from 'basicprimitives';

class ItemLayoutOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Item Layout Properties</h4>
        <RadioGroupOption
          caption="Item Type"
          propertyName="itemType"
          value={config.itemType}
          valueType="number"
          items={{
            Regular: 0,
            Assistant: 1,
            SubAssistant: 4,
            SubAdviser: 5,
            Adviser: 2,
            GeneralPartner: 6,
            LimitedPartner: 7,
            AdviserPartner: 8
          }}
          onChange={value => setOption('itemType', value)}
        />
        <RadioGroupOption
          caption="Placement"
          propertyName="adviserPlacementType"
          value={config.adviserPlacementType}
          valueType="number"
          items={primitives.common.AdviserPlacementType}
          onChange={value => setOption('adviserPlacementType', value)}
        />
        <RadioGroupOption
          caption="Children Layout"
          propertyName="childrenPlacementType"
          value={config.childrenPlacementType}
          valueType="number"
          items={primitives.common.ChildrenPlacementType}
          onChange={value => setOption('childrenPlacementType', value)}
        />
      </div>
    );
  }
}

export default ItemLayoutOptionsPanel;
