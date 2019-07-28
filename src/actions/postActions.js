import {
  CREATE_POST,
  GET_USER_POSTS,
  CHANGE_CREATED,
  SET_NOTIFICATION,
  SET_ALERT,
  DELETE_POST,
  GET_POST,
  UPDATE_POST,
  SET_POST
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { clearNotification } from './notificationActions';
import { clearAlert } from '../actions/alertActions';

export const createPost = post => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.post('/posts', post);
    dispatch({ type: CREATE_POST, payload: res.data });
    dispatch({ type: SET_NOTIFICATION, payload: res.data.message });
    clearNotification(dispatch);
    changeCreatedToFalse(dispatch);
  } catch (error) {}
};

export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/posts/${id}`);
    dispatch({ type: GET_POST, payload: res.data });
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data.title });
    clearAlert(dispatch);
  }
};

export const getUserPosts = () => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get('/users/posts');
    dispatch({ type: GET_USER_POSTS, payload: res.data });
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data.title });
    clearAlert(dispatch);
  }
};

export const updatePost = post => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const res = await axios.patch(`/posts/${post.id}`, post);
    dispatch({ type: UPDATE_POST, payload: post });
    changeCreatedToFalse(dispatch);
    dispatch({ type: SET_NOTIFICATION, payload: res.data.message });
    clearNotification(dispatch);
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data.message });
    clearAlert(dispatch);
  }
};

export const deletePost = post => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const res = await axios.delete(`/posts/${post.id}`);
    dispatch({ type: DELETE_POST, payload: post.id });
    dispatch({ type: SET_NOTIFICATION, payload: res.data.message });
    clearNotification(dispatch);
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data.title });
    clearAlert(dispatch);
  }
};

export const setPost = post => {
  return { type: SET_POST, payload: post };
};

export const changeCreatedToFalse = dispatch => {
  setTimeout(() => {
    dispatch({ type: CHANGE_CREATED });
  }, 500);
};
