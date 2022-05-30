import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ showContactPage, navLogo, blogSpecifics }) {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={navLogo} alt="brand-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav me-5">
            <li className="nav-item nav-text mx-4">
              <Link
                to="/about"
                className="nav-link active"
                aria-current="page"
                style={{ color: blogSpecifics ? 'black' : 'white' }}
              >
                About
              </Link>
            </li>
            <li className="nav-item nav-text mx-4">
              <Link
                to="/blog"
                className="nav-link"
                style={{ color: blogSpecifics ? 'black' : 'white' }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item nav-text mx-4">
              <Link
                to="/github"
                className="nav-link"
                style={{ color: blogSpecifics ? 'black' : 'white' }}
              >
                Github
              </Link>
            </li>
            <li className="nav-item ms-4 me-5" onClick={showContactPage}>
              <button
                className={
                  blogSpecifics
                    ? 'nav-link btn rounded-pill px-5 blog-nav-btn'
                    : 'nav-link btn rounded-pill px-5'
                }
                style={{ color: blogSpecifics ? 'black' : 'white' }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
