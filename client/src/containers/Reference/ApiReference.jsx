import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { load } from '@/redux/modules/reference';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import { makeStyles } from "@mui/styles";
import remarkGfm from 'remark-gfm';

SyntaxHighlighter.registerLanguage('javascript', js);

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
    display: "flex",
    overflowX: "auto",
  },
  table: {
    minWidth: 800,
  },
}));

function ApiReference() {
  const { fileName } = useParams();
  const loaded = useSelector(state => state.reference.files[fileName]?.loaded); 
  const markdown = useSelector(state => state.reference.files[fileName]?.markdown); 
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (!loaded) {
      dispatch(load(fileName));
    }
  }, [fileName, loaded, dispatch]);

  let title = "";
  if (markdown) {
    [, title] = markdown.match(/^# (.+)$/m) || [];
  }

  const components = {
    h2({ children }) {
      const child = Array.isArray(children) ? children.join('') : children;
  
      if (typeof child === 'string') {
        const match = child.match(/<a name="(.+?)" id="(.+?)">(.+?)<\/a>/);
        
        if (match) {
          const [, name, id, caption] = match;
          return (
            <h2 id={id}>
              <a name={name} id={id}>
                {caption}
              </a>
            </h2>
          );
        }
      }
      return <h2>{children}</h2>; // Fallback if no match
    },
    a({ children, href }) {
      if (href.includes(".md")) {
        const newHref = "/reference" + href.replace(".md", "");
        return <Link to={newHref}>{children}</Link>;
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
    },
    table({ children }) {
      return <Paper className={classes.paper}><Table className={classes.table}>{children}</Table></Paper>;
    },
    tbody({ children }) {
      return <TableBody>{children}</TableBody>;
    },
    thead({ children }) {
      return <TableHead>{children}</TableHead>;
    },
    tr({ children }) {
      return <TableRow>{children}</TableRow>;
    },
    th({ children }) {
      const isDescription = typeof children === 'string' && children === "Description";
      const style = isDescription ? { width: "64%" } : { width: "12%" };
      return <TableCell style={style}>{children}</TableCell>;
    },
    td({ children }) {
      return <TableCell>{children}</TableCell>;
    },
    span({ children }) {
      return <Container className={classes.grow}>{children}</Container>;
    },
  };

  return (
    markdown ? (
      <>
        <Helmet title={`API Reference - ${title}`} />
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
          {markdown}
        </ReactMarkdown>
      </>
    ) : null
  );
}

export default ApiReference;
