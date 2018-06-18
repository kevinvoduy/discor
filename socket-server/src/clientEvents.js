import log from './lib/log';

const clientReady = payload => {
  log('client ready - id:', payload);
};

const chatMessage = payload => {
  log('chat message : ', payload);
};

const clientEmitters = {
  'client.ready': clientReady,
  'chat.message': chatMessage,
};

export default clientEmitters;
