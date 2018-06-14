import React from 'react';
import io from 'socket.io-client';

class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: null,
    };
  }

  componentWillMount() {
    const socket = io('http://localhost:3033');
    socket.emit('hello');
    this.setState({
      socket,
    });
  }

  render() {
    console.log('Socket id:', this.state.socket);
    return (
      <div className="inbox">
        <h3>Inbox Component</h3>
      </div>
    );
  }
}


export default Inbox;