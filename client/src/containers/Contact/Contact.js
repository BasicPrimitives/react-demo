import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux'
import { load } from 'redux/modules/contact';
import MDReactComponent from 'markdown-react-js';
import Container from '@material-ui/core/Container';

function Contact() {
  const loaded = useSelector(state => state.contact.loaded); 
  const markdown = useSelector(state => state.contact.markdown); 
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []/* run only once */);

  return (
    <>
      <Helmet>
        <title>- Contact</title>
        <meta name="description" content="Contacts." />
      </Helmet>
      <Container fixed>
        <MDReactComponent text={markdown} />
      </Container>
    </>
  );
}

export default Contact;
