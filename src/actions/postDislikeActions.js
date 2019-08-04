import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const dislikePost = id => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.post(`/posts/${id}/dislikes`);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deletePostDislike = id => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.delete(`/posts/${id}/dislikes`);
  } catch (error) {
    console.log(error.response.data);
  }
};
