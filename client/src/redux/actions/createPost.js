import io from 'socket.io-client';

const socket = io('http://localhost:3030');

const broadcastPost = post => {
  socket.emit('new__post', post);
};

export default broadcastPost;