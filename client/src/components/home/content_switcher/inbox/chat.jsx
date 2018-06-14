import React from 'react';
import PropTypes from 'prop-types';

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
        <h5>{this.props.socket.id}</h5>
      </div>
    );
  }
}

Chat.propTypes =  {
  socket: PropTypes.object.isRequired,
};

export default Chat;
