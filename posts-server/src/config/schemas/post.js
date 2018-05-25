import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: [true, 'this post needs an orginal creator'],
  },
  content: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
  comments: [
    {
      comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      }
    }
  ],
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;