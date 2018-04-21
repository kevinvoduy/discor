import {
  signupQuery,
} from './authQueries';
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
    return res.status(400).send('Could not sign up user');
  }
};

export default signupController;
