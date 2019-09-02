import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const dislikePost = async id => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.post(`/posts/${id}/dislikes`);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deletePostDislike = id => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    axios.delete(`/posts/${id}/dislikes`);
  } catch (error) {}
};
