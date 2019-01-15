import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComboBoxOption, TextOption } from 'components';
import primitives from 'basicprimitives';
import { phone, email, required } from 'utils/validation';

class ItemOptionsPanel extends Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setOption: PropTypes.func.isRequired,
    config: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const images = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((agg, imageChar) => {
      agg[imageChar.toUpperCase()] = `/photos/${imageChar}.png`;
      return agg;
    }, {});
    const { config, setOption } = this.props;
    return (
      <div>
        <h4>Cursor Item Properties</h4>
        <TextOption
          caption="Title"
          placeholder="Item Title"
          propertyName="title"
          value={config.title}
          valueType={PropTypes.string}
          onValidate={value => required(value)}
          onChange={value => setOption('title', value)}
        />
        <TextOption
          caption="Description"
          placeholder="Description"
          propertyName="description"
          value={config.description}
          valueType={PropTypes.string}
          onValidate={value => required(value)}
          onChange={value => setOption('description', value)}
        />
        <TextOption
          caption="Group Title"
          placeholder="(group title is not visible)"
          propertyName="groupTitle"
          value={config.groupTitle}
          valueType={PropTypes.string}
          isNullable
          onChange={value => setOption('groupTitle', value)}
        />
        <TextOption
          caption="Phone"
          placeholder="(123) 123-12-12"
          propertyName="phone"
          value={config.phone}
          valueType={PropTypes.string}
          onValidate={value => phone(value)}
          onChange={value => setOption('phone', value)}
        />
        <TextOption
          caption="E-mail"
          placeholder="name@server.com"
          propertyName="email"
          value={config.email}
          valueType={PropTypes.string}
          onValidate={value => email(value)}
          onChange={value => setOption('email', value)}
        />
        <TextOption
          caption="Marker Label"
          placeholder={config.title}
          propertyName="label"
          value={config.label}
          valueType={PropTypes.string}
          isNullable
          onChange={value => setOption('label', value)}
        />
        <ComboBoxOption
          caption="Title Color"
          propertyName="itemTitleColor"
          value={config.itemTitleColor}
          valueType={PropTypes.string}
          items={primitives.common.Colors}
          onChange={value => setOption('itemTitleColor', value)}
        />
        <ComboBoxOption
          caption="Group Title Color"
          propertyName="groupTitleColor"
          value={config.groupTitleColor}
          valueType={PropTypes.string}
          items={primitives.common.Colors}
          onChange={value => setOption('groupTitleColor', value)}
        />
        <ComboBoxOption caption="Image" propertyName="image" value={config.image} valueType={PropTypes.string} items={images} onChange={value => setOption('image', value)} />
        <ComboBoxOption
          caption="Marker Shape"
          propertyName="minimizedItemShapeType"
          value={config.minimizedItemShapeType}
          valueType={PropTypes.number}
          items={primitives.common.ShapeType}
          onChange={value => setOption('minimizedItemShapeType', value)}
        />
      </div>
    );
  }
}

export default ItemOptionsPanel;
