import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  ButtonGroup,
  Button,
  Glyphicon
} from 'react-bootstrap';
import primitives from 'basicprimitives';
import OrgDiagramConfig from './Schemas/OrgDiagramConfig';

primitives.common.ButtonsTemplate = () => {
  function template() {
    return ['div', { style: { position: 'absolute' } }];
  }

  function getHashCode() {
    return 'defaultButtonsTemplate';
  }

  function render(event, { element, buttons }) {
    ReactDOM.render(
      <ButtonGroup className="btn-group-vertical">
        {
          buttons.map(button => (
            <Button bsSize="small" className="orgdiagrambutton" key={button.name} data-buttonname={button.name}>
              <Glyphicon glyph={button.icon} />
            </Button>
          ))
        }
      </ButtonGroup>,
      element
    );
  }

  return {
    template,
    getHashCode,
    render
  };
};

class OrgDiagram extends Component {
  static propTypes = {
    updateMode: PropTypes.oneOf(Object.values(primitives.common.UpdateMode)), // eslint-disable-line react/no-unused-prop-types
    centerOnCursor: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    config: OrgDiagramConfig().isRequired, // eslint-disable-line react/no-unused-prop-types
    onHighlightChanging: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onHighlightChanged: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onCursorChanging: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onCursorChanged: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onSelectionChanging: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onSelectionChanged: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onButtonClick: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onItemRender: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onHighlightRender: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onCursorRender: PropTypes.func, // eslint-disable-line react/no-unused-prop-types

    className: PropTypes.string
  };

  static defaultProps = {
    updateMode: primitives.common.UpdateMode.Refresh,
    centerOnCursor: true,
    onHighlightChanging: null,
    onHighlightChanged: null,
    onCursorChanging: null,
    onCursorChanged: null,
    onSelectionChanging: null,
    onSelectionChanged: null,
    onButtonClick: null,
    onItemRender: null,
    onHighlightRender: null,
    onCursorRender: null,

    className: 'placeholder'
  }

  static addItemPlaceholders({ config, onItemRender, onHighlightRender }) {
    const { templates } = config;
    const styles = require('./Diagrams.scss');
    if (templates != null) {
      for (let index = 0; index < templates.length; index += 1) {
        const template = templates[index];
        // We use React JSX to populate nodes, so we have to provide only empty DIV element
        if (onItemRender != null) {
          template.itemTemplate = ['div',
            {
              style: {
                width: `${template.itemSize.width}px`,
                height: `${template.itemSize.height}px`,
              },
              class: [styles.bpitem]
            }
          ];
        }
        if (onHighlightRender != null) {
          template.highlightTemplate = ['div',
            {
              style: {
                width: `${template.itemSize.width + template.highlightPadding.left + template.highlightPadding.right}px`,
                height: `${template.itemSize.height + template.highlightPadding.top + template.highlightPadding.bottom}px`,
              },
              class: [styles.bp_item_overflow, 'bp-corner-all', 'bp-cursor-frame']
            }
          ];
        }
      }
    }
  }

  constructor(props) {
    super(props);

    // The following variable keeps reference to DOM element of this component, see render function for usage
    this.placeholderRef = React.createRef();

    // Reference to Control instance
    this.diagramControl = null;
  }

  componentDidMount() {
    const self = this;
    require('basicprimitives/primitives.latest.css');
    this.diagramControl = primitives.orgdiagram.Control(this.placeholderRef.current, {});
    this.updateDiagramOptions(this.props);

    // The following code is ResizeObserver Polyfill
    // It is added to the rendered page to track size changes of control placeholder
    // npm install resize-observer-polyfill --save-dev
    require('resize-observer-polyfill/dist/ResizeObserver.global');
    this.observer = new ResizeObserver(() => { self.onSizeChanged.call(self); });
    this.observer.observe(this.placeholderRef.current);
  }

  componentWillUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    // This method is not being called during component creation time
    // React calls it when component properties or state changed and component needs to be rendered again
    // We return false from this method, since we don't need "render" function to be called again,
    // but we use nextProps argument to update existing control content
    this.updateDiagramOptions(nextProps);

    // React update cycle calls render function and replaces current instance of the component in DOM with new one.
    // In our case render function just generates placeholder to render Control content, so we don't need it to be replaced.
    return false;
  }

  componentWillUnmount() {
    // destroy observer
    this.observer.disconnect();

    // Explecetly call destroy function to remove DOM event listeners created in the Control.
    this.diagramControl.destroy();
  }

  onSizeChanged() {
    this.diagramControl.update(primitives.common.UpdateMode.Refresh);
  }

  updateDiagramOptions(properties) {
    const self = this;
    const {
      updateMode,
      centerOnCursor,
      config,
      onHighlightChanging,
      onHighlightChanged,
      onCursorChanging,
      onCursorChanged,
      onSelectionChanging,
      onSelectionChanged,
      onButtonClick,
      onItemRender,
      onHighlightRender,
      onCursorRender,
    } = properties;


    // Add control templates for items in form of empty div
    OrgDiagram.addItemPlaceholders(properties);


    const options = {
      ...config,
      buttonsPanelSize: 38
    };

    if (onHighlightChanging != null) {
      options.onHighlightChanging = (event, data) => {
        onHighlightChanging(data);
      };
    }
    if (onHighlightChanged != null) {
      options.onHighlightChanged = (event, data) => {
        onHighlightChanged(data);
      };
    }
    if (onCursorChanging != null) {
      options.onCursorChanging = (event, data) => {
        onCursorChanging(data);
      };
    }
    if (onCursorChanged != null) {
      options.onCursorChanged = (event, data) => {
        onCursorChanged(data);
      };
    }
    if (onSelectionChanging != null) {
      options.onSelectionChanging = (event, data) => {
        const selectedItems = self.diagramControl.getOption('selectedItems');
        onSelectionChanging(data, selectedItems);
      };
    }
    if (onSelectionChanged != null) {
      options.onSelectionChanged = (event, data) => {
        const selectedItems = self.diagramControl.getOption('selectedItems');
        onSelectionChanged(data, selectedItems);
      };
    }
    if (onButtonClick != null) {
      options.onButtonClick = (event, data) => {
        onButtonClick(data);
      };
    }
    if (onItemRender != null) {
      options.onItemRender = (event, data) => {
        onItemRender(data);
      };
    }
    if (onHighlightRender != null) {
      options.onHighlightRender = (event, data) => {
        onHighlightRender(data);
      };
    }
    if (onCursorRender != null) {
      options.onCursorRender = (event, data) => {
        onCursorRender(data);
      };
    }

    this.diagramControl.setOptions(options);
    this.diagramControl.update(updateMode, centerOnCursor);
  }

  render() {
    const { className } = this.props;
    return (
      <div ref={this.placeholderRef} className={className} />
    );
  }
}

export default OrgDiagram;
