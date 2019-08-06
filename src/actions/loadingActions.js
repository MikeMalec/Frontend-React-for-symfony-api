import {
  UNSET_LOADING,
  SET_LOADING,
  SET_LOADING_AND_ID,
  SET_LOADING_AND_CURRENT_COMPONENT,
  UNSET_LOADING_WITH_COMPONENT
} from './types';

export const setLoading = dispatch => {
  dispatch({ type: SET_LOADING });
};

export const unsetLoading = dispatch => {
  dispatch({ type: UNSET_LOADING });
};

export const setLoadingAndId = (dispatch, id) => {
  dispatch({ type: SET_LOADING_AND_ID, payload: id });
};

export const setLoadingAndComponent = (dispatch, component) => {
  dispatch({ type: SET_LOADING_AND_CURRENT_COMPONENT, payload: component });
};

export const unsetLoadingWithComponent = dispatch => {
  dispatch({ type: UNSET_LOADING_WITH_COMPONENT });
};
