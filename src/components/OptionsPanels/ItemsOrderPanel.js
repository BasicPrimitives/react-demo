import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => (
  <ul>
    {items.map((value, index) => (
      <SortableItem key={`item-${value.id}`} index={index} value={value.title} />
    ))}
  </ul>
));

class ItemsOrderPanel extends Component {
  static propTypes = {
    setItemsOrder: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired // eslint-disable-line react/forbid-prop-types
  };

  constructor(props, context) {
    super(props, context);

    this.onSortEnd = this.onSortEnd.bind(this);

    const { items } = props;

    this.state = {
      items
    };
  }

  componentWillReceiveProps({ items: newItems }) {
    const { items } = this.state;
    if (!_.isEqual(newItems, items)) {
      this.setState({
        items: newItems
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // eslint-disable-line no-unused-vars
    const { items } = this.state;
    const { items: newItems } = nextState;
    return !_.isEqual(items, newItems);
  }

  onSortEnd({ oldIndex, newIndex }) {
    const { items } = this.state;
    const { setItemsOrder } = this.props;
    const newItems = arrayMove(items, oldIndex, newIndex);
    this.setState({
      items: newItems
    });
    setItemsOrder(newItems);
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <h4>Drag to order children</h4>
        <SortableList items={items} onSortEnd={this.onSortEnd} />
      </>
    );
  }
}

export default ItemsOrderPanel;
