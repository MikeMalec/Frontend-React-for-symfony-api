import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/postActions';

const Post = ({ getPost, posts: { currentPost }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, []);
  return currentPost ? (
    <Fragment>
      <div>
        <h3 className='text-center mt-3'>{currentPost.title} </h3>
        <h5 className='text-primary'>
          {currentPost.user.firstName} {currentPost.user.surname}
        </h5>
      </div>
      {currentPost.video && (
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' src={currentPost.video} />
        </div>
      )}
      <div className='mt-5 container'>
        <p className='text-left'>{currentPost.body}</p>
      </div>
    </Fragment>
  ) : (
    ''
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
