import React, {Fragment, Component, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { load } from '@/redux/modules/reacthowtouse';
import ReactMarkdown from 'react-markdown';
import { LiveProvider, LivePreview } from 'react-live';
import LiveEditor from './LiveEditor';
import LiveError from './LiveError';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

import { faUserPlus, faUserSlash, faCoffee, faSitemap, faUser, faComment, faCog } from '@fortawesome/free-solid-svg-icons';
import * as basicprimitives from 'basicprimitives';
import { OrgDiagram, FamDiagram, RotatedText } from 'basicprimitivesreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './global.css';

SyntaxHighlighter.registerLanguage('javascript', js);

function ReactHowToUse() {
  const { fileName } = useParams();
  const loaded = useSelector(state => state.reacthowtouse.files[fileName]?.loaded);
  const markdown = useSelector(state => state.reacthowtouse.files[fileName]?.markdown);
  const groups = useSelector(state => state.reacthowtouse.files[fileName]?.groups || {});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      dispatch(load(fileName));
    }
  }, [fileName, loaded, dispatch]);

  function renderers() {
    return {
      code({ children, className }) {
        if (className !== undefined) {
          return (
            <SyntaxHighlighter language="javascript" style={docco}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          );
        }
        return <code>{children}</code>;
      },
      a: ({ href, children }) => {
        const group = groups[href];
        if (children === 'group' && group) {
          const { activeKey, samples } = group;
          return (
            <p>
            <LiveProvider
              scope={{
                Fragment,
                Component,
                ...basicprimitives,
                OrgDiagram,
                FamDiagram,
                RotatedText,
                DndProvider,
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
              code={samples[0]?.content || "<p>No code defined</p>"}
              transformCode={code => {
                let transformed = code;
                try {
                  transformed = transformed.replace(/^import.*$/gm, '');
                  transformed = transformed.replace(/^export.*$/gm, '');
                } catch (err) {
                  transformed = `<span>Failed to transform code ${JSON.stringify(err)}</span>`;
                }
                return transformed;
              }}
            >
              <LiveEditor />
              <LivePreview />
              <LiveError />
            </LiveProvider>
            </p>
          );
        }
        return <a href={href}>{children}</a>;
      },
      p: ({ children }) => (
        <div className="first-level-class">{children}</div>
      ),
    };
  }

  let title = '';
  if (typeof markdown === 'string') {
    [, title] = markdown.match(/^# (.+)$/m) || [];
  }

  return markdown ? (
    <>
      <Helmet>
        <title>{` for React - ${title}`}</title>
        <meta name="description" content="ReactJS Product Samples." />
      </Helmet>
      <Container fixed>
        <ReactMarkdown components={renderers()}>{markdown}</ReactMarkdown>
      </Container>
    </>
  ) : null;
}

export default ReactHowToUse;
