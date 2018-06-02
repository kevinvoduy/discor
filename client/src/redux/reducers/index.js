import { combineReducers } from 'redux';

import usernameReducer from './usernameReducer';
import authToggleReducer from './authToggleReducer';
import { posts, postsHasErrored, postsIsLoading } from './fetchAllPostsReducer';
import { createPostErrored, createPostSuccess, clearPosts} from './createPostReducer';
// import updateCount from './postNotificationReducer';

export default combineReducers({
  username__store: usernameReducer,
  isLoggedIn__store: authToggleReducer,
  posts,
  postsHasErrored,
  postsIsLoading,
  createPostErrored,
  createPostSuccess,
  clearPosts,
  // updateCount,
});