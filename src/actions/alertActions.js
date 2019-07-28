import { SET_ALERT, CLEAR_ALERT } from './types';

export const setAlert = alert => async dispatch => {
  dispatch({ type: SET_ALERT, payload: alert });
  clearAlert(dispatch);
};

export const clearAlert = dispatch => {
  setTimeout(() => {
    dispatch({ type: CLEAR_ALERT });
  }, 2000);
};
