import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import saveUsernameAction from '../../../redux/actions/signupAction';
import setLoginStateAction from '../../../redux/actions/authToggleAction';

import './cta.sass';

class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.userSignup = this.userSignup.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
        new Error('Failed to sign up');
      });
  }

  render() {
    return (
      <div className="cta">
        <div className="left">
          <div className="cta__words">
            <p id="cta__headline">Join the <span style={{ fontWeight: 500 }}>many users</span><br />from all over the world</p>
            <p id="cta__details">Quisque pharetra et lorem et aliquet. In nec erat at risus blandit ullamcorper. Quisque gravida turpis sit amet fermentum lacinia. Nullam ac posuere quam. Integer vitae nibh elit.</p>
          </div>

          <div className="cta__form">
            <form id="form">
              <label htmlFor="username">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.onChangeHandler}
                />
              </label>

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
          </div>
        </div>

        <div className="cta__image">
          <img src="http://i0.wp.com/kingoftheflatscreen.com/wp-content/uploads/2017/11/2nhauwhr.jpg?w=1200" alt="" />
        </div>
      </div>
    );
  }
}

CTA.propTypes = {
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

export default connect(mapStateToProps, matchDispatchToProps)(CTA);
