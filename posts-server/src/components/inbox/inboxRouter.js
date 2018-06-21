import express from 'express';
import createThread from './inboxController';

const router = express.Router();

router.route('/createThread').post(createThread);

export default router;