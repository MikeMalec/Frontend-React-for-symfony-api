import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const dislikePost = id => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    axios.post(`/posts/${id}/dislikes`);
  } catch (error) {}
};

export const deletePostDislike = id => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    axios.delete(`/posts/${id}/dislikes`);
  } catch (error) {}
};
