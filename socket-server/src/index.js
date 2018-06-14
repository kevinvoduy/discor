import http from 'http';
import SocketIO from 'socket.io';

const server = http.Server();
const io = SocketIO(server);

io.on('connection', client => {
  client.removeAllListeners();
  console.log('Socket-server - Client Connected');
});

const PORT = process.env.PORT || 3033;
server.listen(PORT, err => {
  if (err) console.log('Failed to connect to Socket-Server', error);
  console.log('Successfully connected to socket-server:', PORT);
});