import React from 'react';
import Navbar from './Navbar';

// This component is a component that wraps all the page components around the navbar
// and the footer

function Pager({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Pager;
