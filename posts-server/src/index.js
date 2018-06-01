import http from 'http';
import SocketIO from 'socket.io';
import App from './config/express';
import './config/mongo';
import { Socket } from 'dgram';

if (process.env.NODE_ENV !== 'production') {
	require('babel-register');
	require('babel-polyfill');
}

const app = App.express;
const server = http.Server(app);
const io = new SocketIO(server);
const PORT = process.env.PORT || 3030;

io.on('connection', socket => {
	socket.on('new__post', post => {
		console.log('socket - new post:', post);
		io.broadcast.emit('new__post')
	});
});

server.listen(PORT, err => {
	if (err) throw new Error;
	else console.log('successfully connected to posts server:', PORT);
});

export default app;