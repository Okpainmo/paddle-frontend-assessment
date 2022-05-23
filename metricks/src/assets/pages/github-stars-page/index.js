import React from 'react';
import Navbar from '../../global-components/Navbar';
import Repository from './components/Repository';

function GithubStarsPage() {
  return (
    <main className="github-page">
      <Navbar />
      <section className="main-top">
        {/* elements for implementing glassmorphism effect */}
        <div className="glass-bg-1"></div>
        <div className="behind-content-1"></div>

        {/* main content */}
        <section className="page-intro">
          <div className="about mb-4">GITHUB FOR METRICKS</div>
          <h1>
            A peep into the most starred <br /> repositories on github <br />
            in the last 30 days.
          </h1>
        </section>
      </section>
      <Repository />
    </main>
  );
}

export default GithubStarsPage;
