import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import notificationReducer from './notificationReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  posts: postReducer,
  auth: authReducer,
  alert: alertReducer,
  notification: notificationReducer,
  loading: loadingReducer
});
