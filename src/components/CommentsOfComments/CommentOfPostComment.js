import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  deleteCommentOfPostComment,
  updateCommentOfPostComment,
  getPostCommentComments
} from '../../actions/commentsOfCommentActions';
import CommentEdit from '../comments/CommentEdit';

const CommentOfPostComment = ({
  postCommentId,
  comment,
  auth: { isAuthenticated, currentUser },
  deleteCommentOfPostComment,
  getPostCommentComments
}) => {
  const cursor = { cursor: 'pointer' };

  const [edit, setEdit] = useState(false);

  return (
    <Fragment>
      {edit ? (
        <CommentEdit
          comment={comment}
          updateComment={updateCommentOfPostComment}
          setEdit={setEdit}
          getComments={getPostCommentComments}
          id={postCommentId}
        />
      ) : (
        <div className='card w-50'>
          <div className='d-flex justify-content-between card-header p-1'>
            <Link to={`/showUserProfile/${comment.user.id}`}>
              <p>
                {comment.user.firstName} {comment.user.surname}
              </p>
            </Link>
            <div>
              {isAuthenticated && currentUser.id === comment.user.id ? (
                <Fragment>
                  <i
                    className='fas fa-edit'
                    style={cursor}
                    onClick={() => setEdit(true)}
                  />
                  <i
                    className='fas fa-trash-alt ml-2'
                    style={cursor}
                    onClick={() =>
                      deleteCommentOfPostComment(postCommentId, comment)
                    }
                  />
                </Fragment>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='card-body p-1'>
            <blockquote className='blockquote mb-0'>
              <p>{comment.body}</p>
            </blockquote>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    deleteCommentOfPostComment,
    getPostCommentComments
  }
)(CommentOfPostComment);
