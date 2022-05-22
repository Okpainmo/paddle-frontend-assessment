import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <div className="glass-bg">
          <section className="social-icons-wrapper d-flex justify-content-center gap-4 fs-5">
            <i className="bi bi-youtube"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </section>
          <section className="legal">
            <div className="mt-3 text-center d-flex flex-row justify-content-center fs-6">
              <Link to="/" className="me-5">
                Terms of service
              </Link>
              <Link to="/" className="ms-5">
                Privacy policy
              </Link>
            </div>
            <div className="copyright-notice mt-3">
              Copyright 2021 @ Peddle Technologies. All Rights Reserved.
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
