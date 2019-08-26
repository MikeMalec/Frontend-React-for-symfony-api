import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import notificationReducer from './notificationReducer';
import loadingReducer from './loadingReducer';
import postCommentReducer from './PostCommentReducer';
import postLikeReducer from './postLikeReducer';
import postDislikeReducer from './postDislikeReducer';
import commentOfCommentReducer from './commentOfCommentReducer';
import userReducer from './userReducer';
import UserNotificationReducer from './UserNotificationReducer';

export default combineReducers({
  posts: postReducer,
  auth: authReducer,
  alert: alertReducer,
  notification: notificationReducer,
  loading: loadingReducer,
  postComments: postCommentReducer,
  postLikes: postLikeReducer,
  postDislikes: postDislikeReducer,
  comments: commentOfCommentReducer,
  user: userReducer,
  userNotifications: UserNotificationReducer
});
