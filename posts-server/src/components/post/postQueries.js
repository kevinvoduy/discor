import Post from '../../config/schemas/post';
import Comment from '../../config/schemas/comments';

export const createPostQuery = ({ owner, content }) => (
  new Post({
    owner,
    content,
  })
)

export const createCommentQuery = ({ postID, owner, comment }) => {
  const newComment = new Comment({
    postID,
    owner,
    comment,
  });
  return newComment;
}

export const pushCommentQuery = ({ postID}, comment) => (
  Post.findByIdAndUpdate(postID, {
    $push: {
      comments: {
        comment
      }
    }
  })
)


