import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';

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
    const { caption, propertyName, onChange, value } = this.props;
    return (
      <Tooltip className={'option-panel-item'} key={`${propertyName}`} title={propertyName}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value}
              onChange={() => onChange(!value)}
              name={propertyName}
              color="primary"
            />
          }
          label={caption}
        />
      </Tooltip>
    );
  }
}

export default CheckboxOption;
