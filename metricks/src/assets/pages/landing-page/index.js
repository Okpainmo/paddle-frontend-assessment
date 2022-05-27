import React from 'react';
import RoundedBase from './components/RoundedBase';
// import logo from '../../images/metricks-logo_purple-bg.png';
// import { Link } from 'react-router-dom';

import { useState } from 'react';
import Navbar from '../../global-components/Navbar';

function LandingPage() {
  const [show, setShow] = useState(false);

  // close contact pop-up

  function hideContactPage() {
    setShow(!show);
    console.log('setshow is good');
  }

  function showContactPage() {
    setShow(!show);
    console.log('setshow is good');
  }

  return (
    <>
      {/* contact section */}

      <section
        className="contact flex-row"
        style={{ display: show ? 'flex' : 'none' }}
      >
        <aside className="glass-effect w-50"></aside>
        <section className="form-section w-50">
          <button className="close-button" onClick={hideContactPage}>
            <i className="bi bi-arrow-right fs-3"></i>
          </button>
          <h3 className="w-75 text-center ms-5">
            Hey, we are still in the works, <br /> but you can send us a
            message!
          </h3>
          <form action="log.com" className="w-75">
            <div className="form-group mt-5">
              <label htmlFor="first-name">First name</label>
              <input
                id="first-name"
                type="text"
                className="form-control mt-3"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="last-name">Last name</label>
              <input
                id="last-name"
                type="text"
                className="form-control mt-3"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                type="text"
                className="form-control mt-3"
                name="emailAddress"
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="help">Tell us what you need help with</label>
              <textarea
                id="help"
                type="text"
                className="form-control mt-3"
                name="Help"
                placeholder="Enter a topic like, 'channel problem...'"
                rows="6"
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-lg text-white text-uppercase mt-5 rounded-pill fs-5s"
            >
              Send Now
            </button>
          </form>
        </section>
      </section>

      <main className="container-fluid landing-page">
        {/* navbar */}

        <Navbar showContactPage={showContactPage} />

        {/* main landing page content */}

        <section className="banner">
          <div className="lead-text fs-1 text-center mt-5 pt-4 text-uppercase fw-bold">
            Something awesome is <br /> coming soon
          </div>
          <div className="follow-up-text text-center mt-3">
            Your all-in-one affiliate marketing tracking software{' '}
            <span className="fw-bold">track</span>,{' '}
            <span className="fw-bold">automate</span> and <br />
            <span className="fw-bold">optimize</span> your campaigns.
          </div>
          <section className="counter d-flex justify-content-center">
            <div className="counter-wrapper d-flex gap-3">
              <div className="counter-card">
                <div className="count">7</div>
                <span className="text">Days</span>
              </div>
              <div className="counter-card">
                <div className="count">24</div>
                <span className="text">Hours</span>
              </div>
              <div className="counter-card">
                <div className="count">54</div>
                <span className="text">Minutes</span>
              </div>
              <div className="counter-card">
                <div className="count">11</div>
                <span className="text">Seconds</span>
              </div>
            </div>
          </section>
          <section className="banner-forms d-flex justify-content-center flex-wrap">
            <form action="ogg.com">
              <div className="form-group d-flex justify-content-center">
                <input type="text" placeholder="first name" className="me-4" />
                <input type="text" placeholder="last name" className="ms-4" />
              </div>

              {/* waitlist input */}
              <div className="waitlist-input-wrapper rounded-pill">
                <input
                  type="email"
                  placeholder="enter your email address"
                  className="waitlist-input"
                />

                {/* submit button */}
                <button className="waitlist-input-button btn rounded-pill text-uppercase">
                  join our waiting list
                </button>
              </div>
            </form>
          </section>
        </section>
        <RoundedBase />
      </main>
    </>
  );
}

export default LandingPage;
