import React, { Fragment, useEffect } from 'react';
import UserPost from '../posts/UserPost';
import Spinner from '../layouts/Spinner';
import { connect } from 'react-redux';
import { getPosts, getMorePosts, clearPosts } from '../../actions/postActions';
import { usePagination } from '../../customHooks/paginationHooks/usePagination';

const Posts = ({
  posts: { posts, amountOfPosts },
  getPosts,
  loading,
  getMorePosts,
  clearPosts
}) => {
  usePagination(getMorePosts, amountOfPosts);

  useEffect(() => {
    getPosts(0);
    return () => {
      clearPosts();
    };
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
  { getPosts, getMorePosts, clearPosts }
)(Posts);
