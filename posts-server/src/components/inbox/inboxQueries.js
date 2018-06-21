import Thread from '../../config/schemas/thread';

const createThreadQuery = payload => (
  new Thread({
    inbox_id: payload.inbox_id,
    creator_id: payload.creator_id,
    members: payload.members,
    status: payload.status,
    content: payload.content,
    createdAt: payload.createdAt,
    messages: payload.messages,
  })
);

export default createThreadQuery;
