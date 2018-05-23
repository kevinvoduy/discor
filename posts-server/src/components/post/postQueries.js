import Post from '../../config/schemas/post';
import Comment from '../../config/schemas/comments';

export const createPostQuery = ({ owner, content }) => (
  new Post({
    owner,
    content,
  })
)

export const createCommentQuery = ({ postID, owner, comment }) => (
  new Comment({
    postID,
    owner,
    comment,
  })
)

export const pushCommentQuery = ({ postID, owner, comment }) => (
  Post.findByIdAndUpdate(postID, {
    $push: {
      comments: {
        owner,
        comment
      }
    }
  })
)


