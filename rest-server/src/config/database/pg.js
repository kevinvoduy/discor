import { Pool } from 'pg';
import Promise from 'bluebird';

import {
  success,
} from '../../lib/logger';

require('dotenv').config();

const config = {
  user: process.env.NODE_ENV === 'production' ? process.env.AWS_USER : process.env.LOCAL_USER,
  serverName: process.env.NODE_ENV === 'production' ? process.env.AWS_HOST : process.env.LOCAL_HOST,
  databaseName: process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : 'postgres',
  password: process.env.NODE_ENV === 'production' ? process.env.AWS_PASSWORD : process.env.LOCAL_PASSWORD,
  portNumber: process.env.NODE_ENV === 'production' ? process.env.AWS_PORT : process.env.LOCAL_PORT,
  maxConnection: 10
};

const db = new Pool(config);

db.on('connect', () => {
  success('successfully connected to PostgreSQL:', process.env.LOCAL_DATABASE);
});

db.on('error', err => {
  new Error('psql error -', err);
});

db.connect(err => {
  if (err) throw err;
  success('psql success');
});

Promise.promisifyAll(db);

export default db;