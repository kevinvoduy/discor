import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <div className="links">
    <h4>Links Component</h4>
    <ul>
      <li>
        <Link to="/home/feed">Show Feed</Link>
      </li>
    </ul>
  </div>
);

export default Links;
