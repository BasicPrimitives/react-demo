import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Radio, ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';

function getValue(value, valueType) {
  let floatValue = null;
  let intValue = null;
  switch (valueType) {
    case PropTypes.number:
      floatValue = parseFloat(value, 10);
      intValue = parseInt(value, 10);
      return floatValue !== intValue ? floatValue : intValue;
    case PropTypes.bool:
      return value === 'true' || value === true;
    default:
      return value;
  }
}

function RadioGroupFieldAdapter({
  valueType, items, caption, input, meta
}) {
  const properties = Array.isArray(items)
    ? items.reduce((result, item) => {
      result[item] = item;
      return result;
    }, {})
    : items;
  return (
    <FormGroup validationState={meta.touched && meta.invalid ? 'error' : null} key={input.name}>
      <ControlLabel>{caption}</ControlLabel>
      {Object.keys(properties).map(property => (
        <Radio
          name={input.name}
          key={property.toString()}
          value={properties[property]}
          checked={input.value === properties[property]}
          onChange={({ target }) => input.onChange(getValue(target.value, valueType))}
        >
          {property}
        </Radio>
      ))}
      <FormControl.Feedback />
      <HelpBlock>{meta.touched ? meta.error : ''}</HelpBlock>
    </FormGroup>
  );
}

RadioGroupFieldAdapter.propTypes = {
  caption: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  valueType: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ]))
  ]).isRequired // eslint-disable-line react/forbid-prop-types
};

export default RadioGroupFieldAdapter;
