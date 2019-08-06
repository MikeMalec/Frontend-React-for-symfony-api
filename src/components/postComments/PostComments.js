import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostComments } from '../../actions/PostCommentActions';
import PostComment from '../../components/postComments/PostComment';
import Spinner from '../layouts/Spinner';

const PostComments = ({
  currentPostId,
  comments,
  getPostComments,
  loading: { loading, currentComponent }
}) => {
  useEffect(() => {
    getPostComments(currentPostId);
    // eslint-disable-next-line
  }, []);

  if (loading === true && currentComponent === 'comments') {
    return <Spinner />;
  }
  return (
    <div className='mt-5'>
      {comments.map(comment => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.postComments.comments,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getPostComments }
)(PostComments);
