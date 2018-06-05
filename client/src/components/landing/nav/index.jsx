import React from 'react';

import './nav.sass';

const LandingNav = () => (
  <div className="landing__nav">
    <div className="logo">
      <a href="/">discor</a>
    </div>
    <div className="landing__links">
      <a href="/">Features</a>
      <a href="/">How It Works</a>
      <a href="/">About</a>
    </div>
  </div>
);

export default LandingNav;
