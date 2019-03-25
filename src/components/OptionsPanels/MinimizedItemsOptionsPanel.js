import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption,
  SizeOption,
  ThicknessOption
} from 'components';
import primitives from 'basicprimitives';

class MinimizedItemsOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Minimized Item (Dot, Marker)</h4>
        <p>
          Minimized item options are defined per item template. So if you need to show individual
          markers per item, you have to define template for every marker type and assign
          it to items. Template is some sort of named property bag.
        </p>
        <p>
          By default marker has color of itemTitleColor property, download demos and check
          samples source data. If item has no title color set, then be sure that you set border
          line width and color for markers having no fill, othewise you are not going to see them.
        </p>
        <SizeOption
          caption="Marker size"
          propertyName="minimizedItemSize"
          value={config.minimizedItemSize}
          widths={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40]}
          heights={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30, 40]}
          onChange={value => setOption('minimizedItemSize', value)}
        />
        <ComboBoxOption
          caption="Corner Radius"
          propertyName="minimizedItemCornerRadius"
          value={config.minimizedItemCornerRadius}
          isNullable
          valueType="number"
          items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]}
          onChange={value => setOption('minimizedItemCornerRadius', value)}
        />
        <ThicknessOption
          caption="Highlight border padding around marker"
          propertyName="highlightPadding"
          value={config.highlightPadding}
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={value => setOption('highlightPadding', value)}
        />
        <RadioGroupOption
          caption="Marker Shape"
          propertyName="minimizedItemShapeType"
          value={config.minimizedItemShapeType}
          valueType="number"
          items={primitives.common.ShapeType}
          onChange={value => setOption('minimizedItemShapeType', value)}
        />
        <ComboBoxOption
          caption="Marker border line width"
          propertyName="minimizedItemLineWidth"
          value={config.minimizedItemLineWidth}
          valueType="number"
          items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={value => setOption('minimizedItemLineWidth', value)}
        />
        <RadioGroupOption
          caption="Marker border line type"
          propertyName="minimizedItemLineType"
          value={config.minimizedItemLineType}
          valueType="number"
          items={primitives.common.LineType}
          onChange={value => setOption('minimizedItemLineType', value)}
        />
        <p>
          Following Border and Fill colors properties work only for items having
          no title color property set. See Parners &amp; Annotations Demo to try them.
        </p>
        <ComboBoxOption
          caption="Marker border line color"
          propertyName="minimizedItemBorderColor"
          value={config.minimizedItemBorderColor}
          isNullable
          valueType="string"
          items={primitives.common.Colors}
          onChange={value => setOption('minimizedItemBorderColor', value)}
        />
        <ComboBoxOption
          caption="Marker fill color"
          propertyName="minimizedItemFillColor"
          value={config.minimizedItemFillColor}
          isNullable
          valueType="string"
          items={primitives.common.Colors}
          onChange={value => setOption('minimizedItemFillColor', value)}
        />
        <ComboBoxOption
          caption="Opacity"
          propertyName="minimizedItemOpacity"
          value={config.minimizedItemOpacity}
          valueType="string"
          items={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}
          onChange={value => setOption('minimizedItemOpacity', value)}
        />
      </div>
    );
  }
}

export default MinimizedItemsOptionsPanel;
