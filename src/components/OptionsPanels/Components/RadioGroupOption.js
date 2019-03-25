import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Radio,
  ControlLabel,
} from 'react-bootstrap';

class RadioGroupOption extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    items: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]))
    ]).isRequired, // eslint-disable-line react/forbid-prop-types
    propertyName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired,
    valueType: PropTypes.string.isRequired // eslint-disable-line react/forbid-prop-types
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !(_.isEqual(currentOptions, nextOptions));
  }

  getValue(value) {
    const { valueType } = this.props;
    switch (valueType) {
      case 'number':
        return parseInt(value, 10);
      case 'boolean':
        return (value === 'true' || value === true);
      default:
        return value;
    }
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
      onChange,
      value
    } = this.props;
    const properties = Array.isArray(items) ? items.reduce((result, item) => { result[item] = item; return result; }, {}) : items;
    return (
      <div>
        <FormGroup>
          <ControlLabel>{caption}</ControlLabel>
          {
            Object.keys(properties).map(property => (
              <Radio
                name={propertyName}
                key={property.toString()}
                value={properties[property]}
                checked={value === properties[property]}
                onChange={event => onChange(this.getValue(event.target.value))}
              >
                {property}
              </Radio>
            ))
          }
        </FormGroup>
      </div>
    );
  }
}

export default RadioGroupOption;
