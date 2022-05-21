import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* This component returns every page back to the top. 
It remedies for the issue(in react-router-dom) of opening new pages at 
the viewport area scrolled up to in the previous page */

function ScrollHandler({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

export default ScrollHandler;
