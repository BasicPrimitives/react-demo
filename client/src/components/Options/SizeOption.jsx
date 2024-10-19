import React, { Component } from 'react';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Size } from 'basicprimitives';
import Tooltip from '@mui/material/Tooltip';

class SizeOption extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    widths: PropTypes.arrayOf(PropTypes.number).isRequired,
    heights: PropTypes.arrayOf(PropTypes.number).isRequired,
    onChange: PropTypes.func.isRequired,
    propertyName: PropTypes.string.isRequired,
    value: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !isEqual(currentOptions, nextOptions);
  }

  onWidthChange(width) {
    const { onChange, value } = this.props;
    onChange(new Size(width, value.height));
  }

  onHeightChange(height) {
    const { onChange, value } = this.props;
    onChange(new Size(value.width, height));
  }

  getUsedOptions(props) { // eslint-disable-line class-methods-use-this
    const {
      caption, widths, heights, propertyName, value
    } = props;
    return {
      caption,
      widths,
      heights,
      propertyName,
      value
    };
  }

  render() {
    const { caption, widths, heights, propertyName, value } = this.props;
    return (
      <>
        <FormControl>
          <Tooltip className={'option-panel-item'} key={`${propertyName}-label`} title={propertyName}>
            <FormLabel>{caption}</FormLabel>
          </Tooltip>
          <FormLabel className={'option-panel-item'} key={`${propertyName}-width-label`} id={`${propertyName}-width-label`}>Width</FormLabel>
          <Select
            labelId={`${propertyName}-width-label`}
            key={`${propertyName}-width`}
            id={`${propertyName}-width`}
            value={value.width}
            onChange={event => this.onWidthChange(parseInt(event.target.value, 10))}
          >
            {widths.map(width => (
              <MenuItem key={`width${width}`} value={width}>
                {width}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel className={'option-panel-item'} key={`${propertyName}-height-label`} id={`${propertyName}-height-label`}>Height</FormLabel>
          <Select
            labelId={`${propertyName}-height-label`}
            key={`${propertyName}-height`}
            id={`${propertyName}-height`}
            value={value.height}
            onChange={event => this.onHeightChange(parseInt(event.target.value, 10))}
          >
            {heights.map(height => (
              <MenuItem key={`width${height}`} value={height}>
                {height}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  }
}

export default SizeOption;
