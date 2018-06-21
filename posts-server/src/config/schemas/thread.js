import mongoose from 'mongoose';

const ThreadSchema = new mongoose.Schema({
  inbox_id: {
    type: String,
    ref: 'inbox',
  },
  creator_id: {
    type: String,
  },
  members: [
    {
      name: String,
      imageUrl: String,
    }
  ],
  status: {
    type: String,
    enum: ['New', 'Replied', 'Read'],
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      type: String,
      ref: 'message'
    },
  ],
});

const Thread = mongoose.model('Thread', ThreadSchema);
export default Thread;