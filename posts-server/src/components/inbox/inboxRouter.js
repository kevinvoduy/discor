import express from 'express';
import {
  createThread,
  createInbox,
} from './inboxController';

const router = express.Router();

router.route('/createThread').post(createThread);
router.route('/createInbox').post(createInbox);

export default router;