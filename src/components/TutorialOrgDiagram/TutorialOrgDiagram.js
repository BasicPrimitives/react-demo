import React, { Component } from 'react';
import PropTypes from 'prop-types';
import primitives from 'basicprimitives';

class TutorialOrgDiagram extends Component {
  static propTypes = {
    config: PropTypes.shape({
      pageFitMode: PropTypes.number.isRequired,
      cursorItem: PropTypes.number.isRequired,
      hasSelectorCheckbox: PropTypes.number.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        parent: PropTypes.number,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
      })).isRequired,
    }).isRequired,
    onCursorChanged: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    onCursorChanged: () => null,
    className: 'placeholder'
  }

  constructor(props) {
    super(props);

    // The following variable keeps reference to DOM element of this component, see render function for usage
    this.placeholderRef = React.createRef();

    // Reference to Control instance
    this.diagramControl = null;
  }

  componentDidMount() {
    require('basicprimitives/primitives.latest.css');
    const { config, onCursorChanged } = this.props;
    this.diagramControl = primitives.orgdiagram.Control(this.placeholderRef.current, { ...config, onCursorChanged });

    // The following code is ResizeObserver Polyfill
    // It is added to the rendered page to track size changes of control placeholder
    // npm install resize-observer-polyfill --save-dev
    require('resize-observer-polyfill/dist/ResizeObserver.global');
    const self = this;
    this.observer = new ResizeObserver(() => { self.onSizeChanged.call(self); });
    this.observer.observe(this.placeholderRef.current);
  }

  componentWillUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    // This method is not being called during component creation time
    // React calls it when component properties or state changed and component needs to be rendered again
    // We return false from this method, since we don't need "render" function to be called again,
    // but we use nextProps argument to update existing control content
    const { config, onCursorChanged } = nextProps;
    this.diagramControl.setOptions({ ...config, onCursorChanged });
    this.diagramControl.update(primitives.orgdiagram.UpdateMode.Refresh);

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
    this.diagramControl.update(primitives.orgdiagram.UpdateMode.Refresh);
  }

  render() {
    const { className } = this.props;
    return (
      <div ref={this.placeholderRef} className={className} />
    );
  }
}

export default TutorialOrgDiagram;
