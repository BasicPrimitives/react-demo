import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';

function getValue(value, valueType, isNullable) {
  let floatValue = null;
  let intValue = null;
  switch (valueType) {
    case 'number':
      floatValue = parseFloat(value, 10);
      intValue = parseInt(value, 10);
      return floatValue !== intValue ? floatValue : intValue;
    case 'boolean':
      return value === 'true' || value === true;
    default:
      return isNullable && value === 'NULL' ? null : value;
  }
}

function ComboBoxFieldAdapter({
  isNullable, valueType, items, caption, placeholder, input, meta
}) {
  const properties = Array.isArray(items)
    ? items.reduce((result, item) => {
      result[item] = item;
      return result;
    }, {})
    : items;
  return (
    <FormGroup validationState={meta.touched && meta.invalid ? 'error' : null}>
      <ControlLabel>{caption}</ControlLabel>
      <FormControl
        componentClass="select"
        placeholder={placeholder}
        key={input.name}
        value={input.value === null ? 'NULL' : input.value}
        onChange={({ target }) => input.onChange(getValue(target.value, valueType, isNullable))}
      >
        {isNullable ? (
          <option key="NULL" value="NULL">
            NULL
          </option>
        ) : (
          ''
        )}
        {Object.keys(properties).map(property => (
          <option key={property.toString()} value={properties[property]}>
            {property}
          </option>
        ))}
      </FormControl>
      <FormControl.Feedback />
      <HelpBlock>{meta.touched ? meta.error : ''}</HelpBlock>
    </FormGroup>
  );
}

ComboBoxFieldAdapter.propTypes = {
  caption: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  valueType: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
  isNullable: PropTypes.bool,
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ]))
  ]).isRequired // eslint-disable-line react/forbid-prop-types
};

ComboBoxFieldAdapter.defaultProps = {
  isNullable: false
};

export default ComboBoxFieldAdapter;
