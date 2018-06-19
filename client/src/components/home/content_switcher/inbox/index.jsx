import React from 'react';
import io from 'socket.io-client';
import moment from 'moment';

import ErrorBoundary from '../../../globals/errorHandler';
import messages from './inbox.json';
import './inbox.sass';

class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: null,
      messages: messages,
    };
    this.reply = this.reply.bind(this);
    this.showUnreadMessages = this.showUnreadMessages.bind(this);
  }

  componentWillMount() {
    const socket = io('http://localhost:3033');
    this.setState({ socket: socket });
  }

  reply() {
    console.log('hello');
  }

  showUnreadMessages() {
    if (messages.filter(i => i.status == 'New').length > 0) {
      return '(' + (messages.filter(i=>i.status === 'New')).length + ')';
    } else {
     return '';
    }
  }

  render() {
    return (
      <div className="inbox">
        <ErrorBoundary>
          <div className="header">
            <div className="inbox__heading">
              <h3>Inbox {this.showUnreadMessages()}</h3>
            </div>
            <div className="new__message">
              <button>+ New Message</button>
            </div>
          </div>

          <div className="messages">
            {
              this.state.messages.map(message => {
                return (
                  <div className="message" key={message.id} onClick={this.reply} onKeyUp={this.reply} role="menuitem" tabIndex="0">

                    <div className="icon">
                      <img src={message.userImg} alt="ico" />
                    </div>

                    <div className="name">
                      <p>{message.name}</p>
                      <p style={{ color: 'silver', fontSize: '14px' }}>{message.status}</p>
                    </div>

                    <div className="details">
                      <p>{message.subject}</p>
                      <p style={{ color: 'silver', fontSize: '14px' }}>{(message.content.length <= 70) ? message.content : message.content.slice(0, 70)+ '...' }</p>
                    </div>

                    <div className="meta">
                      <p>{moment(message.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow()}</p>
                    </div>

                    <div className="show__more">
                      <img src="assets/more.png" alt="ico" />
                    </div>

                  </div>
                );
              })
            }
          </div>

          <div className="pages">
            <div className="page__text">
              <p>Showing 0-{messages.length} out of {messages.length}</p>
            </div>
            <div className="pagenation">
              <a href="/home">1</a>
              <a href="/home">2</a>
              <a href="/home">3</a>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}


export default Inbox;