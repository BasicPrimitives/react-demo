import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Tooltip from '@mui/material/Tooltip';

function getValue(value, valueType) {
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
    <FormControl style={{minWidth: "250px"}} component="fieldset" error={meta.touched && meta.invalid}>
      <Tooltip key={`${input.name}-label`} title={input.name}>
        <FormLabel component="legend">{caption}</FormLabel>
      </Tooltip>
      <RadioGroup key={input.name} aria-label={caption} name={input.name} value={input.value} onChange={({ target }) => input.onChange(getValue(target.value, valueType))}>
      {Object.keys(properties).map(property => (
        <FormControlLabel
          control={<Radio />} 
          label={property}
          key={properties[property]}
          value={properties[property]}
        />
      ))}
      </RadioGroup>
      <FormHelperText>{meta.touched ? meta.error : ''}</FormHelperText>
    </FormControl>
  );
}

RadioGroupFieldAdapter.propTypes = {
  caption: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  valueType: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
  items: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line react/forbid-prop-types
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ]))
  ]).isRequired
};

export default RadioGroupFieldAdapter;
