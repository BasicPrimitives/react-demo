import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TryMe from './TryMe';
import { load, setCode } from 'redux/modules/howtouse';
import MDReactComponent from 'markdown-react-js';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);

const useStyles = makeStyles(() => ({
  placeholder: {
    width: "100%",
    height: "520px",
    "border-left-width": "0px",
    "border-right-width": "0px",
    
    "border-top-width": "1px",
    "border-top-style": "solid",
    "border-bottom-width": "1px",
    "border-bottom-style": "solid"
  }
}));

function HowToUse(props) {
  const classes = useStyles();
  const { fileName } = props;
  const loaded = useSelector(state => state.howtouse.files[fileName] && state.howtouse.files[fileName].loaded); 
  const markdown = useSelector(state => state.howtouse.files[fileName] && state.howtouse.files[fileName].markdown); 
  const groups = useSelector(state => state.howtouse.files[fileName] != null ? state.howtouse.files[fileName].groups : {}); 
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
    key++;
    if (Tag === 'p') {
      if (children.filter(child => child.props != null && child.props.samples != null).length > 0) {
        return <div key={key}>{children}</div>;
      }
    }
    key++;
    if (Tag === 'a') {
      const [caption] = children;
      const groupKey = props.href;
      const group = groups[groupKey];
      if (caption === 'group' && group != null) {
        const { activeKey, samples } = group;
        props = {
          ...props,
          className: classes.placeholder,
          name: `group${groupKey}`,
          samples,
          activeKey,
          tagKey: key
        };
        return <TryMe key={key} {...props} onCodeChange={(sampleKey, text) => dispatch(setCode(fileName, props.href, sampleKey, text))} />;
      }
    }
    if(props.hasOwnProperty("data-language")) {
      key +=1;
      return <SyntaxHighlighter language="javascript" style={docco}  key={key}>{children}</SyntaxHighlighter>;
    }
    key++;
    return <Tag key={key} {...props}>{children}</Tag>;
  }

  let title = "";
  if(typeof markdown === "string") {
    [, title] = markdown.match(/^# (.+)$/m) || [];
  }
  return (markdown ?
    <>
      <Helmet>
        <title>{` for JavaScript - ${title}`}</title>
        <meta name="description" content="JavaScript/Bootstrap/PDFKit Product Samples." />
      </Helmet>
      <Container fixed>
        <MDReactComponent text={markdown} onIterate={handleIterate} />
      </Container>
    </> :
    <></>
  );
}

export default HowToUse;
