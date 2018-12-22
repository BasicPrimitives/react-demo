import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
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
      bottom: PropTypes.number.isRequired,
    }).isRequired
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !(_.isEqual(currentOptions, nextOptions));
  }

  onPaddingChange(padding) {
    const { onChange } = this.props;
    onChange(new primitives.common.Thickness(padding, padding, padding, padding));
  }

  getUsedOptions(props) { // eslint-disable-line class-methods-use-this
    const {
      caption,
      items,
      propertyName,
      value
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
      caption,
      items,
      propertyName,
      value
    } = this.props;
    return (
      <div>
        <ControlLabel>{caption}</ControlLabel>
        <p>Padding</p>
        <FormControl
          componentClass="select"
          placeholder={propertyName}
          key={propertyName}
          value={value.left}
          onChange={event => this.onPaddingChange(parseInt(event.target.value, 10))}
        >
          {
            items.map(item => (
              <option name={item} key={item} value={item}>
                {item}
              </option>
            ))
          }
        </FormControl>
      </div>
    );
  }
}

export default ThicknessOption;
