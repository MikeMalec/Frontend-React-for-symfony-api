import { GET_POSTS, SET_LOADING } from './types';

export const getPosts = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/api.test/posts');
    const data = await res.json();

    dispatch({ type: GET_POSTS, payload: data });
  } catch (error) {}
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
