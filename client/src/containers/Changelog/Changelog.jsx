import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown';
import { load } from '@/redux/modules/changelog';

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
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Container>
  )
}

export default Changelog;
