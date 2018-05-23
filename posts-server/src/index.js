import http from 'http';
import App from './config/express';
import './config/mongo';

if (process.env.NODE_ENV !== 'production') {
	require('babel-register');
	require('babel-polyfill');
}

import { success, database } from '../src/lib/logger';

const app = App.express;
const server = http.createServer(app);
const PORT = process.env.PORT || 3030;

server.listen(PORT, err => {
  if (err) throw new Error;
  else console.log('successfully connected to posts server:', PORT);
});

export default app;