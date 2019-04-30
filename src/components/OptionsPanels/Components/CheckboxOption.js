import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

class CheckboxOption extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    caption: PropTypes.string.isRequired,
    propertyName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    const nextOptions = this.getUsedOptions(nextProps);
    const currentOptions = this.getUsedOptions(this.props);

    return !_.isEqual(currentOptions, nextOptions);
  }

  getUsedOptions(props) { // eslint-disable-line class-methods-use-this
    const { caption, propertyName, value } = props;
    return {
      caption,
      propertyName,
      value
    };
  }

  render() {
    const {
      caption, propertyName, onChange, value
    } = this.props;
    return (
      <div>
        <Checkbox key={propertyName} checked={value} onChange={() => onChange(!value)}>
          {caption}
        </Checkbox>
      </div>
    );
  }
}

export default CheckboxOption;
