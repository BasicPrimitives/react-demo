import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { load } from '@/redux/modules/contact';
import ReactMarkdown from 'react-markdown';
import Container from '@mui/material/Container';

function Contact() {
  const loaded = useSelector((state) => state.contact.loaded);
  const markdown = useSelector((state) => state.contact.markdown);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  }, [loaded, dispatch]);

  return (
    <>
      <Helmet>
        <title>- Contact</title>
        <meta name="description" content="Contacts." />
      </Helmet>
      <Container fixed>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Container>
    </>
  );
}

export default Contact;
