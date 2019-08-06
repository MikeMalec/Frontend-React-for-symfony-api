import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostCommentComments } from '../../actions/commentsOfCommentActions';
import Comment from './Comment';
import Spinner from '../layouts/Spinner';

const Comments = ({
  postComment,
  getPostCommentComments,
  comments,
  loading: { loading, currentComponent }
}) => {
  useEffect(() => {
    getPostCommentComments(postComment.id);
    // eslint-disable-next-line
  }, []);

  const commentsOfPostComment = comments.get(postComment.id);

  if (loading == true && currentComponent == 'commentsOfcomments') {
    return <Spinner />;
  }
  return (
    <div className='ml-5'>
      {commentsOfPostComment &&
        commentsOfPostComment.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            postCommentId={postComment.id}
          />
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getPostCommentComments }
)(Comments);
