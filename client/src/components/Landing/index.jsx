import React, { Component } from 'react';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div className="landing__page" >
        <div className="login">
          <form>
            <label htmlFor="username">
              <input type="text" name="username" placeholder="Username" />
            </label>

            <br/>

            <label htmlFor="password">
              <input type="text" name="password" placeholder="Password" />
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default Landing;
