import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import primitives from 'basicprimitives';

class SizeOption extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    widths: PropTypes.arrayOf(PropTypes.number).isRequired,
    heights: PropTypes.arrayOf(PropTypes.number).isRequired,
    onChange: PropTypes.func.isRequired,
    propertyName: PropTypes.string.isRequired,
    value: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !(_.isEqual(currentOptions, nextOptions));
  }

  onWidthChange(width) {
    const { onChange, value } = this.props;
    onChange(new primitives.common.Size(width, value.height));
  }

  onHeightChange(height) {
    const { onChange, value } = this.props;
    onChange(new primitives.common.Size(value.width, height));
  }

  getUsedOptions(props) { // eslint-disable-line class-methods-use-this
    const {
      caption,
      widths,
      heights,
      propertyName,
      value
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
    const {
      caption,
      widths,
      heights,
      propertyName,
      value
    } = this.props;
    return (
      <div>
        <ControlLabel>{caption}</ControlLabel>
        <p>Width</p>
        <FormControl
          componentClass="select"
          placeholder={`width${propertyName}`}
          key={`width${propertyName}`}
          value={value.width}
          onChange={event => this.onWidthChange(parseInt(event.target.value, 10))}
        >
          {
            widths.map(width => (
              <option name={`width${width}`} key={`width${width}`} value={width}>
                {width}
              </option>
            ))
          }
        </FormControl>
        <p>Height</p>
        <FormControl
          componentClass="select"
          placeholder={`height${propertyName}`}
          key={`height${propertyName}`}
          value={value.height}
          onChange={event => this.onHeightChange(parseInt(event.target.value, 10))}
        >
          {
            heights.map(height => (
              <option name={`height${height}`} key={`width${height}`} value={height}>
                {height}
              </option>
            ))
          }
        </FormControl>

      </div>
    );
  }
}

export default SizeOption;
