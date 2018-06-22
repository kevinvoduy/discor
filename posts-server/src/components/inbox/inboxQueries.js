import Thread from '../../config/schemas/thread';
import Inbox from '../../config/schemas/inbox';

export const createThreadQuery = payload => (
  new Thread({
    inbox_id: payload.inbox_id,
    creator_id: payload.creator_id,
    recipient_id: payload.recipient_id,
    status: payload.status,
    subject: payload.subject,
    content: payload.content,
    createdAt: payload.createdAt,
    messages: payload.messages,
  })
);

export const pushThreadToInbox = ({ inbox_id }, thread) => (
  // adds to my inbox
  Inbox.findByIdAndUpdate(inbox_id, {
    $push: {
      threads: thread,
    }
  })
);

export const pushThreadToRecipient = ({ recipient_id }, thread) => (
  // adds to recipient inboxes
  Inbox.findByIdAndUpdate(recipient_id, {
    $push: {
      threads: thread,
    }
  })
);

export const createInboxQuery = ({ owner, threads }) => (
  new Inbox({
    owner,
    threads,
  })
);
