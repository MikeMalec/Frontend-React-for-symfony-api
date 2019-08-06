import {
  CREATE_POST_COMMENT,
  SET_ALERT,
  GET_POST_COMMENTS,
  DELETE_POST_COMMENT,
  SET_NOTIFICATION,
  UPDATE_POST_COMMENT
} from './types';
import {
  unsetLoading,
  setLoadingAndId,
  setLoadingAndComponent,
  unsetLoadingWithComponent
} from '../actions/loadingActions';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import { clearNotification } from './notificationActions';

export const createPostComment = (postId, comment) => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.post(`/posts/${postId}/comments`, comment);
    dispatch({ type: CREATE_POST_COMMENT, payload: comment });
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data.title });
  }
};

export const getPostComments = postId => async dispatch => {
  setLoadingAndComponent(dispatch, 'comments');
  try {
    const res = await axios.get(`/posts/${postId}/comments`);
    dispatch({ type: GET_POST_COMMENTS, payload: res.data });
    unsetLoadingWithComponent(dispatch);
  } catch (error) {}
};

export const updatePostComment = comment => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.patch(`/comments/${comment.id}`, comment);
    dispatch({ type: UPDATE_POST_COMMENT, payload: comment });
    dispatch({ type: SET_NOTIFICATION, payload: res.data.message });
    clearNotification(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const deletePostComment = commentId => async dispatch => {
  setLoadingAndId(dispatch, commentId);
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.delete(`/comments/${commentId}`);
    dispatch({ type: DELETE_POST_COMMENT, payload: commentId });
    dispatch({ type: SET_NOTIFICATION, payload: res.data.message });
    clearNotification(dispatch);
    unsetLoading(dispatch);
  } catch (error) {
    console.log(error.response.data);
  }
};
