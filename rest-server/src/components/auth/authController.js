import signupQuery from './authQueries';
import {
  database,
  error,
 } from '../../lib/logger';

const signupController = async(req, res) => {
  try {
    // adds username to db
    const result = await signupQuery(req.body);

    // validate username

    // validate password

    database('controller - successfully signed up user :', req.body.username);
    console.log(JSON.stringify(result));
    res.status(200).send(result);
  } catch (err) {
    error('controller - failed to authenticate user', err);
  }
};

export default signupController;
