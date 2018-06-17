import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: ''
    };
  }

  componentDidMount() {
    const { socket } = this.props;

    socket.on('connect', () => {
      socket.emit('client.ready', socket.id);
      this.setState({ socket: socket });
    });
  }

  render() {
    return (
      <div className="chat">
        <h3>Room ID: {this.state.socket.id}</h3>
        <div className="chat__room">

          <div className="message__area">
            <div className="my_message">
              <p>This is from me</p>
            </div>
            <div className="other__message">
              <p>This is from somone else</p>
            </div>
          </div>

          <div className="submit__message">
            <form>
              <label htmlFor="input">
                <input placeholder="hey kevin" />
              </label>
              <button>Send</button>
            </form>
          </div>
        </div>
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
