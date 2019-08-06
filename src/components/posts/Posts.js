import React, { Fragment, useEffect } from 'react';
import UserPost from '../posts/UserPost';
import Spinner from '../layouts/Spinner';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';

const Posts = ({ posts: { posts }, getPosts, loading }) => {
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      {posts.map(post => (
        <UserPost key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading.loading
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
