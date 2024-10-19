import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

function Reference() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ block: 'center' });
      }
    }
  }, [hash]);

  return <><Outlet /></>;
}

export default Reference;