import express from 'express';
import createPost from './postController';

const router = express.Router();

router.route('/createPost').post(createPost);

export default router;