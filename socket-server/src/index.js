import http from 'http';
import SocketIO from 'socket.io';
import log from './lib/log';

require('dotenv').config();

const server = http.Server();
const io = SocketIO(server);
const PORT = process.env.PORT || 3033;

io.on('connection', client => {
  console.log('socket-server - Client Connected');
  client.on('hello', () => {
    console.log('Hell');
  });
});

server.listen(PORT, err => {
  if (err) throw new Error;
  else log('Successfully connected to socket-server:', PORT);
});