import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

class ComboBoxOption extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    items: PropTypes.oneOfType([PropTypes.object,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]))]).isRequired, // eslint-disable-line react/forbid-prop-types
    propertyName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    valueType: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    isNullable: PropTypes.bool
  };

  static defaultProps = {
    value: null,
    isNullable: false
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !(_.isEqual(currentOptions, nextOptions));
  }

  getValue(value) {
    const { valueType } = this.props;
    let floatValue = null;
    let intValue = null;
    switch (valueType) {
      case PropTypes.number:
        floatValue = parseFloat(value, 10);
        intValue = parseInt(value, 10);
        return floatValue !== intValue ? floatValue : intValue;
      case PropTypes.bool:
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
      value,
      isNullable
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
      caption,
      items,
      propertyName,
      onChange,
      value,
      isNullable
    } = this.props;
    const properties = Array.isArray(items) ? items.reduce((result, item) => { result[item] = item; return result; }, {}) : items;
    return (
      <div>
        <FormGroup>
          <ControlLabel>{caption}</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder={propertyName}
            key={propertyName}
            value={value === null ? 'NULL' : value}
            onChange={event => onChange(this.getValue(event.target.value))}
          >
            {
              isNullable ? (
                <option key="NULL" value="NULL">
                  NULL
                </option>
              ) : ''
            }
            {
              Object.keys(properties).map(property => (
                <option key={property.toString()} value={properties[property]}>
                  {property}
                </option>
              ))
            }
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

export default ComboBoxOption;
