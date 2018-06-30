import express from 'express';
import validate from 'express-validation';
import { signupController, loginController } from './authController';
import formValidation from '../../middleware/validation/request-validation';

const router = express.Router();

router.route('/signup').post(validate(formValidation.signup), signupController);
router.route('/login').post(validate(formValidation.login), loginController);

export default router;