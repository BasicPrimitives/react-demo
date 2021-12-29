import React, { Component, Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { transform } from "@babel/core";
import { load } from 'redux/modules/reacthowtouse';
import MDReactComponent from 'markdown-react-js';
import { LiveProvider, LivePreview } from 'react-live'
import LiveEditor from './LiveEditor';
import LiveError from './LiveError';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

import { faUserPlus, faUserSlash, faCoffee, faSitemap, faUser, faComment, faCog } from '@fortawesome/free-solid-svg-icons'
import * as basicprimitives from 'basicprimitives';
import { OrgDiagram, FamDiagram, RotatedText } from 'basicprimitivesreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DndProvider, useDrag, useDrop, DropTarget, DragSource } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './global.css';

SyntaxHighlighter.registerLanguage('javascript', js);

function ReactHowToUse(props) {
  const { fileName } = props;
  const loaded = useSelector(state => state.reacthowtouse.files[fileName] && state.reacthowtouse.files[fileName].loaded); 
  const markdown = useSelector(state => state.reacthowtouse.files[fileName] && state.reacthowtouse.files[fileName].markdown); 
  const groups = useSelector(state => state.reacthowtouse.files[fileName] != null ? state.reacthowtouse.files[fileName].groups : {}); 
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loaded) {
      dispatch(load(fileName));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileName]/* run only once on fileName change */);

  let key = 0;

  function handleIterate(Tag, props, children, level) {
    if (level === 1) {
      props = {
        ...props,
        className: 'first-level-class'
      };
    }
    if (Tag === 'p') {
      key += 1;
      if (children.filter(child => child.$$typeof != null).length > 0) {
        return <div key={`first-level-${key}`}>{children}</div>;
      }
    }
    if(Tag === 'code') {
      if(props.hasOwnProperty("data-language")) {
        key +=1;
        return <SyntaxHighlighter language="javascript" style={docco}  key={key}>{children}</SyntaxHighlighter>;
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
            Fragment,
            ...basicprimitives,
            OrgDiagram,
            FamDiagram,
            RotatedText,
            DndProvider,
            DropTarget,
            DragSource,
            useDrag,
            useDrop,
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
                  require('@babel/plugin-syntax-jsx'),
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

  let title = "";
  if(typeof markdown === "string") {
    [, title] = markdown.match(/^# (.+)$/m) || [];
  }
  return (markdown ?
    <>
      <Helmet>
        <title>{` for React - ${title}`}</title>
        <meta name="description" content="ReactJS Product Samples." />
      </Helmet>
      <Container fixed>
        <MDReactComponent text={markdown} onIterate={handleIterate} />
      </Container>
    </> :
    <></>
  );
}

export default ReactHowToUse;
