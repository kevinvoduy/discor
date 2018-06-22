import mongoose from 'mongoose';

const ThreadSchema = new mongoose.Schema({
  inbox_id: {
    type: String,
    ref: 'inbox',
  },
  creator_id: {
    type: String,
  },
  recipient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'inbox',
  },
  status: {
    type: String,
    enum: ['New', 'Replied', 'Read'],
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
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