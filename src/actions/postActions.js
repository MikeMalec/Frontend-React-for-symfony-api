import {
  CREATE_POST,
  GET_USER_POSTS,
  CHANGE_CREATED,
  SET_ALERT,
  DELETE_POST,
  GET_POST,
  UPDATE_POST,
  SET_POST,
  UNSET_CURRENT_POST,
  GET_POSTS,
  GET_FILTERED_POSTS,
  GET_MORE_POSTS,
  GET_MORE_FILTERED_POSTS,
  CLEAR_POSTS,
  GET_USER_PUBLISHED_POSTS,
  GET_USER_UNPUBLISHED_POSTS,
  GET_MORE_USER_UNPUBLISHED_POSTS,
  GET_MORE_USER_PUBLISHED_POSTS,
  PUBLISH_POST
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setNotification, clearNotification } from './notificationActions';
import { clearAlert } from '../actions/alertActions';
import {
  setLoading,
  unsetLoading,
  setLoadingAndId
} from '../actions/loadingActions';

export const getPosts = start => async dispatch => {
  start = start === undefined ? 0 : start;
  setLoading(dispatch);
  try {
    const res = await axios.get(`/posts/?start=${start}`);
    dispatch({ type: GET_POSTS, payload: res.data });
    unsetLoading(dispatch);
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: error.response.data });
    unsetLoading(dispatch);
  }
};

export const getMorePosts = start => async dispatch => {
  try {
    const res = await axios.get(`/posts/?start=${start}`);
    dispatch({ type: GET_MORE_POSTS, payload: res.data.posts });
  } catch (error) {}
};

export const createPost = post => async dispatch => {
  setLoading(dispatch);
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.post('/posts', post);
    dispatch({ type: CREATE_POST });
    setNotification(res.data.message, dispatch);
    clearNotification(dispatch);
    changeCreatedToFalse(dispatch);
    unsetLoading(dispatch);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getPost = id => async dispatch => {
  setLoading(dispatch);
  try {
    const res = await axios.get(`/posts/${id}`);
    dispatch({ type: GET_POST, payload: res.data });
    unsetLoading(dispatch);
  } catch (error) {
    console.log(error.response.data);
    unsetLoading(dispatch);
  }
};

export const getUserPublishedPosts = (start = 0) => async dispatch => {
  setLoading(dispatch);
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get(`/users/posts?start=${start}`);
    dispatch({ type: GET_USER_PUBLISHED_POSTS, payload: res.data });
    unsetLoading(dispatch);
  } catch (error) {}
};

export const getUserUnpublishedPosts = (start = 0) => async dispatch => {
  setLoading(dispatch);
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get(`/users/posts?start=${start}&published=false`);
    dispatch({ type: GET_USER_UNPUBLISHED_POSTS, payload: res.data });
    unsetLoading(dispatch);
  } catch (error) {}
};

export const getMoreUserPublishedPosts = start => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get(`/users/posts?start=${start}`);
    dispatch({ type: GET_MORE_USER_PUBLISHED_POSTS, payload: res.data });
    unsetLoading(dispatch);
  } catch (error) {}
};

export const getMoreUserUnpublishedPosts = start => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get(`/users/posts?start=${start}&published=false`);
    dispatch({ type: GET_MORE_USER_UNPUBLISHED_POSTS, payload: res.data });
    unsetLoading(dispatch);
  } catch (error) {}
};

export const getFilteredPosts = query => async dispatch => {
  setLoading(dispatch);
  try {
    const res = await axios.get(`/posts/${query}&start=0`);
    dispatch({ type: GET_FILTERED_POSTS, payload: [query, res.data] });
    unsetLoading(dispatch);
  } catch (error) {
    console.log(error.response.data);
    unsetLoading(dispatch);
  }
};

export const getMoreFilteredPosts = (query, start) => async dispatch => {
  try {
    const res = await axios.get(`/posts/${query}&start=${start}`);
    dispatch({ type: GET_MORE_FILTERED_POSTS, payload: res.data });
  } catch (error) {}
};

export const updatePost = post => async dispatch => {
  setLoading(dispatch);
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.patch(`/posts/${post.id}`, post);
    dispatch({ type: UPDATE_POST });
    changeCreatedToFalse(dispatch);
    setNotification(res.data.message, dispatch);
    clearNotification(dispatch);
    unsetLoading(dispatch);
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: SET_ALERT, payload: error.response.data.message });
    clearAlert(dispatch);
    unsetLoading(dispatch);
  }
};

export const publishPost = post => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  axios.patch(`/posts/${post.id}`, { publish: 'true' });
  return { type: PUBLISH_POST, payload: post };
};

export const deletePost = post => async dispatch => {
  setLoadingAndId(dispatch, post.id);
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const res = await axios.delete(`/posts/${post.id}`);
    dispatch({ type: DELETE_POST, payload: post.id });
    setNotification(res.data.message, dispatch);
    clearNotification(dispatch);
    setTimeout(() => {
      unsetLoading(dispatch);
    }, 500);
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: SET_ALERT, payload: error.response.data.title });
    clearAlert(dispatch);
    unsetLoading(dispatch);
  }
};

export const setPost = post => {
  return { type: SET_POST, payload: post };
};

export const changeCreatedToFalse = dispatch => {
  setTimeout(() => {
    dispatch({ type: CHANGE_CREATED });
  }, 500);
};

export const unsetCurrentPost = () => async dispatch => {
  dispatch({ type: UNSET_CURRENT_POST });
};

export const clearPosts = () => {
  return { type: CLEAR_POSTS };
};
