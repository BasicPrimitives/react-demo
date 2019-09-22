import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Table
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { load, isLoaded } from 'redux/modules/reference';
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
    markdown: (state.reference.files[fileName] != null ? state.reference.files[fileName].markdown : ""),
    fileName
  }),
  { load }
)
class ApiReference extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired
  };

  constructor() {
    super();
    this.handleIterate = this.handleIterate.bind(this);
    this.key = 0;
  }

  handleIterate(Tag, props, children, level) {
    if (level === 1) {
      props = {
        ...props,
        className: 'first-level-class'
      };
    }
    if (Tag == 'th') {
      var style = {};
      switch (children[0]) {
        case "Description":
          style = { width: "64%" };
          break;
        default:
          style = { width: "12%" };
          break;
      }
      return <th style={style}>{children}</th>;
    }
    if (Tag === "h2") {
      if (children[0].props == undefined || children[0].props.to == undefined) {
        return <h2 dangerouslySetInnerHTML={{ __html: children }}></h2>
      }
    }
    if (Tag === 'a') {
      let { href } = props;
      if (href.indexOf(".md") > -1) {
        href = "/reference" + href.substr(0, href.indexOf(".md")) + href.substr(href.indexOf(".md") + 3);
        return <Link to={href}>{children}</Link>;
      }
    }
    if (Tag === 'table') {
      return <Table responsive>{children}</Table>;
    }
    return <Tag {...props}>{children}</Tag>;
  }

  render() {
    this.key = 0;
    const { markdown } = this.props;
    const [, title] = markdown.match(/^# (.+)$/m) || [];
    return (
      <>
        <Helmet title={` API Reference - ${title}`} />
        <MDReactComponent text={markdown} onIterate={this.handleIterate} />
      </>
    );
  }
}

export default ApiReference;
