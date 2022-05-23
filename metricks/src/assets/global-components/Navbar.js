import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/metricks-logo_purple-bg.png';

function Navbar({ showContactPage }) {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="brand-logo" />
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
              <Link to="/about" className="nav-link active" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item nav-text mx-4">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item nav-text mx-4">
              <Link to="/github" className="nav-link">
                Github
              </Link>
            </li>
            <li className="nav-item ms-4 me-5" onClick={showContactPage}>
              <button
                className="nav-link btn rounded-pill px-4 "
                style={{
                  backgroundColor: 'var(--blue-light)',
                  color: 'white',
                }}
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
