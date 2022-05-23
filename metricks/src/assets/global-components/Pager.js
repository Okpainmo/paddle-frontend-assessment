import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// This component is a component I initially created to sandwitch all the pages
// in between the navbar and the footer components.But I declined using it because I needed the footer
// and navbar components to be inside of the individual pages due to some uniqeness in the
// different designs and also so that I could easily handle the toggling of the contact pop-up
// I would have tried thinking out a better method to handle this the problem if there was more time.

function Pager({ children }) {
  return <>{children}</>;
}

export default Pager;
