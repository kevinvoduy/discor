import uuidv4 from 'uuid/v4';
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
    const id = uuidv4();
    const usernameQuery =  addUsername(payload, id);
    const { rows: [{ uuid }] } = await db.queryAsync(usernameQuery);

    // adds password to credentials table
    const passwordQuery = addPassword(uuid, payload);
    await db.queryAsync(passwordQuery);
    return 'Success. User added!';
  } catch(err) {
    database('queries - failed to add user to db', err);
    new Error('queries - failed to add user to db');
  }
};

export default signupQuery;