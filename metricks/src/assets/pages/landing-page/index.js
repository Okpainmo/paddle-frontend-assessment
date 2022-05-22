import React from 'react';
import Footer from './components/Footer';

function LandingPage() {
  return (
    <>
      <main className="container-fluid landing-page">
        <section className="banner">
          <div className="lead-text fs-1 text-center mt-5 text-uppercase fw-bold">
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
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
