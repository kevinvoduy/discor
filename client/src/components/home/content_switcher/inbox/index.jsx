import React from 'react';
import io from 'socket.io-client';

import Chat from './chat';
import ErrorBoundary from '../../../globals/errorHandler';
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
        <ErrorBoundary>
          <Chat socket={this.state.socket} />
        </ErrorBoundary>
      </div>
    );
  }
}


export default Inbox;