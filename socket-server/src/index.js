import http from 'http';
import SocketIO from 'socket.io';
import { each } from 'lodash';

import clientEvents from './clientEvents';
import log from './lib/log';

require('dotenv').config();

const server = http.Server();
const io = SocketIO(server);
const PORT = process.env.PORT || 3033;

io.on('connection', client => {
  client.removeAllListeners;
  // log('socket-server - client connected');

  each(clientEvents, (handler, event) => {
    client.on(event, handler.bind(null, { io, client }))
  })
});

server.listen(PORT, err => {
  if (err) throw new Error;
  else log('Successfully connected to socket-server:', PORT);
});