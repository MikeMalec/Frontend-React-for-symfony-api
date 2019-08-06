import setAuthToken from '../utils/setAuthToken';
import { SET_NOTIFICATION, SET_USER_TO_SHOW, SHOW_USER_POSTS } from './types';
import { clearNotification } from './notificationActions';
import axios from 'axios';
import { loadUser } from './authActions';

export const updateUserProfile = profile => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.patch(`/users`, profile);
    dispatch({ type: SET_NOTIFICATION, payload: res.data.message });
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

export const getUserPosts = id => async dispatch => {
  try {
    const res = await axios.get(`/users/${id}/posts`);
    dispatch({ type: SHOW_USER_POSTS, payload: res.data });
  } catch (error) {}
};
