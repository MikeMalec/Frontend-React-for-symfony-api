import {
  UNSET_LOADING,
  SET_LOADING,
  SET_LOADING_AND_ID,
  SET_LOADING_AND_CURRENT_COMPONENT,
  UNSET_LOADING_WITH_COMPONENT,
  SET_LOADING_AND_ADD_CURRENT_TO_GROUP,
  UNSET_CURRENT_GROUP,
  CHECK_LOADING
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

export const setLoadingAndAddCurrentToGroup = (dispatch, id, component) => {
  dispatch({
    type: SET_LOADING_AND_ADD_CURRENT_TO_GROUP,
    payload: { id: id, component: component }
  });
};

export const unsetCurrentGroup = (dispatch, id) => {
  dispatch({ type: UNSET_CURRENT_GROUP, payload: id });
};

export const unsetLoadingWithComponent = dispatch => {
  dispatch({ type: UNSET_LOADING_WITH_COMPONENT });
};

export const checkWhetherHaveToUnsetLoading = dispatch => {
  dispatch({ type: CHECK_LOADING });
};
