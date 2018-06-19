import React from 'react';
import io from 'socket.io-client';

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
            <div className="message">
              <div className="icon">
                <img src={levy} alt="ico" />
              </div>
              <div className="name">
                <p><strong>Kevin Vo</strong></p>
                <p style={{ color: 'Tomato' }}>Unread</p>
              </div>
              <div className="details">
                <p><strong>We need the lease documents</strong></p>
                <p>Hi there Justin, we would like to get our lease...</p>
              </div>
              <div className="meta">
                <p>20 min ago</p>
              </div>
              <div className="show__more">
                <img src="" alt="ico" />
              </div>
            </div>

            <div className="message">
              <div className="icon">
                <img src={levy} alt="ico" />
              </div>
              <div className="name">
                <p><strong>Kevin Vo</strong></p>
                <p style={{ color: 'lawngreen' }}>Replied</p>
              </div>
              <div className="details">
                <p><strong>We need the lease documents</strong></p>
                <p>Hi there Justin, we would like to get our lease...</p>
              </div>
              <div className="meta">
                <p>20 min ago</p>
              </div>
              <div className="show__more">
                <img src="" alt="ico" />
              </div>
            </div>

            <div className="message">
              <div className="icon">
                <img src={levy} alt="ico" />
              </div>
              <div className="name">
                <p><strong>Kevin Vo</strong></p>
                <p style={{ color: 'gray' }}>Read</p>
              </div>
              <div className="details">
                <p><strong>We need the lease documents</strong></p>
                <p>Hi there Justin, we would like to get our lease...</p>
              </div>
              <div className="meta">
                <p>20 min ago</p>
              </div>
              <div className="show__more">
                <img src="" alt="ico" />
              </div>
            </div>
          </div>

          <div className="pages">
            <div className="page__text">
              <p>Showing 0-6 out of 24</p>
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