import React from 'react';
import { Link } from 'react-router-dom';

import './sidenav.sass';

const Links = () => (
  <div className="links">
    <ul>
      <li>
        <img src='/assets/news.svg' alt="" />
        <Link to="/home" href="/home">Feed</Link>
      </li>
      <li>
        <img src='/assets/avatar.svg' alt="" />
        <Link to="/people" href="/people">People</Link>
      </li>
      <li id="notification">
        <img src='/assets/folder.svg' alt="" />
        <Link to="/inbox" href="/inbox">Inbox</Link>
      </li>

      <div className="divider" />

      <li>
        <Link to="/premium" href="premium">Go Premium</Link>
      </li>
      <li>
        <Link to="/settings" href="/settings">Settings</Link>
      </li>

      <div className="divider" />

    </ul>
  </div>
);

export default Links;
