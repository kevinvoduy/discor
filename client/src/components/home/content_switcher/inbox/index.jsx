import React from 'react';
import io from 'socket.io-client';
import { Switch, Route } from 'react-router-dom';

import Messages from './messages/messages';
import Chat from './chat/chat';
import url from '../../../globals/urlPrefix';

class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: null,
    };
  }

  componentWillMount() {
    const socket = io.connect(`http://${url.sockServer}`);
    this.setState({ socket: socket });
  }


  render() {
    return (
      <Switch>
        <Route path="/chat" render={() => <Chat socket={this.state.socket} />} />
        <Route path="/inbox" component={Messages} />
      </Switch>
    );
  }
}


export default Inbox;