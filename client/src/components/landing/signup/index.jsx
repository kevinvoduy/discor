import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import saveUsernameAction from '../../../redux/actions/signupAction';
import setLoginStateAction from '../../../redux/actions/authToggleAction';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.logState = this.logState.bind(this);
    this.userSignup = this.userSignup.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  logState() {
    // bypass signup
    this.props.redirectHome();
  }

  userSignup() {
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };
    axios.post('/api/auth/signup', payload)
      .then(() => {
        // save username to redux
        this.props.saveUsername(this.state.username);
        this.props.setLoginState(true);
        this.props.redirectHome();
      })
      .catch(() => {
        throw new Error('Username already in use');
      });
  }

  render() {
    return (
      <div className="login__page" >
        <h1>Signup</h1>
        <div className="form__container">
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

          <button onClick={this.userSignup}>Sign Up</button>
          <button onClick={this.logState}>Skip</button>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  saveUsername: PropTypes.func.isRequired,
  redirectHome: PropTypes.func.isRequired,
  setLoginState: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.username__store.username,
    isLoggedIn: state.isLoggedIn__store.isLoggedIn,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    saveUsername: saveUsernameAction,
    setLoginState: setLoginStateAction,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Signup);
