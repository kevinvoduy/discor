import log from './lib/log';

const clientReady = ({ io, socket }, payload) => {
  console.log('client ready - id:', payload);
};

const chatMessage = ({ io, socket }, payload) => {
  console.log('chat message:', payload);
  io.emit('chat.broadcast.message', payload);
};

const clientEmitters = {
  'client.ready': clientReady,
  'chat.message': chatMessage,
};

export default clientEmitters;
