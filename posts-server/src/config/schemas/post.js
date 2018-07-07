import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: [true, 'this post needs an orginal creator'],
  },
  userImg: {
    type: String,
  },
  content: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    }
  ],
  createdAt: { type: Date, expires: 60, default: Date.now },
});

PostSchema.index({createdAt: 1}, {expireAfterSeconds: 60 });

const Post = mongoose.model('Post', PostSchema);
export default Post;
