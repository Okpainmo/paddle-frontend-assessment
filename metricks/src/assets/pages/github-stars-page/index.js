import React, { useEffect, useState } from 'react';
import Footer from '../../global-components/Footer';
import Navbar from '../../global-components/Navbar';
import Repository from './components/Repository';
import whitelogo from '../../images/metricks-logo_purple-bg.png';

function GithubStarsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const url =
    'https://api.github.com/search/repositories?q=created:>2022-04-23&sort=stars&order=desc';

  async function getProfiles() {
    const response = await fetch(url);
    const loadRepos = await response.json();
    setRepos(loadRepos);
  }

  useEffect(
    function () {
      getProfiles();
      if (repos.length === 0) {
        return setLoading(true);
      } else {
        return setLoading(false);
      }
    },
    [repos.length]
  );

  return (
    <main className="github-page">
      <Navbar navLogo={whitelogo} />
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
      <section className="repo-wrapper mb-5 pb-4">
        <h1 className="mb-5 fw-bold ps-5 border-start border-5">
          Top 60 Repositories
        </h1>
        <div className="first-repo-wrapper">
          {loading ? (
            <div style={{ padding: '15px 0' }}>Loading repositories...</div>
          ) : (
            <Repository repository={repos} />
          )}
        </div>
        {/* <div className="second-repo-wrapper">
          {loading ? (
            <div style={{ padding: '15px 0' }}>Loading repositories...</div>
          ) : (
            <Repository repository={repos} />
          )}
        </div> */}
        <div className="load-more-repositories-btn text-center pt-3">
          <button className="btn fs-5">Load more repositories</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default GithubStarsPage;
