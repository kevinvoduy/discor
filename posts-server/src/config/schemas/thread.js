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
      type: String,
    }
  ],
  status: {
    type: String,
    enum: ['New', 'Replied', 'Read'],
  },
  subject: {
    type: String,
    required: true,
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