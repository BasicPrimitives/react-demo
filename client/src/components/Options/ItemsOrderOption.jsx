import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import ListItemText from '@mui/material/ListItemText';

const SortableItem = SortableElement(({ value }) => <ListItem button style={{zIndex: 10000}}>
  <ListItemIcon>
    <PersonIcon />
  </ListItemIcon>
  <ListItemText primary={value} />
</ListItem>
);

const SortableList = SortableContainer(({ items }) => (
  <List aria-label="children-list">
    {items && items.map((value, index) => (
      <SortableItem key={`item-${value.id}`} index={index} value={value.title} />
    ))}
  </List>
));

class ItemsOrderOption extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    propertyName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.any.isRequired) // eslint-disable-line react/forbid-prop-types
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
