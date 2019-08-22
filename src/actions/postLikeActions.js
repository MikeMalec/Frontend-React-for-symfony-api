import {} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const likePost = id => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    axios.post(`/posts/${id}/likes`);
  } catch (error) {}
};

export const deletePostLike = id => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    axios.delete(`/posts/${id}/likes`);
  } catch (error) {}
};
