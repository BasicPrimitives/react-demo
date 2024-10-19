import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { load } from '@/redux/modules/license';
import ReactMarkdown from 'react-markdown';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  priceStyle: {
    textAlign: "right",
    whiteSpace: "nowrap",
  },
}));

function License() {
  const classes = useStyles();
  const loaded = useSelector((state) => state.license.loaded);
  const markdown = useSelector((state) => state.license.markdown);
  const licenses = useSelector((state) => state.license.licenses);
  const dispatch = useDispatch();
  let key = 0;

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  }, [loaded, dispatch]);

  const renderers = {
    p({ children }) {
      const isArray = Array.isArray(children);
      const hasCustomChild = isArray 
        ? children.some((child) => child.$$typeof != null) 
        : children.$$typeof != null;

      if (hasCustomChild) {
        key += 1;
        return (
          <div key={`item-${key}`} style={{ display: "inline" }}>
            {children}
          </div>
        );
      }
      return <p>{children}</p>;
    },
    a({ children, href }) {
      const [caption] = Array.isArray(children) ? children : [children];
      switch (caption) {
        case "Licenses":
          key += 1;
          return (
            <table key={`table-${key}`} border="0">
              <tbody>
                {licenses &&
                  licenses.map(({ name, description, allows, comment, value, action }) => {
                    key += 1;
                    return (
                      <tr key={`license-${key}`}>
                        <td>
                          <h3>{name}</h3>
                          <p>{description}</p>
                          {allows && (
                            <ul>
                              {allows.map((item) => {
                                key += 1;
                                return <li key={`item-${key}`}>{item}</li>;
                              })}
                            </ul>
                          )}
                          <p>{comment}</p>
                        </td>
                        <td className={classes.priceStyle} rowSpan="1">
                          <h4>{value}</h4>
                        </td>
                        <td rowSpan="1">&nbsp;</td>
                        <td>
                          <form method="post" action={action}>
                            <Button type="submit" variant="contained" color="primary">Buy</Button>
                          </form>
                        </td>
                      </tr>
                    );
                  })}
                  
              </tbody>
            </table>
          );
        default:
          return <a key={href} href={href}>{children}</a>;
      }
    },
    default({ tagName, children }) {
      return <tagName key={`default-${key}`}>{children}</tagName>;
    },
  };

  return (
    <>
      <Helmet>
        <title>- License</title>
      </Helmet>
      <Container fixed>
        <ReactMarkdown components={renderers}>{markdown}</ReactMarkdown>
      </Container>
    </>
  );
}

export default License;
