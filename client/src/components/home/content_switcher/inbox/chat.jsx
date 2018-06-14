import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Chat extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { socket } = this.props;

    socket.on('connect', () => {
      socket.emit('client.ready', socket.id);
    });
  }

  render() {
    return (
      <div className="chat">
        <h3>Chat room</h3>
      </div>
    );
  }
}

Chat.propTypes =  {
  socket: PropTypes.object.isRequired,
  // username: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.username__store.username,
  };
};

export default connect(mapStateToProps)(Chat);
