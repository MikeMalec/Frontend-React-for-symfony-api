import { UNSET_LOADING, SET_LOADING, SET_LOADING_AND_ID } from './types';

export const setLoading = dispatch => {
  dispatch({ type: SET_LOADING });
};

export const unsetLoading = dispatch => {
  dispatch({ type: UNSET_LOADING });
};

export const setLoadingAndId = (dispatch, id) => {
  dispatch({ type: SET_LOADING_AND_ID, payload: id });
};
