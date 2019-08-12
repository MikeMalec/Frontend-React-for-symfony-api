import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const dislikePost = async id => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    await axios.post(`/posts/${id}/dislikes`);
  } catch (error) {}
};

export const deletePostDislike = async id => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    await axios.delete(`/posts/${id}/dislikes`);
  } catch (error) {}
};
