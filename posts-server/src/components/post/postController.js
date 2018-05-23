import Post from '../../config/schemas/post';
import { success, error } from '../../lib/logger';

//creates a post
const createPost = async(req, res) => {
  try {
    const { owner, content } = req.body;
    const newPost = new Post({
      owner,
      content,
    });
    newPost.save();
    success('controller - successfully created post');
    console.log('controller - successfully created post');
    res.status(400).send(newPost);
  } catch (err) {
    error('controller - failed to create post');
    console.log('controller - failed to create post');
    res.status(200).send(err.message);
  }
}

export default createPost;