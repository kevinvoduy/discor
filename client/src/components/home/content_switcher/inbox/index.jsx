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
  }

  componentWillMount() {
    const socket = io('http://localhost:3033');
    this.setState({ socket: socket });
  }

  render() {
    const levy = 'https://frostsnow.com/uploads/biography/2017/11/16/levy-tran.gif';

    return (
      <div className="inbox">
        <ErrorBoundary>
          <div className="header">
            <div className="inbox__heading">
              <h3>Inbox (2)</h3>
            </div>
            <div className="new__message">
              <button>+ New Message</button>
            </div>
          </div>

          <div className="messages">
            {
              this.state.messages.map(message => {
                return (
                  <div className="message" key={message.id}>
                    <div className="icon">
                      <img src={message.userImg} alt="ico" />
                    </div>
                    <div className="name">
                      <p><strong>{message.name}</strong></p>
                      <p style={{ color: 'Tomato' }}>{message.status}</p>
                    </div>
                    <div className="details">
                      <p><strong>{message.subject}</strong></p>
                      <p>{(message.content.length<60) ? message.content : message.content.slice(0, 60)+ '...' }</p>
                    </div>
                    <div className="meta">
                      <p>{moment(message.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow()}</p>
                    </div>
                    <div className="show__more">
                      <img src="" alt="ico" />
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