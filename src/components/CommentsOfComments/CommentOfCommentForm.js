import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createCommentOfPostComment } from '../../actions/commentsOfCommentActions';
import { getPostCommentComments } from '../../actions/commentsOfCommentActions';
import { useCommentFormSubmit } from '../../customHooks/commentHooks/useCommentFormSubmit';

const CommentOfCommentForm = ({
  postComment,
  setShowForm,
  getPostCommentComments
}) => {
  const commentBody = useRef('');
  const onKeyPress = useCommentFormSubmit(
    commentBody,
    postComment.id,
    createCommentOfPostComment,
    getPostCommentComments,
    setShowForm
  );

  return (
    <div className='w-50 mt-1'>
      <div className='form-group '>
        <textarea
          className='form-control'
          rows='3'
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
  { getPostCommentComments }
)(CommentOfCommentForm);
