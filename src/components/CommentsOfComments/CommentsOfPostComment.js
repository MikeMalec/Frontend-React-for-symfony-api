import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostCommentComments } from '../../actions/commentsOfCommentActions';
import CommentOfPostComment from './CommentOfPostComment';
import Spinner from '../layouts/Spinner';

const CommentsOfPostComment = ({
  postComment,
  getPostCommentComments,
  comments,
  loading: { loading, currentComponent, currentGroup }
}) => {
  useEffect(() => {
    getPostCommentComments(postComment.id);
    // eslint-disable-next-line
  }, []);

  const commentsOfPostComment = comments.get(postComment.id);

  if (
    loading === true &&
    currentComponent === 'commentsOfcomments' &&
    currentGroup.includes(postComment.id)
  ) {
    return <Spinner />;
  }
  return (
    <div className='ml-5'>
      {commentsOfPostComment &&
        commentsOfPostComment.map(comment => (
          <CommentOfPostComment
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
)(CommentsOfPostComment);
