import React, { Component } from 'react';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.logState = this.logState.bind(this);
  }

  logState() {
    console.log('state', this.state);
  }

  render() {
    return (
      <div className="landing__page" >
        <div className="login">
          <form>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={e => this.state.username = e.target.value}
              />
            </label>

            <br/>

            <label htmlFor="password">
              <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={e => this.state.password = e.target.value}
              />
            </label>
          </form>

          <button onClick={this.logState}>State</button>
        </div>
      </div>
    )
  }
}

export default Landing;
