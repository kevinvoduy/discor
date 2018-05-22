import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <div className="links">
    <h4>Links Component</h4>
    <ul>
      <li><Link to="/home">Show Feed</Link></li>
      <li><Link to="/home/people">Show People</Link></li>
    </ul>
  </div>
);

export default Links;
