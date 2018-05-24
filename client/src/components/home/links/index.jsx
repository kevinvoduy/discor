import React from 'react';
import { Link } from 'react-router-dom';

import './links.sass';

const dog = 'https://www.freefavicon.com/freefavicons/animal/dou-shou-qi-dog-152-194532.png';

const Links = () => (
  <div className="links">
    <ul>
      <li>
        <img src={dog} alt="" />
        <Link to="/home">Feed</Link>
      </li>
      <li>
        <img src={dog} alt="" />
        <Link to="/home/people">People</Link>
      </li>
      <li>
        <img src={dog} alt="" />
        <Link to="/home/inbox">Inbox</Link>
      </li>
      <li>
        <img src={dog} alt="" />
        <Link to="/home/premium">Premium</Link>
      </li>
      <li>
        <img src={dog} alt="" />
        <Link to="/home/settings">Settings</Link>
      </li>
    </ul>
  </div>
);

export default Links;
