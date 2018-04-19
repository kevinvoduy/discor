import express from 'express';
// import validate from 'express-validation';
import signupController from './signupController';

const router = express.Router();

router.route('/test').post(signupController);

export default router;