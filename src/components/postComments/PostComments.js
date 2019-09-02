import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getPostComments,
  clearPostComments,
  addComment
} from '../../actions/PostCommentActions';
import { addCommentOfPostComment } from '../../actions/commentsOfCommentActions';
import PostComment from '../../components/postComments/PostComment';
import socketIOClient from 'socket.io-client';

const PostComments = ({
  currentPostId,
  comments,
  getPostComments,
  clearPostComments,
  addComment,
  addCommentOfPostComment
}) => {
  useEffect(() => {
    getPostComments(currentPostId);
    return () => {
      clearPostComments();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000');
    socket.emit('source', { id: currentPostId });
    socket.on('newComment', data => addComment(data));
    socket.on('newCommentOfComment', data => addCommentOfPostComment(data));
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className='mt-5'>
      {comments.map(comment => (
        <PostComment key={comment.id} comment={comment} id={currentPostId} />
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
  { getPostComments, clearPostComments, addComment, addCommentOfPostComment }
)(PostComments);
