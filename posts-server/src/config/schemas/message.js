import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: [true, 'message needs an owner']
  },
  imageUrl: {
    type: String,
  },
  message: {
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