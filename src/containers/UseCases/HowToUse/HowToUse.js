import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TryMe } from 'components';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { load, setCode, isLoaded } from 'redux/modules/howtouse';
import MDReactComponent from 'markdown-react-js';

@provideHooks({
  fetch: ({ store: { dispatch, getState }, params: { fileName } }) => (!isLoaded(getState(), fileName) ? dispatch(load(fileName)).catch(() => null) : Promise.resolve())
})
@connect(
  (
    state,
    {
      match: {
        params: { fileName }
      }
    }
  ) => ({
    markdown: (state.howtouse.files[fileName] != null ? state.howtouse.files[fileName].markdown : ""),
    groups: (state.howtouse.files[fileName] != null ? state.howtouse.files[fileName].groups : {}),
    fileName
  }),
  { setCode, load }
)
class HowToUse extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired,
    setCode: PropTypes.func.isRequired,
    fileName: PropTypes.string.isRequired,
    groups: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
  };

  constructor() {
    super();
    this.handleIterate = this.handleIterate.bind(this);
    this.key = 0;
  }

  handleIterate(Tag, props, children, level) {
    const { fileName, groups, setCode } = this.props; // eslint-disable-line no-shadow
    const styles = require('./HowToUse.scss');
    if (level === 1) {
      props = {
        ...props,
        className: 'first-level-class'
      };
    }

    if (Tag === 'p') {
      if (children.filter(child => child.props != null && child.props.samples != null).length > 0) {
        return <>{children}</>;
      }
    }
    if (Tag === 'a') {
      this.key++;
      const [caption] = children;
      const groupKey = props.href;
      const group = groups[groupKey];
      if (caption === 'group' && group != null) {
        const { activeKey, samples } = group;
        props = {
          ...props,
          className: styles.placeholder,
          name: `group${groupKey}`,
          samples,
          activeKey,
          key: this.key
        };
        return <TryMe {...props} onCodeChange={(sampleKey, text) => setCode(fileName, props.href, sampleKey, text)} />;
      }
    }
    return <Tag {...props}>{children}</Tag>;
  }

  render() {
    this.key = 0;
    const { markdown } = this.props;
    const [, title] = markdown.match(/^# (.+)$/m) || [];
    return (
      <>
        <Helmet>
          <title>{` for JavaScript - ${title}`}</title>
          <meta name="description" content="JavaScript/jQuery/PDFKit Product Samples." />
        </Helmet>
        <MDReactComponent text={markdown} onIterate={this.handleIterate} />
      </>
    );
  }
}

export default HowToUse;
