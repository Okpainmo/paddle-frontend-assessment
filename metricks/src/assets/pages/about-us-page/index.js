import React from 'react';
import Footer from '../../global-components/Footer';
import dots from '../../images/dots.png';

function AboutPage() {
  return (
    <main className="about-page">
      <section className="main-top">
        {/* elements for implementing glassmorphism effect */}
        <div className="glass-bg-1"></div>
        <div className="behind-content-1"></div>

        {/* main content */}
        <section className="page-intro">
          <div className="about mb-4">ABOUT US</div>
          <h1>
            Built for Saas <br /> and E-commerce
          </h1>
          <div className="detail-text-1">
            Our tools are easy to set up and use with a user friendly dashboard
            that enables you to set up, launch, automate and manage
            multi-affiliate campaigns in 5 minutes.
          </div>
        </section>
        <h1 className="container fs-1 mt-5 w-75 text-center">
          Metricks was developed because just like you, we needed a product that
          could give us <strong>good value.</strong>
        </h1>
      </section>

      <section className="details-section">
        {/* elements for implementing glassmorphism effect */}

        <div className="glass-bg-2"></div>
        <div className="behind-content-2"></div>

        {/* main content */}

        <div className="container main-details-section">
          <div className="row">
            <div className="col-lg-6 ps-5 pe-5">
              <span style={{ fontSize: '10px', paddingLeft: '15px' }}>01</span>
              <h6 className="text-uppercase fw-bold detail-header-1">
                WHY US?
              </h6>
              <p className="detail-text-2 mt-5 me-5 pe-5">
                We pride ourselves in our ability to innovate and create
                world-class tools that provide reliable and efficient
                touchpoints between advertisers and affiliates.
              </p>
              <img
                src={dots}
                alt="design-dots"
                style={{ marginTop: '100px' }}
              />
            </div>
            <div className="col-lg-6 ps-5">
              <span style={{ fontSize: '10px', paddingLeft: '15px' }}>01</span>
              <h6 className="text-uppercase fw-bold detail-header-1">
                Growing with you
              </h6>
              <p className="detail-text-2 mt-5 ms-5">
                Leveraging the best technology, we have developed an all-in-one
                affiliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influencer campaigns, all from
                one dashboard.
              </p>
              <p className="detail-text-2 mt-5 ms-5">
                Our team of experts are constantly brainstorming, testing and
                developing new solutions with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="question-request-section">
        <div className="behind-content-3"></div>
        <div className="main-question-request-section">
          <h1>Got a Question?</h1>
          <p className="mt-4" style={{ lineHeight: '30px' }}>
            See how Metricks can help your business grow with best Affiliate
            Marketing Tracking <br /> Software.
          </p>
          <strong style={{ color: 'var(--purple-light)' }}>Contact Us</strong>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default AboutPage;
