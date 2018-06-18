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
          name: 'kevin',
          message: 'Im dark blue',
        },
        {
          name: 'guest',
          message: 'Theyre light blue',
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

    // appends messages to chat
    socket.on('chat.broadcast.message', message => {
      this.setState({
        messages: [ ...this.state.messages, { name: message.name, message: message.message }],
      });
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
    const { socket } = this.props;

    // emit message to everyone else
    socket.emit('chat.message', { name: 'kevin', message: this.state.message });

    // resets
    this.setState({ message: '' });
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div className="chat">
        <h3>Client ID: {this.state.socket.id}</h3>
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
