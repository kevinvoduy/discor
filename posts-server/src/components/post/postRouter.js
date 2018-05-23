import express from 'express';
import {
  createPost,
  createComment,
} from './postController';

const router = express.Router();

router.route('/createPost').post(createPost);
router.route('/createComment').post(createComment);

export default router;