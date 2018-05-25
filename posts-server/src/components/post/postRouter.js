import express from 'express';
import {
  createPost,
  createComment,
  getPosts,
} from './postController';

const router = express.Router();

router.route('/createPost').post(createPost);
router.route('/createComment').post(createComment);
router.route('/getPosts').get(getPosts);

export default router;