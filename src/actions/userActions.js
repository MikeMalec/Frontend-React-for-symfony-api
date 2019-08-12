import setAuthToken from '../utils/setAuthToken';
import {
  SET_USER_TO_SHOW,
  SHOW_USER_POSTS,
  SHOW_MORE_USER_POSTS
} from './types';
import { clearNotification, setNotification } from './notificationActions';
import axios from 'axios';
import { loadUser } from './authActions';

export const updateUserProfile = profile => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.patch(`/users`, profile);
    setNotification(res.data.message, dispatch);
    loadUser(dispatch);
    clearNotification(dispatch);
  } catch (error) {}
};

export const getUserToShow = id => async dispatch => {
  try {
    const res = await axios.get(`/users/${id}`);
    dispatch({ type: SET_USER_TO_SHOW, payload: res.data });
  } catch (error) {}
};

export const getUserPosts = (id, start) => async dispatch => {
  try {
    const res = await axios.get(`/users/${id}/posts?start=${start}`);
    dispatch({ type: SHOW_USER_POSTS, payload: res.data });
  } catch (error) {}
};

export const getMoreUserPosts = (start, id) => async dispatch => {
  try {
    const res = await axios.get(`/users/${id}/posts?start=${start}`);
    dispatch({ type: SHOW_MORE_USER_POSTS, payload: res.data });
  } catch (error) {}
};
