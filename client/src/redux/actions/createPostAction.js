import axios from 'axios';
import io from 'socket.io-client';
import url from '../../components/globals/urlPrefix';

const socket = io(`http://${url.postServer}`);
const broadcastPost = post => {
  socket.emit('new__post', post);
};

export function createPostErrored(bool) {
  return {
      type: 'CREATE_POST_ERRORED',
      hasErrored: bool
  };
}

export function createPostSuccess(post) {
  return {
      type: 'CREATE_POST_SUCCESS',
      post
  };
}

export function createPost(url, payload) {
  return (dispatch) => {
    dispatch({ type: 'CREATE_POST'});

    const request = axios.post(url, payload);

    return request.then(
      response => {
        broadcastPost(response.data);
        dispatch(createPostSuccess(response.data));
      },
      () => createPostErrored(true),
    );
  };
}