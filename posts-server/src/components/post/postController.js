import {
  createPostQuery,
  createCommentQuery,
  pushCommentQuery,
  getPostsQuery,
} from './postQueries';

// creates a post
export const createPost = async(req, res) => {
  try {
    const postQuery = await createPostQuery(req.body);
    postQuery.save();

    console.log('controller - successfully created post:\n', postQuery);
    res.status(200).send(postQuery);
  } catch(err) {
    console.log('controller - failed to create post -', err);
    res.status(400).send(err.message);
  }
};

// creates a comment
export const createComment = async(req, res) => {
  try {
    // saves comment
    const comment = await createCommentQuery(req.body);
    comment.save();

    // adds comment to post
    await pushCommentQuery(req.body, comment);

    console.log('controller - successfully added comment to post:\n', comment['postID']);
    res.status(200).send(comment);
  } catch(err) {
    console.log('controller - failed to added comment to post -', err);
    res.status(400).send(err.message);
  }
};

// gets all posts from last 24hrs
export const getPosts = async(req, res) => {
  try {
    const allPosts = await getPostsQuery();

    console.log('controller - successfully fetched all posts');

    if (allPosts.length) res.status(200).send(allPosts);
    else res.status(200).send([]);
  } catch(err) {
    console.log('controller - failed to fetched all posts-', err);
    res.status(400).send(err.message);
  }
};
