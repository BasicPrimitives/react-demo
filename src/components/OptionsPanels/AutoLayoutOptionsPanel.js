import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption
} from 'components';
import primitives from 'basicprimitives';

class AutoLayoutOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Auto Layout</h4>
        <p>Page Fit Mode defines rule of fitting chart into available screen space. Set it to None if you want to disable it.</p>
        <RadioGroupOption
          caption="Page Fit Mode"
          propertyName="pageFitMode"
          value={config.pageFitMode}
          valueType={PropTypes.number}
          items={{
            None: 0,
            PageWidth: 1,
            PageHeight: 2,
            FitToPage: 3,
            SelectionOnly: 6
          }}
          onChange={value => setOption('pageFitMode', value)}
        />
        <RadioGroupOption
          caption="Orientation Type"
          propertyName="orientationType"
          value={config.orientationType}
          valueType={PropTypes.number}
          items={primitives.common.OrientationType}
          onChange={value => setOption('orientationType', value)}
        />
        <RadioGroupOption
          caption="Items Vertical Alignment"
          propertyName="verticalAlignment"
          value={config.verticalAlignment}
          valueType={PropTypes.number}
          items={primitives.common.VerticalAlignmentType}
          onChange={value => setOption('verticalAlignment', value)}
        />
        <RadioGroupOption
          caption="Items Horizontal Alignment"
          propertyName="horizontalAlignment"
          value={config.horizontalAlignment}
          valueType={PropTypes.number}
          items={primitives.common.HorizontalAlignmentType}
          onChange={value => setOption('horizontalAlignment', value)}
        />
        <RadioGroupOption
          caption="Children placement"
          propertyName="childrenPlacementType"
          value={config.childrenPlacementType}
          valueType={PropTypes.number}
          items={primitives.common.ChildrenPlacementType}
          onChange={value => setOption('childrenPlacementType', value)}
        />
        <RadioGroupOption
          caption="Leaves placement defines layout shape for items having no children"
          propertyName="leavesPlacementType"
          value={config.leavesPlacementType}
          valueType={PropTypes.number}
          items={primitives.common.ChildrenPlacementType}
          onChange={value => setOption('leavesPlacementType', value)}
        />
        <RadioGroupOption
          caption="Minimal nodes visibility"
          propertyName="minimalVisibility"
          value={config.minimalVisibility}
          valueType={PropTypes.number}
          items={primitives.common.Visibility}
          onChange={value => setOption('minimalVisibility', value)}
        />
        <ComboBoxOption
          caption="Maximum columns number in matrix children layout"
          propertyName="maximumColumnsInMatrix"
          value={config.maximumColumnsInMatrix}
          isNullable
          valueType={PropTypes.number}
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]}
          onChange={value => setOption('maximumColumnsInMatrix', value)}
        />
        <RadioGroupOption
          caption="Selection Path Mode sets visibility of items between cursor item and root"
          propertyName="selectionPathMode"
          value={config.selectionPathMode}
          valueType={PropTypes.number}
          items={primitives.common.SelectionPathMode}
          onChange={value => setOption('selectionPathMode', value)}
        />
      </div>
    );
  }
}

export default AutoLayoutOptionsPanel;
