import signupQuery from './authQueries';
import {
  success,
  error,
 } from '../../lib/logger';

const signupController = async(req, res) => {
  try {
    // adds username to db, returning id
    const id = await signupQuery(req.body);

    success('controller - successfully signed up user');
    res.status(200).send(id);
  } catch (err) {
    error('failed to authenticate signup', err);
  }
};

export default signupController;
