import express from 'express';
import postRouter from '../components/post/postRouter';
import uploadsRouter from '../components/upload/uploadRouter';

const router = express.Router();

router.use('/posts', postRouter);
router.use('/uploads', uploadsRouter);

export default router;