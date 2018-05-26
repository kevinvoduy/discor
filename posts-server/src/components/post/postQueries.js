import Post from '../../config/schemas/post';
import Comment from '../../config/schemas/comments';

// creates a post
export const createPostQuery = ({ owner, content, imageURL }) => (
  new Post({
    owner,
    content,
    imageURL,
  })
)

// creates a comment
export const createCommentQuery = ({ postID, owner, comment }) => {
  const newComment = new Comment({
    postID,
    owner,
    comment,
  });
  return newComment;
}

// adds the comment to the post
export const pushCommentQuery = ({ postID}, comment) => (
  Post.findByIdAndUpdate(postID, {
    $push: {
      comments: comment
    }
  })
)

// gets all posts from last 24 hrs
export const getPostsQuery = () => (
  Post.find({
    createdAt: {
      $gte: new Date(new Date().setDate(new Date().getDate()-1))
    }
  })
  .populate({
    path: 'comments',
    select: ['owner', 'comment'],
    options: { limit: 4}
  })
  .limit(20)
  .sort({_id: -1})
)
