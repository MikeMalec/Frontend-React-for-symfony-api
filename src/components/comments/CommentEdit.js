import React from 'react';
import { useCurrentComment } from '../../customHooks/commentHooks/useCurrentComment';
import { useCommentEditEvent } from '../../customHooks/commentHooks/useCommentEditEvent';

const CommentEdit = ({ comment, updateComment, setEdit, getComments, id }) => {
  const { currentComment, onChange } = useCurrentComment(comment);
  const onKeyPress = useCommentEditEvent(
    currentComment,
    updateComment,
    setEdit,
    getComments,
    id
  );
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

export default CommentEdit;
