import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroupOption,
  ComboBoxOption,
} from 'components';
import primitives from 'basicprimitives';

class FamilyOptionsPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Family Diagram Specific</h4>
        <RadioGroupOption
          caption="Neighbours Selection Modes"
          propertyName="neighboursSelectionMode"
          value={config.neighboursSelectionMode}
          valueType={PropTypes.number}
          items={primitives.common.NeighboursSelectionMode}
          onChange={value => setOption('neighboursSelectionMode', value)}
        />
        <p>
          Group by option defines node placement in layout close to its parents or
          children when node is linked across multiple levels in hierarchy. See "alignment" data set.
        </p>
        <RadioGroupOption
          caption="Group By"
          propertyName="groupByType"
          value={config.groupByType}
          valueType={PropTypes.number}
          items={{ Children: 2, Parents: 1 }}
          onChange={value => setOption('groupByType', value)}
        />
        <p>
          The following option keeps items at the same levels after connections bundling.
        </p>
        <RadioGroupOption
          caption="Align by levels"
          propertyName="alignBylevels"
          value={config.alignBylevels}
          valueType={PropTypes.bool}
          items={[true, false]}
          onChange={value => setOption('alignBylevels', value)}
        />
        <p>
          The following option hides direct connectors to grand parents. It helps reduce diagrams connectors
          layout complexity. This option should be used together with dynamic highlighting of
          connectors to grandparents via immidiate parents, so information is not lost.
        </p>
        <RadioGroupOption
          caption="Hides grand parents connectors"
          propertyName="hideGrandParentsConnectors"
          value={config.hideGrandParentsConnectors}
          valueType={PropTypes.bool}
          items={[true, false]}
          onChange={value => setOption('hideGrandParentsConnectors', value)}
        />
        <p>
          The following option enables natrix layout in family diagram. Nodes having the same set
          of parents and children are grouped into square shaped matrix in order to keep them visualy together.
        </p>
        <RadioGroupOption
          caption="Enable Matrix Layout"
          propertyName="enableMatrixLayout"
          value={config.enableMatrixLayout}
          valueType={PropTypes.bool}
          items={[true, false]}
          onChange={value => setOption('enableMatrixLayout', value)}
        />
        <ComboBoxOption
          caption="Minimum number of nodes needed in order to be formed into matrix layout"
          propertyName="minimumMatrixSize"
          value={config.minimumMatrixSize}
          isNullable
          valueType={PropTypes.number}
          items={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={value => setOption('minimumMatrixSize', value)}
        />
        <ComboBoxOption
          caption="Maximum columns number in matrix nodes layout"
          propertyName="maximumColumnsInMatrix"
          value={config.maximumColumnsInMatrix}
          isNullable
          valueType={PropTypes.number}
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]}
          onChange={value => setOption('maximumColumnsInMatrix', value)}
        />
      </div>
    );
  }
}

export default FamilyOptionsPanel;
