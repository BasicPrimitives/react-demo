import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link } from '@reach/router';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { load } from 'redux/modules/reference';
import MDReactComponent from 'markdown-react-js';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import { makeStyles } from "@material-ui/core/styles";

SyntaxHighlighter.registerLanguage('javascript', js);

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
    display: "flex",
    overflowX: "auto"
  },
  table: {
    minWidth: 800
  }
}));

function ApiReference(props) {
  const { fileName } = props;
  const loaded = useSelector(state => state.reference.files[fileName] && state.reference.files[fileName].loaded); 
  const markdown = useSelector(state => state.reference.files[fileName] && state.reference.files[fileName].markdown); 
  const dispatch = useDispatch()

  const classes = useStyles();

  useEffect(() => {
    if (!loaded) {
      dispatch(load(fileName));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileName]/* run only once on fileName change */);

  let key = 0;

  function handleIterate(Tag, props, children, level) {
    key++;
    switch(Tag) {
      case "h2":
        if (children[0].props === undefined || children[0].props.to === undefined) {
          return <h2 key={key} dangerouslySetInnerHTML={{ __html: children }}></h2>
        }
        break;
      case 'a':
        let { href } = props;
        if (href.indexOf(".md") > -1) {
          href = "/reference" + href.substr(0, href.indexOf(".md")) + href.substr(href.indexOf(".md") + 3);
          return <Link to={href}>{children}</Link>;
        }
        break;
      case 'code':
        if(props.hasOwnProperty("data-language")) {
          key +=1;
          return <SyntaxHighlighter language="javascript" style={docco}  key={key}>{children}</SyntaxHighlighter>;
        }
        break;
      case 'table':
        return <Paper className={classes.paper}><Table className={classes.table} key={key}>{children}</Table></Paper>;
      case 'tbody':
        return <TableBody key={key}>{children}</TableBody>;
      case 'thead':
        return <TableHead key={key}>{children}</TableHead>;
      case 'tr':
          return <TableRow key={key}>{children}</TableRow>;
      case 'th':
        var style = {};
        switch (children[0]) {
          case "Description":
            style = { width: "64%" };
            break;
          default:
            style = { width: "12%" };
            break;
        };
        return <TableCell style={style} key={key}>{children}</TableCell>;
      case 'td':
        return <TableCell key={key}>{children}</TableCell>;
      case 'span':
        return <Container className={classes.grow}>{children}</Container>;
      default:
        break;
    }
    return <Tag key={key} {...props}>{children}</Tag>;
  }

  let title = ""
  if(markdown !== undefined) {
    [, title] = markdown.match(/^# (.+)$/m) || [];
  }

  return (markdown ?
    <>
      <Helmet title={` API Reference - ${title}`} />
      <MDReactComponent text={markdown} onIterate={handleIterate} />
    </>
    : <>
    </>
  );
}

export default ApiReference;
