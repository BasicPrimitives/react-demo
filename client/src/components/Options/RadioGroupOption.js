import React, { Component } from 'react';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Tooltip from '@material-ui/core/Tooltip';

class RadioGroupOption extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    items: PropTypes.oneOfType([
      PropTypes.object, // eslint-disable-line react/forbid-prop-types
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
      ]))
    ]).isRequired,
    propertyName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired,
    valueType: PropTypes.string.isRequired // eslint-disable-line react/forbid-prop-types
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !isEqual(currentOptions, nextOptions);
  }

  getValue(value) {
    const { valueType } = this.props;
    switch (valueType) {
      case 'number':
        return parseInt(value, 10);
      case 'boolean':
        return value === 'true' || value === true;
      default:
        return value;
    }
  }

  getUsedOptions(props) { // eslint-disable-line class-methods-use-this
    const {
      caption, items, propertyName, value
    } = props;
    return {
      caption,
      items,
      propertyName,
      value
    };
  }

  render() {
    const {
      caption, items, propertyName, onChange, value
    } = this.props;
    const properties = Array.isArray(items)
      ? items.reduce((result, item) => {
        result[item] = item;
        return result;
      }, {})
      : items;
    return (
      <FormControl className={'option-panel-item'} component="fieldset">
        <Tooltip key={`${propertyName}-label`} title={propertyName}>
          <FormLabel component="legend">{caption}</FormLabel>
        </Tooltip>
        <RadioGroup aria-label={caption} name={propertyName} value={value} onChange={event => onChange(this.getValue(event.target.value))}>
        {Object.keys(properties).map(property => (
          <FormControlLabel
            control={<Radio />} 
            label={property}
            key={properties[property]}
            value={properties[property]}
          />
        ))}
        </RadioGroup>
      </FormControl>
    );
  }
}

export default RadioGroupOption;
