import React from 'react';
import Navbar from '../../global-components/Navbar';
import purplelogo from '../../images/metricks-logo_white-bg.png';

function BlogHomePage() {
  const isBlog = true;

  return (
    <main className="blog-home-page">
      <Navbar navLogo={purplelogo} blogSpecifics={isBlog} />
      <header>
        {/* elements for implementing glassmorphism effect */}
        <div className="glass-bg-1"></div>
        <div className="behind-content-1"></div>

        <section className="page-intro">
          <div className="about mb-4">ABOUT US</div>
          <h1>Articles and News</h1>
        </section>
      </header>
      <section className="post-section container">
        <div className="py-5">
          <h3 className="section-header pb-2">
            <strong>Latest From The Blog</strong>
          </h3>
          <div className="search-wrapper d-flex justify-content-between">
            <p className="w-50">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
            <div className="form-wrapper">
              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <i class="bi bi-search"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            excepturi.
          </div>
          <div className="col-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            excepturi.
          </div>
          <div className="col-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            excepturi.
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogHomePage;
