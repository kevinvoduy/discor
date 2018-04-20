import db from '../../config/database/pg';
import { addUsername, addPassword } from './authSQLHelpers';
import {
  error,
  database,
 } from '.././../lib/logger';

const signupQuery = async(payload) => {
  try {
    // add username to users table, returns id
    const usernameQuery = addUsername(payload);
    const { rows: [{ id }] } = await db.queryAsync(usernameQuery);

    // adds password to credentials table
    const passwordQuery = addPassword(id, payload);
    const pw = await db.queryAsync(passwordQuery);

    database('queries - called db to sign up user');
    return pw;
  } catch(err) {
    error('queries - failed to add user to db -', err);
  }
};

export default signupQuery;
