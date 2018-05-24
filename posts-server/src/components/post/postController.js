import {
  createPostQuery,
  createCommentQuery,
  pushCommentQuery
} from "./postQueries";

//creates a post
export const createPost = async(req, res) => {
  try {
    const postQuery = await createPostQuery(req.body);
    postQuery.save();

    console.log('controller - successfully created post:\n', JSON.stringify(postQuery));
    res.status(400).send(postQuery);
  } catch(err) {
    console.log('controller - failed to create post -', err);
    res.status(200).send(err.message);
  }
};

//creates a comment
export const createComment = async(req, res) => {
  try {
    //saves comment
    const comment = await createCommentQuery(req.body);
    comment.save();

    const pushCommentToPost = await pushCommentQuery(req.body, comment);

    console.log('controller - successfully added comment to post:\n', comment['postID']);
    res.status(400).send(comment);
  } catch(err) {
    console.log('controller - failed to added comment to post -', err);
    res.status(200).send(err.message);
  }
};