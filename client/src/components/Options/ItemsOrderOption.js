import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';

const SortableItem = SortableElement(({ value }) => <ListItem button style={{zIndex: 10000}}>
  <ListItemIcon>
    <PersonIcon />
  </ListItemIcon>
  <ListItemText primary={value} />
</ListItem>
);

const SortableList = SortableContainer(({ items }) => (
  <List aria-label="children-list">
    {items.map((value, index) => (
      <SortableItem key={`item-${value.id}`} index={index} value={value.title} />
    ))}
  </List>
));

class ItemsOrderOption extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    propertyName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired // eslint-disable-line react/forbid-prop-types
  };

  constructor(props) {
    super(props);

    this.onSortEnd = this.onSortEnd.bind(this);

    const { items } = props;

    this.state = {
      items
    };
  }

  componentWillReceiveProps({ items: newItems }) {
    const { items } = this.state;
    if (!isEqual(newItems, items)) {
      this.setState({
        items: newItems
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // eslint-disable-line no-unused-vars
    const { items } = this.state;
    const { items: newItems } = nextState;
    return !isEqual(items, newItems);
  }

  onSortEnd({ oldIndex, newIndex }) {
    const { items } = this.state;
    const { onChange } = this.props;
    const newItems = arrayMove(items, oldIndex, newIndex);
    this.setState({
      items: newItems
    });
    onChange(newItems);
  }

  render() {
    const { items, propertyName } = this.state;
    return (
      <SortableList key={propertyName} items={items} onSortEnd={this.onSortEnd} />
    );
  }
}

export default ItemsOrderOption;
