import {
  GET_POST_COMMENT_COMMENTS,
  DELETE_POST_COMMENT_COMMENT,
  ADD_COMMENT_OF_POST_COMMENT
} from './types';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import {
  setLoadingAndAddCurrentToGroup,
  checkWhetherHaveToUnsetLoading,
  unsetCurrentGroup
} from './loadingActions';

export const getPostCommentComments = id => async dispatch => {
  setLoadingAndAddCurrentToGroup(dispatch, id, 'commentsOfcomments');
  try {
    const res = await axios.get(`/comments/${id}/comments`);
    dispatch({
      type: GET_POST_COMMENT_COMMENTS,
      payload: [id, res.data.comments]
    });
    unsetCurrentGroup(dispatch, id);
    checkWhetherHaveToUnsetLoading(dispatch);
  } catch (error) {
    unsetCurrentGroup(dispatch, id);
    console.log(error.response.data);
  }
};

export const createCommentOfPostComment = async (id, comment) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.post(`/comments/${id}/comments`, comment);
  } catch (error) {}
};

export const deleteCommentOfPostComment = (id, comment) => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.delete(`/comments/${comment.id}`);
    dispatch({ type: DELETE_POST_COMMENT_COMMENT, payload: [id, comment] });
  } catch (error) {}
};

export const updateCommentOfPostComment = comment => {
  console.log(comment);
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    axios.patch(`/comments/${comment.id}`, comment);
  } catch (error) {}
};

export const addCommentOfPostComment = data => {
  return {
    type: ADD_COMMENT_OF_POST_COMMENT,
    payload: data
  };
};
