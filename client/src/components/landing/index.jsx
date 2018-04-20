import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
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
      <div>
        <h1>Landing Page</h1>
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