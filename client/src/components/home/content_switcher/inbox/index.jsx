import React from 'react';
import io from 'socket.io-client';

import Chat from './chat';
import './inbox.sass';

class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: null,
    };
  }

  componentWillMount() {
    const socket = io('http://localhost:3033');
    this.setState({ socket: socket });
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="inbox">
        <h3>Inbox Component</h3>
        <Chat socket={this.state.socket} />
      </div>
    );
  }
}


export default Inbox;