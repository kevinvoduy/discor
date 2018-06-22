import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'message needs an owner']
  },
  userImg: {
    type: String,
  },
  status: {
    type: String,
    enum: ['New', 'Read'],
  },
  content: {
    type: String,
    required: [true, 'message needs a message']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('Message', MessageSchema);
export default Message;