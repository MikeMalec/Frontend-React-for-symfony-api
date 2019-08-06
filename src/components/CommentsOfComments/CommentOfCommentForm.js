import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createCommentOfPostComment } from '../../actions/commentsOfCommentActions';
import { getPostCommentComments } from '../../actions/commentsOfCommentActions';
import { setAlert } from '../../actions/alertActions';

const CommentOfCommentForm = ({
  postComment,
  setShowForm,
  getPostCommentComments
}) => {
  const commentBody = useRef('');

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      if (commentBody.current.value !== '') {
        createCommentOfPostComment(
          { body: commentBody.current.value },
          postComment.id
        );
        setTimeout(() => {
          getPostCommentComments(postComment.id);
        }, 100);
        setShowForm(false);
        commentBody.current.value = '';
      } else {
        setAlert('Please enter something');
      }
    }
  };

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
