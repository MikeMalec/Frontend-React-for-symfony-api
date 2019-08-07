import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePostComment } from '../../actions/PostCommentActions';
import Spinner from '../layouts/Spinner';
import CommentEdit from './CommentEdit';
import CommentsOfPostComment from '../CommentsOfComments/CommentsOfPostComment';
import CommentOfCommentForm from '../CommentsOfComments/CommentOfCommentForm';

const PostComment = ({
  comment,
  auth: { isAuthenticated, currentUser },
  deletePostComment,
  loading: { loading, currentId, currentComponent }
}) => {
  const cursor = { cursor: 'pointer' };
  const [edit, setEdit] = useState(false);
  const [showForm, setShowForm] = useState(false);

  if (
    loading &&
    (currentComponent === 'comments' || currentId === comment.id)
  ) {
    return <Spinner />;
  }
  return (
    <Fragment>
      {edit === true ? (
        <CommentEdit comment={comment} setEdit={setEdit} />
      ) : (
        <Fragment>
          <div className='card mt-5 w-50'>
            <div className='d-flex justify-content-between card-header p-1'>
              <Link to={`/showUserProfile/${comment.user.id}`}>
                <p>
                  {comment.user.firstName} {comment.user.surname}
                </p>
              </Link>
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
            <div className='card-body p-1'>
              <blockquote className='blockquote mb-0'>
                <p>{comment.body}</p>
              </blockquote>
            </div>
            {isAuthenticated && (
              <p
                className='text-primary ml-1'
                style={{ cursor: 'pointer' }}
                onClick={() => setShowForm(!showForm)}
              >
                Reply
              </p>
            )}
          </div>
          {showForm === true ? (
            <CommentOfCommentForm
              setShowForm={setShowForm}
              postComment={comment}
            />
          ) : (
            ''
          )}
        </Fragment>
      )}
      <CommentsOfPostComment postComment={comment} />
    </Fragment>
  );
};

const mapPropsToState = state => ({
  auth: state.auth,
  loading: state.loading
});

export default connect(
  mapPropsToState,
  { deletePostComment }
)(PostComment);
