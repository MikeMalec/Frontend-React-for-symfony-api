import {} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const likePost = id => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.post(`/posts/${id}/likes`);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deletePostLike = id => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.delete(`/posts/${id}/likes`);
  } catch (error) {
    console.log(error.response.data);
  }
};
