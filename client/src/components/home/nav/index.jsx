import React from 'react';
import './nav.sass';

const NavBar = () => {
  return (
    <div className="nav__bar">
      <a href="/">discor</a>

      <div className="search__bar">
        <img src="https://www.freefavicon.com/freefavicons/animal/dou-shou-qi-dog-152-194532.png" alt="search" />
        <form autoComplete="off">
          <label htmlFor="search">
            <input type="text" placeholder="Search for people, events, and more..." name="search" />
          </label>
        </form>
      </div>

      <div className="user__icon">
        <img id="notification" src="https://www.freefavicon.com/freefavicons/animal/dou-shou-qi-dog-152-194532.png" alt="notifications" />
        <img id="user__image" src="https://www.freefavicon.com/freefavicons/animal/dou-shou-qi-dog-152-194532.png" alt="user img" />
      </div>
    </div>
  );
};

export default NavBar;
