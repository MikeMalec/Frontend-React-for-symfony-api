import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {
  createPostComment,
  getPostComments
} from '../../actions/PostCommentActions';
import { useCommentFormSubmit } from '../../customHooks/commentHooks/useCommentFormSubmit';

const PostCommentForm = ({
  createPostComment,
  getPostComments,
  currentPostId
}) => {
  const commentBody = useRef('');

  const onKeyPress = useCommentFormSubmit(
    commentBody,
    currentPostId,
    createPostComment,
    getPostComments
  );

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
  { createPostComment, getPostComments }
)(PostCommentForm);
