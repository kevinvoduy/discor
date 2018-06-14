import log from './lib/log';

const clientReady = ({ io, client }, payload) => {
  log('client ready - id:', payload);
}

const clientEmitters = {
  'client.ready': clientReady,
}

export default clientEmitters;