import http from 'http';
import SocketIO from 'socket.io';
import App from './config/express';
import './config/mongo';

if (process.env.NODE_ENV !== 'production') {
	require('babel-register');
	require('babel-polyfill');
}

const app = App.express;
const server = http.Server(app);
const io = SocketIO(server);
const PORT = process.env.PORT || 3030;

io.on('connection', socket => {
	console.log('Client Connected');
	socket.on('new__post', post => {
		console.log('posts - broadcasting new post');
		socket.broadcast.emit('new__posts', post);
	});
});



server.listen(PORT, err => {
	if (err) throw new Error;
	else console.log('successfully connected to posts server:', PORT);
});

export default app;