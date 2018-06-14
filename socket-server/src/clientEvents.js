import log from './lib/log';

const clientReady = ({ io, client }, payload) => {
  log('client connected - id:', payload);
}

const clientEmitters = {
  'client.ready': clientReady,
}

export default clientEmitters;