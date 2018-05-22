import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <div className="links">
    <h3>Links Component</h3>
    <ul>
      <li><Link to="/home">Show Feed</Link></li>
      <li><Link to="/home/people">Show People</Link></li>
      <li><Link to="/home/inbox">Show Inbox</Link></li>
      <li><Link to="/home/premium">Show Premium</Link></li>
      <li><Link to="/home/settings">Show Settings</Link></li>
    </ul>
  </div>
);

export default Links;
