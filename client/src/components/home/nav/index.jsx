import React from 'react';
import './nav.sass';

const NavBar = () => {
  return (
    <div className="nav__bar">
      <a href="/">discor</a>

      <div className="search__bar">
        <img src="assets/search.svg" alt="search" id="search__icon" />
        <form autoComplete="off">
          <label htmlFor="search">
            <input type="text" placeholder="Search for people, events, and more..." name="search" />
          </label>
        </form>
      </div>

      <div className="user__icon">
        <img src="/assets/user.svg" alt="user img" id="user__image" />
      </div>
    </div>
  );
};

export default NavBar;
