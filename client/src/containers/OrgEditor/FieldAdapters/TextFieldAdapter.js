import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
});

const TextFieldAdapter = ({
  caption, placeholder, input, meta
}) => {
  const styles = useStyles();  
  return (
  <FormControl className={styles.root} key={input.name} error={meta.touched && meta.invalid}>
    <InputLabel htmlFor="component-error">{caption}</InputLabel>
    <Input
      id="component-error"
      value={input.value || ''}
      onChange={({ target }) => input.onChange(target.value)}
      aria-describedby="component-error-text"
      placeholder={placeholder} 
    />
    <FormHelperText id="component-error-text">{meta.touched ? meta.error : ''}</FormHelperText>
  </FormControl>
)};

TextFieldAdapter.propTypes = {
  caption: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default TextFieldAdapter;
