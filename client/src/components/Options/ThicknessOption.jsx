import React, { Component } from 'react';
import { isEqual, startCase, camelCase } from 'lodash';
import PropTypes from 'prop-types';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import { Thickness } from 'basicprimitives';

class ThicknessOption extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.number).isRequired,
    onChange: PropTypes.func.isRequired,
    propertyName: PropTypes.string.isRequired,
    value: PropTypes.shape({
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired
    }).isRequired
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !isEqual(currentOptions, nextOptions);
  }

  onPropertyChange(propertyName, propertyValue) {
    const { onChange, value } = this.props;
    const result = new Thickness(value);
    result[propertyName] = propertyValue;
    onChange(result);
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
    const { caption, items, propertyName, value } = this.props;
    const names = ["left", "top", "right", "bottom"];
    return (
      <>
        <Tooltip title={propertyName}>
          <FormLabel className={'option-panel-item'} key={`${propertyName}-label`}>{caption}</FormLabel>
        </Tooltip>
        {names.map(name => {
          return <FormControl className={'option-panel-item'} key={`${propertyName}-${name}`}>
            <FormLabel key={`${propertyName}-${name}-label`} id={`${propertyName}-${name}-label`}>{startCase(camelCase(name))}</FormLabel>
            <Select
              labelId={`${propertyName}-${name}-label`}
              key={`${propertyName}-${name}`}
              id={`${propertyName}-${name}`}
              value={value[name]}
              onChange={event => this.onPropertyChange(name, parseInt(event.target.value, 10))}
            >
              {items.map(item => (
                <MenuItem key={`width${item}`} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        })}
      </>
    );
  }
}

export default ThicknessOption;
