import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import saveUsernameAction from '../../redux/actions/usernameAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.logState = this.logState.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
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

  authenticateUser() {
  }

  render() {
    return (
      <div className="login__page" >
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

          <button onClick={this.logState}>State</button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  saveUsername: PropTypes.func.isRequired,
  username: PropTypes.string,
};

Login.defaultProps = {
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

export default connect(mapStateToProps, matchDispatchToProps)(Login);
