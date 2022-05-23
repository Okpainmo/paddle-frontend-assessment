import React, { useEffect, useState } from 'react';
import Navbar from '../../global-components/Navbar';
import Repository from './components/Repository';

function GithubStarsPage() {
  const [repos, setRepos] = useState([]);

  const url =
    'https://api.github.com/search/repositories?q=created:>2022-04-23&sort=stars&order=desc';

  async function getProfiles() {
    const response = await fetch(url);
    const loadRepos = await response.json();
    setRepos(loadRepos);
  }

  useEffect(function () {
    getProfiles();
  }, []);

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
      <section className="repo-wrapper">
        <h1 className="mb-4 fw-bold">Repositories</h1>
        <Repository repository={repos} />
      </section>
    </main>
  );
}

export default GithubStarsPage;
