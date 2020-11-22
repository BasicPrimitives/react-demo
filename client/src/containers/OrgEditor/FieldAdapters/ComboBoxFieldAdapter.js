import React from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

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
      return (isNullable && value === 'NULL') ? null : value;
  }
}

function ComboBoxFieldAdapter({
  isNullable, valueType, items, caption, input, meta
}) {
  const properties = Array.isArray(items)
    ? items.reduce((result, item) => {
      result[item] = item;
      return result;
    }, {})
    : items;
  return (
    <FormControl key={input.name} style={{minWidth: "250px"}} error={meta.touched && meta.invalid}>
      <Tooltip key={`${input.name}-label`} title={input.name}>
        <FormLabel id={`${input.name}-label`}>{caption}</FormLabel>
      </Tooltip>
      <Select
        labelId={`${input.name}-label`}
        id={input.name}
        value={(input.value === '' || input.value === null || input.value === undefined)  ? 'NULL' : input.value}
        onChange={({ target }) => input.onChange(getValue(target.value, valueType, isNullable))}
      >
        {isNullable ? (
          <MenuItem key="NULL" value="NULL">
            NULL
          </MenuItem>
        ) : ('')}
        {Object.keys(properties).map(property => (
          <MenuItem key={property.toString()} value={properties[property]}>
            {property}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{meta.touched ? meta.error : ''}</FormHelperText>
    </FormControl>
  );
}

ComboBoxFieldAdapter.propTypes = {
  caption: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  valueType: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
  isNullable: PropTypes.bool,
  items: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line react/forbid-prop-types
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ]))
  ]).isRequired
};

ComboBoxFieldAdapter.defaultProps = {
  isNullable: false
};

export default ComboBoxFieldAdapter;
