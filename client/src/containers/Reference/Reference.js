import React, { useEffect } from 'react';
import { useLocation } from "@reach/router"

function Reference(props) {
  const { children } = props;

  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({block: 'center'});
      }
    }
  });

  return (
    <>
      {children}
    </>
  )
}

export default Reference;

