import { combineReducers } from 'redux';

import usernameReducer from './usernameReducer';
import authToggleReducer from './authToggleReducer';
import { posts, postsHasErrored, postsIsLoading } from './fetchAllPostsReducer';

export default combineReducers({
  username__store: usernameReducer,
  isLoggedIn__store: authToggleReducer,
  posts,
  postsHasErrored,
  postsIsLoading

});