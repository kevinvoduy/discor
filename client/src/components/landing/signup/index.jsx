import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import saveUsernameAction from '../../../redux/actions/signupAction';

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
    this.props.saveUsername(this.state.username);
    console.log('state', this.state, '\nstore', this.props.username);
  }

  userSignup() {
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };

    axios.post('/api/auth/test', payload)
      .then(res => {
        this.props.saveUsername(this.state.username);
        this.props.redirectHome();
        console.log('User added to db', res);
      })
      .catch(err => {
        console.log('failed to sign up user\n', err);
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

          <button onClick={this.userSignup}>State</button>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  saveUsername: PropTypes.func.isRequired,
  username: PropTypes.string,
  redirectHome: PropTypes.func.isRequired,
};

Signup.defaultProps = {
  username: null,
};

const mapStateToProps = state => {
  return {
    username: state.username__store.username,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    saveUsername: saveUsernameAction,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Signup);
