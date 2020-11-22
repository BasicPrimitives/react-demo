import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import primitives from 'basicprimitives';

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

    return !_.isEqual(currentOptions, nextOptions);
  }

  onPropertyChange(propertyName, propertyValue) {
    const { onChange, value } = this.props;
    const result = new primitives.common.Thickness(value);
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
            <FormLabel key={`${propertyName}-${name}-label`} id={`${propertyName}-${name}-label`}>{_.startCase(_.camelCase(name))}</FormLabel>
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
