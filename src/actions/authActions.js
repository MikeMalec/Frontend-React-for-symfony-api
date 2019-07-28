import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  SET_ALERT,
  SET_NOTIFICATION,
  LOGOUT
} from './types';
import axios from 'axios';
import { clearAlert } from '../actions/alertActions';

export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/register', formData, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch({ type: SET_NOTIFICATION, payload: res.data.message });
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data.title });
    clearAlert(dispatch);
  }
};

export const login = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/login', formData, config);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data.message });
    clearAlert(dispatch);
  }
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
