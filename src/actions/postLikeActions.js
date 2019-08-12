import {} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const likePost = async id => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.post(`/posts/${id}/likes`);
  } catch (error) {}
};

export const deletePostLike = async id => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.delete(`/posts/${id}/likes`);
  } catch (error) {}
};
