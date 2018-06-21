import express from 'express';
import postRouter from '../components/post/postRouter';
import uploadsRouter from '../components/upload/uploadRouter';
import inboxRouter from '../components/inbox/inboxRouter';

const router = express.Router();

router.use('/posts', postRouter);
router.use('/uploads', uploadsRouter);
router.use('/inbox', inboxRouter);

export default router;