import signupQuery from './authQueries';
import {
  success,
  error,
 } from '../../lib/logger';

const signupController = async(req, res) => {
  try {
    // adds username to db
    const result = await signupQuery(req.body);

    // validate username

    // validate password

    success('controller - successfully signed up user :', req.body.username);
    res.status(200).send(result);
  } catch (err) {
    error('failed to authenticate user', err);
  }
};

export default signupController;
