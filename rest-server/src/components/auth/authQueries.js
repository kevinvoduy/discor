import db from '../../config/database/pg';
import {
  addUsername,
  addPassword,
} from './authSQLHelpers';
import {
  database,
 } from '.././../lib/logger';

const signupQuery = async(payload) => {
  try {
    // add username to users table, returns id
    const usernameQuery = addUsername(payload);
    const { rows: [{ id }] } = await db.queryAsync(usernameQuery);

    // adds password to credentials table
    const passwordQuery = addPassword(id, payload);
    const query = await db.queryAsync(passwordQuery);

    database('queries - called db to sign up user');
    return { id, query };
  } catch(err) {
    throw new Error('queries - failed to add user to db', 'user different username');
  }
};

export default signupQuery;