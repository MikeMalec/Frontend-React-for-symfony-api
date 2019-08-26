import {
  GET_USER_NOTIFICATIONS,
  UNSET_USER_NOTIFICATIONS
} from '../actions/types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from './authActions';

export const getUserNotifications = () => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get('users/notifications');
    dispatch({ type: GET_USER_NOTIFICATIONS, payload: res.data.notifications });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const changeStatusOfNotifications = () => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.patch('users/notifications');
    loadUser(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const unsetUserNotifications = () => {
  return { type: UNSET_USER_NOTIFICATIONS };
};
