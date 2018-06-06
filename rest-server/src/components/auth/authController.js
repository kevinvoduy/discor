import signupQuery from './authQueries';
import {
  database,
 } from '../../lib/logger';

const signupController = async(req, res) => {
  try {
    // adds username to db
    const result = await signupQuery(req.body);
    database('controller - successfully signed up user :', req.body.username);

    return res.status(200).send(result);
  } catch (err) {
    database('controller - failed to sign up user:', err);
    return res.status(400).send('contoller - could not sign up user', err);
  }
};

export default signupController;
