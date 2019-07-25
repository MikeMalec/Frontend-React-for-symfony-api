import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  DELETE_NOTIFICATION,
  DELETE_ALERT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_ALERT
} from './types';
import axios from 'axios';

export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('http://api.test/register', formData, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    deleteNotification(dispatch);
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data });
    deleteAlert(dispatch);
  }
};

export const login = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('http://api.test/login', formData, config);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
    deleteAlert(dispatch);
  }
};

export const setAlert = message => async dispatch => {
  dispatch({ type: SET_ALERT, payload: message });
  deleteAlert(dispatch);
};

export const deleteNotification = dispatch => {
  setTimeout(() => {
    dispatch({ type: DELETE_NOTIFICATION });
  }, 1000);
};

export const deleteAlert = dispatch => {
  setTimeout(() => {
    dispatch({ type: DELETE_ALERT });
  }, 1000);
};
