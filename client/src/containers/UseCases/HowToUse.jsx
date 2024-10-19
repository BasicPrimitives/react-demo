import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import TryMe from './TryMe';
import { load, setCode } from '@/redux/modules/howtouse';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import remarkGfm from 'remark-gfm';

SyntaxHighlighter.registerLanguage('javascript', js);

const useStyles = makeStyles(() => ({
  placeholder: {
    width: "100%",
    height: "520px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
  },
}));

function HowToUse() {
  const classes = useStyles();
  const { fileName } = useParams();
  const loaded = useSelector(state => state.howtouse.files[fileName]?.loaded);
  const markdown = useSelector(state => state.howtouse.files[fileName]?.markdown);
  const groups = useSelector(state => state.howtouse.files[fileName]?.groups || {});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      dispatch(load(fileName));
    }
  }, [fileName, loaded, dispatch]);

  const renderers = {
    p({ children }) {
      return <div>{children}</div>;
    },
    a({ children, href }) {
      const group = groups[href];
      if (children === 'group' && group) {
        const { activeKey, samples } = group;
        return (
          <TryMe
            className={classes.placeholder}
            name={`group${href}`}
            samples={samples}
            activeKey={activeKey}
            onCodeChange={(sampleKey, text) => dispatch(setCode(fileName, href, sampleKey, text))}
          />
        );
      }
      return <a href={href}>{children}</a>;
    },
    code({ children, className }) {
      if (className !== undefined) {
        return (
          <SyntaxHighlighter language="javascript" style={docco}>
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }
      return <code>{children}</code>;
    }
  };

  let title = "";
  if (typeof markdown === "string") {
    [, title] = markdown.match(/^# (.+)$/m) || [];
  }

  return (
    markdown ? (
      <>
        <Helmet>
          <title>{` for JavaScript - ${title}`}</title>
          <meta name="description" content="JavaScript/Bootstrap/PDFKit Product Samples." />
        </Helmet>
        <Container fixed>
          <ReactMarkdown
            components={renderers}
            remarkPlugins={[remarkGfm]}
          >
            {markdown}
          </ReactMarkdown>
        </Container>
      </>
    ) : null
  );
}

export default HowToUse;
