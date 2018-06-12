import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import saveUsernameAction from '../../../redux/actions/signupAction';
import setLoginStateAction from '../../../redux/actions/authToggleAction';

import './signup.sass';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.bypassSignup = this.bypassSignup.bind(this);
    this.userSignup = this.userSignup.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  bypassSignup() {
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
        throw new Error('Failed to sign up user');
      });
  }

  render() {
    return (
      <div className="login__page" >
        <div className="form__container">
          <p id="headline">Whole world<br />in one single App</p>
          <p id="small__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus sodales arcu vel eleifend.</p>
          <form id="signup__form">
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
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChangeHandler}
              />
            </label>
          </form>

          <button onClick={this.userSignup}>Sign Up</button>
          <button onClick={this.bypassSignup}>Skip</button>
        </div>

        <div className="hero__image">
          <img src="/assets/black.png" alt="" />
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
