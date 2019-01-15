import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';

const TextFieldAdapter = ({
  caption, placeholder, input, meta
}) => (
  <FormGroup key={input.name} validationState={meta.touched && meta.invalid ? 'error' : null}>
    <ControlLabel>{caption}</ControlLabel>
    <FormControl type="text" value={input.value || ''} placeholder={placeholder} onChange={({ target }) => input.onChange(target.value)} />
    <FormControl.Feedback />
    <HelpBlock>{meta.touched ? meta.error : ''}</HelpBlock>
  </FormGroup>
);

TextFieldAdapter.propTypes = {
  caption: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default TextFieldAdapter;
