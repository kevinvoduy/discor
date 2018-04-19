import db from '../../config/database/pg';
import signupSQLHelper from './authSQLHelpers';
import {
  success,
  error,
 } from '.././../lib/logger';

const signupQuery = async(payload) => {
  try {
    // add username to table
    const query = signupSQLHelper(payload);
    const result = await db.queryAsync(query);

    success('queries - called db to sign up user');
    return result;
  } catch(err) {
    error('queries - failed to add user to db -', err);
  }
};

export default signupQuery;
