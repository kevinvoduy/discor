
import http from 'http';
import path from 'path';

import App from './config/express';
import '../src/config/database/pg';

// this should be enabled in production
// import '../src/config/database/setup';

import { success } from '../src/lib/logger';

// if (process.env.NODE_ENV !== 'production') {
// 	require('babel-register');
// 	require('babel-polyfill');
// }

const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;


server.listen(PORT, err => {
	if (err) throw new Error;
	else success('successfully connected to server:', PORT);
});

// temp access
app.all('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../../client/public/index.html'));
});

module.exports = { app: app, serve: server };
