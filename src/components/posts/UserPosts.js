import React, { Fragment, useEffect } from 'react';
import UserPost from './UserPost';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions/postActions';
import Spinner from '../layouts/Spinner';

const UserPosts = ({
  posts: { posts },
  getUserPosts,
  loading: { loading, currentId }
}) => {
  useEffect(() => {
    getUserPosts();
    // eslint-disable-next-line
  }, []);

  if (loading && currentId === null) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {posts.map(post => (
          <UserPost key={post.id} post={post} />
        ))}
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getUserPosts }
)(UserPosts);
