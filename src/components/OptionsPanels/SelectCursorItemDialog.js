import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OrgDiagram } from 'basicprimitivesreact';
import { Button, Modal } from 'react-bootstrap';
import primitives from 'basicprimitives';

class SelectCursorItemDialog extends Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onCursorItem: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    itemsToReparent: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), // eslint-disable-line react/no-unused-prop-types
    config: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
    isVisible: PropTypes.bool.isRequired,
    styles: PropTypes.any.isRequired
  };

  static defaultProps = {
    itemsToReparent: []
  };

  constructor(props, context) {
    super(props, context);

    this.onCursorChanging = this.onCursorChanging.bind(this);

    this.state = {
      config: this.setConfig(props)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      config: this.setConfig(nextProps)
    });
  }

  shouldComponentUpdate({ isVisible: newIsVisible }, nextState) { // eslint-disable-line no-unused-vars
    const { isVisible } = this.props;

    return isVisible || newIsVisible;
  }

  onCursorChanging(event, data) {
    const { context } = data;
    const { config } = this.state;
    this.setState({
      config: {
        ...config,
        cursorItem: context.id
      }
    });
    // Set data.cancel to true in order to suppress set cursor item in control
    // it will be updated via subsequent state change and rendering event
    return true;
  }

  setConfig({ isVisible, itemsToReparent, config }) {
    if (isVisible) {
      const { items, buttons, ...rest } = config;
      return {
        ...rest,
        ...this.getDeletedSelectedItems(items || [], itemsToReparent)
      };
    }
  }

  getTree(items = []) { // eslint-disable-line class-methods-use-this
    const tree = primitives.common.tree();

    // rebuild tree
    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      tree.add(item.parent, item.id, item);
    }

    return tree;
  }

  getDeletedItemsParent(tree, deletedItems, deletedHash) { // eslint-disable-line class-methods-use-this
    let result = null;
    const lca = primitives.common.LCA(tree);
    result = deletedItems.reduce((agg, itemid) => {
      if (agg == null) {
        agg = itemid;
      } else {
        agg = lca.getLowestCommonAncestor(agg, itemid);
      }
      return agg;
    }, null);

    if (deletedHash.has(result.toString())) {
      result = tree.parentid(result);
    }
    return result;
  }

  getDeletedSelectedItems(items = [], deletedItems = []) { // eslint-disable-line class-methods-use-this
    const tree = this.getTree(items);
    const hash = deletedItems.reduce((agg, itemid) => {
      agg.add(itemid.toString());
      return agg;
    }, new Set());
    const cursorParent = this.getDeletedItemsParent(tree, deletedItems, hash);
    const result = [];
    tree.loopLevels(this, (nodeid, node) => {
      if (hash.has(nodeid.toString())) {
        return tree.SKIP;
      }
      result.push(node);
    });

    return {
      items: result,
      cursorItem: cursorParent,
      selectedItems: []
    };
  }

  getUsedOptions(props) { // eslint-disable-line class-methods-use-this
    const { isVisible, config, itemsToReparent } = props;
    return {
      isVisible,
      config,
      itemsToReparent
    };
  }

  render() {
    const { isVisible, onCursorItem, onClose, styles } = this.props;
    const { config } = this.state;
    if(isVisible) {
      const templateConfig = config.templates.find(template => template.name === 'defaultTemplate');
      const contactTemplateConfig = config.templates.find(template => template.name === 'contactTemplate');

      return <Modal show={isVisible} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Select new parent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={styles.placeholder}>
          <OrgDiagram
                config={{
                  ...config,
                  templates: [
                    {
                      ...templateConfig,
                      onItemRender: ({ context: itemConfig }) => {
                        const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue;
                        return <div className={styles.DefaultTemplate}>
                          <div className={styles.DefaultTitleBackground} style={{ backgroundColor: itemTitleColor }}>
                            <div className={styles.DefaultTitle}>{itemConfig.title}</div>
                          </div>
                          <div className={styles.DefaultPhotoFrame}>
                            <img className={styles.DefaultPhoto} src={itemConfig.image} alt={itemConfig.title} />
                          </div>
                          <div className={styles.DefaultDescription}>{itemConfig.description}</div>
                        </div>;
                      }
                    },
                    {
                      ...contactTemplateConfig,
                      onItemRender: ({ context: itemConfig }) => {
                        const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue;
                        return <div className={styles.ContactTemplate}>
                          <div className={styles.ContactTitleBackground} style={{ backgroundColor: itemTitleColor }}>
                            <div className={styles.ContactTitle}>{itemConfig.title}</div>
                          </div>
                          <div className={styles.ContactPhotoFrame}>
                            <img className={styles.ContactPhoto} src={itemConfig.image} alt={itemConfig.title} />
                          </div>
                          <div className={styles.ContactPhone}>{itemConfig.phone}</div>
                          <div className={styles.ContactEmail}>{itemConfig.email}</div>
                          <div className={styles.ContactDescription}>{itemConfig.description}</div>
                        </div>;
                      }
                    }
                  ]
                }}
            onCursorChanging={this.onCursorChanging}
          />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onCursorItem(config.cursorItem)}>Set</Button>
          <Button onClick={onClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    }
    return null;
  }
}

export default SelectCursorItemDialog;
