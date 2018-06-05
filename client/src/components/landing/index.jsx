import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import LandingNav from './nav';
import Signup from './signup';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.redirectHome = this.redirectHome.bind(this);
  }

  redirectHome() {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="landing__page">
        <LandingNav />
        <Signup redirectHome={this.redirectHome} />
      </div>
    );
  }
}

Landing.propTypes = {
  history: PropTypes.object,
};

Landing.defaultProps = {
  history: {},
};

export default withRouter(Landing);