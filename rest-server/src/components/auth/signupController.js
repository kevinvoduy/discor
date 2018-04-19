// import db from '../../config/database/pg';
import {
  success,
  error,
 } from '../../lib/logger';

const signupController = async(req, res) => {
  try {
    success('successfully signed up user');
    res.status(200).send('signup');
  } catch (err) {
    error('failed to authenticate signup', err);
  }
};

export default signupController;
