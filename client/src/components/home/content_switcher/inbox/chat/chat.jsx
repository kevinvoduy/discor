import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';

import Profile from './profile';
import './chat.sass';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: '',
      messages: [
        {
          id: 1,
          name: 'kevinvoduy',
          message: 'Im dark blue',
          createdAt: '2018-07-19 18:10:34',
        },
        {
          id: 2,
          name: 'guest',
          message: 'Theyre light blue',
          createdAt: '2018-07-19 18:25:34',
        }
      ],
      message: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const { socket } = this.props;

    // est. socket connection
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
    socket.emit('chat.message', { name: 'kevinvoduy', message: this.state.message });

    // resets
    this.setState({ message: '' });
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div className="main">
        <div className="chat">

          <div className="chat__header">
            <Link to="/inbox" href="/inbox"><button onClick={this.goBack}>{'<'}</button></Link>
            <h3>Client ID: {this.state.socket.id}</h3>
          </div>

          <div className="chat__room">
            <div className="message__area">
              {
                this.state.messages.map(message => {
                  if (message.name === this.props.username) {
                    return (

                      <div className="message my__message" key={message.id}>
                        <div className="message__header">
                          <h5 style={{ marginRight: '4em' }}>{message.name}</h5>
                          <h5>{moment(message.createdAt).format('h:mm a')}</h5>
                        </div>
                        {message.message}
                      </div>

                    );
                  }
                  else {
                    return (

                      <div className="message other__message" key={message.id}>

                        <div className="message__header">
                          <h5 style={{ marginRight: '4em' }}>{message.name}</h5>
                          <h5>{moment(message.createdAt).format('h:mm a')}</h5>
                        </div>
                        <p>{message.message}</p>
                      </div>

                    );
                  }
                })
              }
            </div>

            <div className="submit__message">
              <form id="form" autoComplete='off'>
                <input
                  type="text"
                  name="message"
                  id="input"
                  placeholder="Write something..."
                  onChange={this.onChangeHandler}
                />
                <input
                  type="submit"
                  value="send"
                  id="submit"
                  onClick={this.sendMessage}
                />
              </form>
            </div>

          </div>
        </div>

        <div className="profile">
          <Profile />
        </div>
      </div>
    );
  }
}

Chat.propTypes =  {
  socket: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  // room: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.username__store.username,
  };
};

export default withRouter(connect(mapStateToProps)(Chat));
