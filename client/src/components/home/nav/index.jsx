import React from 'react';

const NavBar = () => {
  return (
    <div className="nav__bar">
      <a href="/">discor</a>

      <div className="search__bar">
        <form>
          <label htmlFor="search">
            <input type="text" placeholder="Search for people, events, and more..." name="search" />
          </label>
        </form>
      </div>

      <div className="user__icon">
        <img src="" alt="notifications" />
        <img src="" alt="user img" />
      </div>
    </div>
  );
};

export default NavBar;
