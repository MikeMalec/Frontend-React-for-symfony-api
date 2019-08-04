import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { deletePostComment } from '../../actions/PostCommentActions';
import Spinner from '../layouts/Spinner';
import CommentEdit from './CommentEdit';

const PostComment = ({
  comment,
  auth: { isAuthenticated, currentUser },
  deletePostComment,
  loading: { loading, currentId, currentComponent }
}) => {
  const cursor = { cursor: 'pointer' };
  const [edit, setEdit] = useState(false);
  if (
    loading &&
    (currentComponent === 'comments' || currentId === comment.id)
  ) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {edit === true ? (
          <CommentEdit comment={comment} setEdit={setEdit} />
        ) : (
          <div className='card mt-5 w-50'>
            <div className='d-flex justify-content-between card-header'>
              <p>
                {comment.user.firstName} {comment.user.surname}
              </p>
              {isAuthenticated && comment.user.id === currentUser.id ? (
                <div>
                  <i
                    className='fas fa-edit'
                    style={cursor}
                    onClick={() => setEdit(true)}
                  />
                  <i
                    className='fas fa-trash-alt ml-2'
                    style={cursor}
                    onClick={() => deletePostComment(comment.id)}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
            <div className='card-body'>
              <blockquote className='blockquote mb-0'>
                <p>{comment.body}</p>
              </blockquote>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
};

const mapPropsToState = state => ({
  auth: state.auth,
  loading: state.loading
});

export default connect(
  mapPropsToState,
  { deletePostComment }
)(PostComment);
