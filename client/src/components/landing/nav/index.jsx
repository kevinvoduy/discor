import React from 'react';

import './nav.sass';

const LandingNav = () => (
  <div className="landing__nav">
    <div className="logo">
      <a href="/">discor</a>
    </div>
    <div className="landing__links">
      <a>Features</a>
      <a>How It Works</a>
      <a>About</a>
    </div>
  </div>
);

export default LandingNav;
