import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  SET_ALERT,
  SET_NOTIFICATION,
  LOGOUT,
  LOAD_USER
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { clearAlert } from '../actions/alertActions';
import { unsetLoading, setLoading } from '../actions/loadingActions';
import { clearNotification } from '../actions/notificationActions';

export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  setLoading(dispatch);
  try {
    const res = await axios.post('/register', formData, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch({ type: SET_NOTIFICATION, payload: res.data.message });
    clearNotification(dispatch);
    unsetLoading(dispatch);
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: SET_ALERT, payload: error.response.data.title });
    clearAlert(dispatch);
    unsetLoading(dispatch);
  }
};

export const login = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  setLoading(dispatch);
  try {
    const res = await axios.post('/login', formData, config);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    loadUser(dispatch);
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data.message });
    clearAlert(dispatch);
    unsetLoading(dispatch);
  }
};

export const loadUser = async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/users');
    dispatch({ type: LOAD_USER, payload: res.data });
    unsetLoading(dispatch);
  } catch (error) {}
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
