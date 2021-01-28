import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux'
import { load } from 'redux/modules/license';
import MDReactComponent from 'markdown-react-js';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  priceStyle: {
    textAlign: "right",
    whiteSpace: "nowrap"
  }
}));

function License() {
  const classes = useStyles();
  const loaded = useSelector(state => state.license.loaded); 
  const markdown = useSelector(state => state.license.markdown); 
  const licenses = useSelector(state => state.license.licenses); 
  const dispatch = useDispatch()
  let key = 0;

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []/* run only once */);

  function handleIterate(Tag, props, children, level) {
    if (level === 1) {
      props = {
        ...props,
        className: 'first-level-class'
      };
    }
    if (Tag === 'p') {
      if (children.filter(child => child.$$typeof != null).length > 0) {
        key += 1;
        return <div key={`item-${key}`} style={{
          display: "inline"
        }}>{children}</div>;
      }
    }
    if (Tag === 'a') {
      let [caption] = children;
      switch (caption) {
        case "Licenses":
          key +=1;
          return <table key={`table-${key}`} border="0">
          <tbody>
            {licenses && licenses.map(({name, description, allows, comment, value, action}) => {
            key +=1;
            return <tr key={`license-${key}`}>
              <td>
                <h3>{name}</h3>
                <p>{description}</p>
                {allows && <ul>
                    {allows.map(item => { key+=1; return <li key={`item-${key}`}>{item}</li>})}
                  </ul>
                }
                <p>{comment}</p>
              </td>
              <td className={classes.priceStyle} rowSpan="1"><h4>{value}</h4></td>
              <td rowSpan="1">&nbsp;</td>
              <td>
                <form method="post" action={action}>
                  <Button type="submit" variant="contained" color="primary">Buy</Button>
                </form>
              </td>
            </tr>})}
          </tbody>
        </table>;
        default:
          return <a {...props}>{children}</a>;
      }
    }
    return <Tag {...props}>{children}</Tag>;
  }
  
  return (
    <>
      <Helmet>
        <title>- License</title>
      </Helmet>
      <Container fixed>
        <MDReactComponent text={markdown} onIterate={handleIterate} />
      </Container>
    </>
  );
}

export default License;
