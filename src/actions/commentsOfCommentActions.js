import {
  GET_POST_COMMENT_COMMENTS,
  DELETE_POST_COMMENT_COMMENT,
  UPDATE_POST_COMMENT_COMMENT
} from './types';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import {
  unsetLoading,
  setLoading,
  setLoadingAndComponent,
  unsetLoadingWithComponent
} from './loadingActions';

export const getPostCommentComments = id => async dispatch => {
  setLoadingAndComponent(dispatch, 'commentsOfcomments');
  try {
    const res = await axios.get(`/comments/${id}/comments-of-comments`);
    dispatch({ type: GET_POST_COMMENT_COMMENTS, payload: [id, res.data] });
    unsetLoadingWithComponent(dispatch);
  } catch (error) {}
};

export const createCommentOfPostComment = (comment, id) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    axios.post(`/comments/${id}/comments-of-comments`, comment);
  } catch (error) {}
};

export const deleteCommentOfPostComment = (id, comment) => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.delete(`/comments-of-comments/${comment.id}`);
    dispatch({ type: DELETE_POST_COMMENT_COMMENT, payload: [id, comment] });
  } catch (error) {}
};

export const updateCommentOfPostComment = (id, comment) => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.patch(
      `/comments-of-comments/${comment.id}`,
      comment
    );
    dispatch({ type: UPDATE_POST_COMMENT_COMMENT, payload: [id, comment] });
  } catch (error) {}
};
