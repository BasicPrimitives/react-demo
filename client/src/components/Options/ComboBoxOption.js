import React, { Component } from 'react';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

class ComboBoxOption extends Component {
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
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    valueType: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
    isNullable: PropTypes.bool
  };

  static defaultProps = {
    value: null,
    isNullable: false
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !isEqual(currentOptions, nextOptions);
  }

  getValue(value) {
    const { valueType, isNullable } = this.props;
    let floatValue = null;
    let intValue = null;
    if(isNullable && value === "NULL") {
      return null;
    } else {
      switch (valueType) {
        case 'number':
          floatValue = parseFloat(value, 10);
          intValue = parseInt(value, 10);
          return floatValue !== intValue ? floatValue : intValue;
        case 'boolean':
          return value === 'true' || value === true;
        default:
          return value;
      }
    }
  }

  getUsedOptions(props) { // eslint-disable-line class-methods-use-this
    const {
      caption, items, propertyName, value, isNullable
    } = props;
    return {
      caption,
      items,
      propertyName,
      value,
      isNullable
    };
  }

  render() {
    const {
      caption, items, propertyName, onChange, value, isNullable
    } = this.props;
    const properties = Array.isArray(items)
      ? items.reduce((result, item) => {
        result[item] = item;
        return result;
      }, {})
      : items;
    if(!Object.keys(properties).some( property => properties[property] === value)) {
      properties[value] = value;
    }
    return (
      <FormControl className={'option-panel-item'}>
        <Tooltip key={`${propertyName}-label`} title={propertyName}>
          <FormLabel id={`${propertyName}-label`}>{caption}</FormLabel>
        </Tooltip>
        <Select
          labelId={`${propertyName}-label`}
          id={propertyName}
          value={value === null ? 'NULL' : value}
          onChange={event => onChange(this.getValue(event.target.value))}
        >
          {isNullable ? (
            <MenuItem key="NULL" value="NULL">
              NULL
            </MenuItem>
          ) : ('')}
          {Object.keys(properties).map(property => (
            <MenuItem key={property} value={properties[property]}>
              {property}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default ComboBoxOption;
