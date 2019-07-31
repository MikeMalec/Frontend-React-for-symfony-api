import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/postActions';
import Spinner from '../layouts/Spinner';

const Post = ({ getPost, posts: { currentPost }, match, loading }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return currentPost ? (
      <Fragment>
        <div>
          <h3 className='text-center mt-3'>{currentPost.title} </h3>
          <h5 className='text-primary'>
            {currentPost.user.firstName} {currentPost.user.surname}
          </h5>
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
      </Fragment>
    ) : (
      ''
    );
  }
};

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading.loading
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
