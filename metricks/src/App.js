import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollHandler from './assets/super-components/ScrollHandler';

// pages

import LandingPage from './assets/pages/landing-page/index';
import AboutPage from './assets/pages/about-us-page';
import GithubStarsPage from './assets/pages/github-stars-page';
import ContactPage from './assets/pages/contact-us-page';
import BlogHomePage from './assets/pages/blog-home-page';
import BlogPostPage from './assets/pages/blog-post-page';

function App() {
  return (
    <div>
      <ScrollHandler>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogHomePage />} />
          <Route path="/post" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/github" element={<GithubStarsPage />} />
        </Routes>
      </ScrollHandler>
    </div>
  );
}

export default App;
