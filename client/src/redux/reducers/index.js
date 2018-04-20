import { combineReducers } from 'redux';
import usernameReducer from './usernameReducer';
import authToggleReducer from './authToggleReducer';

export default combineReducers({
  username__store: usernameReducer,
  isLoggedIn__store: authToggleReducer,
});