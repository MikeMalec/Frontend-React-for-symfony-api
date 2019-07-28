import { SET_NOTIFICATION, CLEAR_NOTIFICATION } from './types';

export const setNotification = notification => async dispatch => {
  dispatch({ type: SET_NOTIFICATION, payload: notification });
  clearNotification(dispatch);
};

export const clearNotification = dispatch => {
  setTimeout(() => {
    dispatch({ type: CLEAR_NOTIFICATION });
  }, 2000);
};
