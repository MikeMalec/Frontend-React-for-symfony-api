import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {
  createPostComment,
  getPostComments
} from '../../actions/PostCommentActions';
import { setAlert } from '../../actions/alertActions';

const PostCommentForm = ({
  createPostComment,
  getPostComments,
  currentPostId,
  setAlert
}) => {
  const commentBody = useRef('');

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      if (commentBody.current.value !== '') {
        createPostComment(currentPostId, { body: commentBody.current.value });
        setTimeout(() => {
          getPostComments(currentPostId);
        }, 100);
        commentBody.current.value = '';
      } else {
        setAlert('Please enter something');
      }
    }
  };

  return (
    <div className='container mt-5'>
      <div className='form-group mt-5'>
        <textarea
          className='form-control'
          rows='5'
          placeholder='Write your comment here'
          ref={commentBody}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default connect(
  null,
  { createPostComment, setAlert, getPostComments }
)(PostCommentForm);
