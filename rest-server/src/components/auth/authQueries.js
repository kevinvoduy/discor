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
    const usernameQuery =  addUsername(payload);
    const { rows: [{ id }] } = await db.queryAsync(usernameQuery);

    // adds password to credentials table
    const passwordQuery = addPassword(id, payload);
    await db.queryAsync(passwordQuery);

  } catch(err) {
    database('queries - failed to add user to db');
    throw new Error('queries - failed to add user to db', 'use different username');
  }
};

export default signupQuery;