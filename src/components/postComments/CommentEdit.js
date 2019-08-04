import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePostComment } from '../../actions/PostCommentActions';

const CommentEdit = ({ comment, updatePostComment, setEdit }) => {
  const [currentComment, setCurrentComment] = useState(comment);

  const onChange = e => {
    setCurrentComment({ ...currentComment, [e.target.name]: e.target.value });
  };

  const onKeyPress = e => {
    if (e.key === 'Enter' && currentComment.body !== '') {
      updatePostComment(currentComment);
      comment.body = currentComment.body;
      setEdit(false);
    }
  };

  return (
    <div className='card mt-5 w-50'>
      <div className='d-flex justify-content-between card-header'>
        <p>
          {comment.user.firstName} {comment.user.surname}
        </p>
      </div>
      <div className='card-body'>
        <div className='form-group'>
          <input
            type='text'
            name='body'
            className='form-control'
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={currentComment.body}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { updatePostComment }
)(CommentEdit);
