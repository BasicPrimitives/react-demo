import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; 
import { OrgDiagram } from 'basicprimitivesreact';
import { Colors, Tree, LCA } from 'basicprimitives';

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

  constructor(props) {
    super(props);

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
    const tree = Tree();

    // rebuild tree
    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      tree.add(item.parent, item.id, item);
    }

    return tree;
  }

  getDeletedItemsParent(tree, deletedItems, deletedHash) { // eslint-disable-line class-methods-use-this
    let result = null;
    const lca = LCA(tree);
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

      return <Dialog fullScreen open={isVisible} onClose={onClose}>
        <AppBar style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{marginLeft: "5px", flex: 1}}>
              Select new parent
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <div style={{width: "100%", height: "100%"}}>
            <OrgDiagram
                config={{
                  ...config,
                  templates: [
                    {
                      ...templateConfig,
                      onItemRender: ({ context: itemConfig }) => {
                        const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
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
                        const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
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
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={() => onCursorItem(config.cursorItem)}>Set</Button>
          <Button variant="contained" color="primary" onClick={onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    }
    return null;
  }
}

export default SelectCursorItemDialog;
