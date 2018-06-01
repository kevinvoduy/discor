import axios from 'axios';

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

function createPost(url, data) {
  return (dispatch) => {
    dispatch({ type: 'CREATE_POST'});
    const request = axios({
      method: 'POST',
      url: url,
      payload: data,
    });

    return request.then(
      response => dispatch(createPostSuccess(response.data)),
      () => createPostErrored(true),
    );
  };
}

export default createPost;