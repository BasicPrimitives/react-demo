import React, { Component } from 'react';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class TextOption extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    caption: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    propertyName: PropTypes.string.isRequired,
    onValidate: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    valueType: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    isNullable: PropTypes.bool,
    debounce: PropTypes.number
  };

  static defaultProps = {
    value: '',
    isNullable: false,
    onValidate: () => null,
    debounce: 1000
  };

  constructor(props) {
    super(props);

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onTimer = this.onTimer.bind(this);

    const { value, onValidate } = props;
    const message = onValidate(this.getValue(value)) || null;

    this.state = {
      value,
      message
    };
  }

  componentWillReceiveProps({ value: newValue }) {
    const { value } = this.state;
    if (value !== newValue) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.setState({
        value: newValue,
        message: ''
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);
    const { value } = this.state;
    const { newValue } = nextState;
    return !(isEqual(currentOptions, nextOptions) && value === newValue);
  }

  onTimer() {
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(this.getValue(value));
  }

  onHandleChange(e) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    const { value } = e.target;
    const { debounce, onValidate } = this.props;
    const message = onValidate(this.getValue(value)) || null;
    this.setState({
      value,
      message
    });
    if (message == null) {
      this.timeout = setTimeout(this.onTimer, debounce);
    }
  }

  getUsedOptions(props) { // eslint-disable-line class-methods-use-this
    const {
      caption, propertyName, placeholder, valueType, isNullable
    } = props;
    return {
      caption,
      propertyName,
      placeholder,
      valueType,
      isNullable
    };
  }

  getValue(value) {
    const { valueType, isNullable } = this.props;
    let floatValue = null;
    let intValue = null;
    switch (valueType) {
      case 'number':
        floatValue = parseFloat(value, 10);
        intValue = parseInt(value, 10);
        return floatValue !== intValue ? floatValue : intValue;
      default:
        if (value === '' || value === null) {
          if (isNullable) {
            return null;
          }
          return '';
        }
        return value;
    }
  }

  static getValidationState(value) {
    const isEmpty = value === undefined || value === null || value === '';
    if (!isEmpty) {
      return true;
    }
    return false;
  }

  render() {
    const { caption, propertyName, placeholder, isNullable } = this.props;
    const { value, message } = this.state;
    return (
      <form className={'option-panel-item'} noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
        <TextField 
          required={!isNullable}
          key={propertyName}
          label={caption}
          value={value || ''}
          helperText={message}
          placeholder={placeholder}
          error={TextOption.getValidationState(message)}
          onChange={this.onHandleChange} />
      </form>
    );
  }
}

export default TextOption;
