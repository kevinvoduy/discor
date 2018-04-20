import express from 'express';
import validate from 'express-validation';
import signupController from './authController';
import formValidation from '../../middleware/validation/request-validation';

const router = express.Router();

router.route('/test')
  .post(validate(formValidation.signup), signupController);

export default router;