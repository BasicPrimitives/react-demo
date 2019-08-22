import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { transform } from "@babel/core";
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { load, isLoaded } from 'redux/modules/reacthowtouse';
import MDReactComponent from 'markdown-react-js';
import {
  OrgDiagram,
  FamDiagram
} from 'basicprimitivesreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faUserSlash,
  faCoffee,
  faSitemap,
  faUser,
  faComment,
  faCog
} from '@fortawesome/free-solid-svg-icons'
import primitives from 'basicprimitives';
import {
  LiveProvider,
  LivePreview
} from 'react-live'
import LiveEditor from './LiveEditor';
import LiveError from './LiveError';
import { DndProvider, DropTarget, DragSource } from 'react-dnd-cjs';
import HTML5Backend from 'react-dnd-html5-backend/dist/cjs/index.js';
require('./global.scss');

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
    markdown: (state.reacthowtouse.files[fileName] != null ? state.reacthowtouse.files[fileName].markdown : ""),
    groups: (state.reacthowtouse.files[fileName] != null ? state.reacthowtouse.files[fileName].groups : {}),
    fileName
  }),
  { load }
)
class ReactHowToUse extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    groups: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
  };

  constructor(props) {
    super(props);
    this.handleIterate = this.handleIterate.bind(this);
    this.ley = 0;
  }

  handleIterate(Tag, props, children, level) {
    const { fileName, groups } = this.props; // eslint-disable-line no-shadow
    if (level === 1) {
      props = {
        ...props,
        className: 'first-level-class'
      };
    }

    if (Tag === 'p') {
      this.key += 1;
      if (children.filter(child => child.$$typeof != null).length > 0) {
        return <div key={`first-level-${this.key}`}>{children}</div>;
      }
    }
    if (Tag === 'a') {
      const [caption] = children;
      const groupKey = props.href;
      const group = groups[groupKey];
      if (caption === 'group' && group != null) {
        const { activeKey, samples } = group;
        return <LiveProvider
          scope={{
            Component,
            primitives,
            OrgDiagram,
            FamDiagram,
            DndProvider,
            DropTarget,
            DragSource,
            HTML5Backend,
            FontAwesomeIcon,
            faUserPlus,
            faUserSlash,
            faCoffee,
            faSitemap,
            faUser,
            faComment,
            faCog
          }}
          key={activeKey}
          code={samples[0].content || "<p>No code defined</p>"}
          transformCode={code => {
            let transformed = code;
            try {
              transformed = transformed.replace(/^import.*$/gm, match => '');
              transformed = transformed.replace(/^export.*$/gm, match => '');
              transformed = transform(transformed, {
                plugins: [
                  require("@babel/plugin-syntax-jsx"),
                  [
                    require("@babel/plugin-proposal-class-properties"),
                    { loose: true }
                  ]
                ]
              }).code;
            } catch (err) {
              transformed = `<p>Failed to transform code ${JSON.stringify(err)}</p>`;
            }
            return transformed;
          }}
        >
          <LiveEditor />
          <LivePreview />
          <LiveError />
        </LiveProvider>
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
        <Helmet title={` for React - ${title}`} />
        <MDReactComponent text={markdown} onIterate={this.handleIterate} />
      </>
    );
  }
}

export default ReactHowToUse;
