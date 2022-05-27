import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollHandler from './assets/global-components/ScrollHandler';
import Pager from './assets/global-components/Pager';

// pages

import LandingPage from './assets/pages/landing-page/index';
import AboutPage from './assets/pages/about-us-page';
import GithubStarsPage from './assets/pages/github-stars-page';
import ContactPage from './assets/pages/contact-us-page';
import BlogHomePage from './assets/pages/blog-home-page';
import BlogPostPage from './assets/pages/blog-post-page';

function App() {
  return (
    <>
      <ScrollHandler>
        <Pager>
          <Routes>
            {/* completed pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/github" element={<GithubStarsPage />} />

            {/* undone pages */}
            <Route path="/blog" element={<BlogHomePage />} />
            <Route path="/post" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Pager>
      </ScrollHandler>
    </>
  );
}

export default App;
