import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux'
import MDReactComponent from 'markdown-react-js';
import { load } from 'redux/modules/changelog';

function Changelog() {
  const loaded = useSelector(state => state.changelog.loaded); 
  const markdown = useSelector(state => state.changelog.markdown); 
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []/* run only once */);

  return (
    <Container fixed>
      <Helmet>
        <title>- Changelog</title>
        <meta name="description" content="Products update changelog." />
      </Helmet>
    
      <h1>Changelog</h1>
      <MDReactComponent text={markdown} />
    </Container>
  )
}

export default Changelog;
