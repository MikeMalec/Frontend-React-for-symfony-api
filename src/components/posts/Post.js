import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/postActions';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PostCommentForm from '../../components/postComments/PostCommentForm';
import PostComments from '../../components/postComments/PostComments';
import PostStats from '../../components/postStats/PostStats';

const Post = ({
  auth: { isAuthenticated },
  getPost,
  posts: { currentPost },
  match,
  loading: { loading, currentId, currentComponent }
}) => {
  useEffect(() => {
    getPost(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading && currentComponent === null && currentId === null) {
    return <Spinner />;
  }
  return currentPost ? (
    <Fragment>
      <div>
        <h3 className='text-center mt-3'>{currentPost.title} </h3>
        <Link to={`/showUserProfile/${currentPost.user.id}`}>
          <h5 className='text-primary'>
            {currentPost.user.firstName} {currentPost.user.surname}
          </h5>
        </Link>
      </div>
      {currentPost.video ? (
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            className='embed-responsive-item'
            src={currentPost.video}
            title='video'
          />
        </div>
      ) : (
        currentPost.encodedThumbnail && (
          <img
            id='thumbnail'
            src={'data:image/jpeg;base64,' + currentPost.encodedThumbnail}
            alt='thumbnail'
            className='img-thumbnail w-100 h-100'
          />
        )
      )}
      <div className='mt-5 container'>
        <p className='text-left'>{currentPost.body}</p>
      </div>
      <PostStats currentPost={currentPost} />
      <PostComments currentPostId={currentPost.id} />
      {isAuthenticated && <PostCommentForm currentPostId={currentPost.id} />}
    </Fragment>
  ) : (
    ''
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
