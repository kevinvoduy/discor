import mongoose from 'mongoose';

const InboxSchema = new mongoose.Schema({
  owner: {
    type: String,
    required : [true, 'this inbox requires an owner'],
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'thread'
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Inbox = mongoose.model('Inbox', InboxSchema);
export default Inbox;