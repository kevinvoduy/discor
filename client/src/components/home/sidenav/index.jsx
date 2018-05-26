import React from 'react';
import { Link } from 'react-router-dom';

import './sidenav.sass';

const Links = () => (
  <div className="links">
    <ul>
      <li>
        <img src='assets/favorite.png' alt="" />
        <Link to="/home">Feed</Link>
      </li>
      <li>
        <img src='assets/delivery-man.png' alt="" />
        <Link to="/home/people">People</Link>
      </li>
      <li>
        <img src='assets/email.png' alt="" />
        <Link to="/home/inbox">Inbox</Link>
      </li>
      <li>
        <img src='assets/crown.png' alt="" />
        <Link to="/home/premium">Premium</Link>
      </li>
      <li>
        <img src='assets/interface.png' alt="" />
        <Link to="/home/settings">Settings</Link>
      </li>
    </ul>
  </div>
);

export default Links;
