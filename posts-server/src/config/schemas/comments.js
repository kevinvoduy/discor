import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  postID: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: [true, 'this comment needs an original creator'],
  },
  comment: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;