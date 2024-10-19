import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import TryMe from './TryMe';
import { load, setCode } from '@/redux/modules/angularhowtouse';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

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
    borderBottomStyle: "solid"
  }
}));

function AngularHowToUse() {
  const classes = useStyles();
  const { fileName } = useParams();
  const loaded = useSelector(state => state.angularhowtouse.files[fileName] && state.angularhowtouse.files[fileName].loaded);
  const markdown = useSelector(state => state.angularhowtouse.files[fileName] && state.angularhowtouse.files[fileName].markdown);
  const groups = useSelector(state => state.angularhowtouse.files[fileName] != null ? state.angularhowtouse.files[fileName].groups : {});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      dispatch(load(fileName));
    }
  }, [fileName, dispatch]);

  let key = 0;

  // Custom components to render for specific markdown elements
  const renderers = {
    // Custom render for <p> tag (paragraphs)
    p: ({ children }) => {
      key++;
      const childrenArray = React.Children.toArray(children); // Convert children to an array
      // Check if the paragraph contains a component with `samples`
      if (childrenArray.filter(child => child.props != null && child.props.samples != null).length > 0) {
        return <div key={key}>{children}</div>;
      }
      return <p key={key}>{children}</p>;
    },

    // Custom render for <a> tag (links)
    a: ({ children, ...props }) => {
      const [caption] = children;
      const groupKey = props.href;
      const group = groups[groupKey];
      if (caption === 'group' && group != null) {
        const { activeKey, samples } = group;
        return (
          <TryMe
            key={key++}
            {...props}
            className={classes.placeholder}
            name={`group${groupKey}`}
            samples={samples}
            activeKey={activeKey}
            tagKey={key}
            onCodeChange={(sampleKey, text) => dispatch(setCode(fileName, props.href, sampleKey, text))}
          />
        );
      }
      return <a key={key++} {...props}>{children}</a>;
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
    },
  };

  let title = '';
  if (typeof markdown === 'string') {
    [, title] = markdown.match(/^# (.+)$/m) || [];
  }

  return markdown ? (
    <>
      <Helmet>
        <title>{` for Angular - ${title}`}</title>
        <meta name="description" content="Angular Product Samples." />
      </Helmet>
      <Container fixed>
        <ReactMarkdown
          children={markdown}
          components={renderers} // Use custom renderers
        />
      </Container>
    </>
  ) : <></>;
}

export default AngularHowToUse;
