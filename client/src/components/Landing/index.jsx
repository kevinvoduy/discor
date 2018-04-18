import React from 'react';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.logState = this.logState.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
                onChange={this.onChangeHandler}
              />
            </label>

            <br />

            <label htmlFor="password">
              <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={this.onChangeHandler}
              />
            </label>
          </form>

          <button onClick={this.logState}>State</button>
        </div>
      </div>
    );
  }
}

export default Landing;
