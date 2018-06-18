import log from './lib/log';

const clientReady = ({ io, client }, payload) => {
  log('client ready - id:', payload);
};

const chatMessage = ({ io, client }, payload) => {
  log('chat message : ', payload);
};

const clientEmitters = {
  'client.ready': clientReady,
  'chat.message': chatMessage,
};

export default clientEmitters;
