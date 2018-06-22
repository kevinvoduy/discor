import Thread from '../../config/schemas/thread';
import Inbox from '../../config/schemas/inbox';

export const createThreadQuery = payload => (
  new Thread({
    inbox_id: payload.inbox_id,
    creator_id: payload.creator_id,
    members: payload.members,
    status: payload.status,
    subject: payload.subject,
    content: payload.content,
    createdAt: payload.createdAt,
    messages: payload.messages,
  })
);

export const pushThreadToInbox = ({ inbox_id }, thread) => (
  Inbox.findByIdAndUpdate(inbox_id, {
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
