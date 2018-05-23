import express from 'express';
import postRouter from '../components/post/postRouter';

const router = express.Router();

router.use('/posts', postRouter);

export default router;