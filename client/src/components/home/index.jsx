import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import setLoginStateAction from '../../redux/actions/authToggleAction';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.setLoginState(false);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="home__page">
        <h1>Home Page</h1>
        <h3>{'You\'ve made it pass the router!'}</h3>
        <h3>GOOD JOB!!!</h3>
        <button onClick={this.logOut} >Log out</button>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
  setLoginState: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn__store.isLoggedIn,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setLoginState: setLoginStateAction,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Home);
