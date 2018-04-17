import db from '../../config/database/pg';
import {
  success,
  error,
} from '../logger';

require('dotenv').config();

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success('successfully created db', database);
  } catch(err) {
    error('failed to create db', err);
  }
};

const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success('successfully dropped db', database);
  } catch(err) {
    error('failed to drop db');
  }
};

const useDatabase = async () => {
  try {
    await db.queryAsync(
      `USE IF EXISTS ${database}`
    );
    success('successfully used db', database);
  } catch(err) {
    error('failed to use db', database);
  }
};

export default { createDatabase, dropDatabase, useDatabase };