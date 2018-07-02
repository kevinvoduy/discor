import http from 'http';
import { each } from 'lodash';

import clientEvents from './clientEvents';
import log from './lib/log';

require('dotenv').config();

const server = http.Server();
const PORT = process.env.PORT || 3033;
const io = require('socket.io')(server,{ path: '/socket.io' });

io.sockets.on('connection', socket => {
  socket.removeAllListeners;
  console.log('socket server: client connected');

  each(clientEvents, (handler, event) => {
    socket.on(event, handler.bind(null, { io, socket }));
  });
});

io.origins('*:*');

server.listen(PORT, err => {
  if (err) throw new Error;
  else log('Successfully connected to socket-server:', PORT);
});