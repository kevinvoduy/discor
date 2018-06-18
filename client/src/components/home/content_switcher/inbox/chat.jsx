import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './chat.sass';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: '',
      messages: [
        {
          name: 'kevinvo1234',
          message: 'hello',
        },
        {
          name: 'donnie',
          message: 'hi back',
        }
      ],
      message: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const { socket } = this.props;

    socket.on('connect', () => {
      socket.emit('client.ready', socket.id);
      this.setState({ socket: socket });
    });
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendMessage(e) {
    e.preventDefault();
    if (this.state.message === '') return;

    // append message to chat
    this.props.socket.on('chat.message', message => {
      console.log('emitted message:', message);
      this.setState({
        messages: [...this.state.messages, message],
      });
    });

    // emit message to everyone else
    this.props.socket.emit('chat.message', this.state.message);

    // resets
    this.setState({ message: '' });
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div className="chat">
        <h3>Room ID: {this.state.socket.id}</h3>
        <div className="chat__room">

          <div className="message__area">
            <ul id="chatroom">
              {
                this.state.messages.map(message => {
                  if (message.name === this.props.username) {
                    return (
                      <li className="message my__message">{message.message}</li>
                    );
                  }
                  else {
                    return (
                      <li className="message other__message">{message.message}</li>
                    );
                  }
                })
              }
            </ul>
          </div>

          <div className="submit__message">
            <form id="form">
              <input type="text" name="message" onChange={this.onChangeHandler} />
              <input type="submit" value="send" onClick={this.sendMessage} />
            </form>
          </div>

        </div>
      </div>
    );
  }
}

Chat.propTypes =  {
  socket: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.username__store.username,
  };
};

export default connect(mapStateToProps)(Chat);
