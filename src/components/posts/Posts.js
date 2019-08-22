import React, { Fragment, useEffect } from 'react';
import UserPost from '../posts/UserPost';
import Spinner from '../layouts/Spinner';
import { connect } from 'react-redux';
import { getPosts, getMorePosts } from '../../actions/postActions';
import { usePagination } from '../../customHooks/paginationHooks/usePagination';

const Posts = ({
  posts: { posts, amountOfPosts },
  getPosts,
  loading,
  getMorePosts
}) => {
  usePagination(getMorePosts, amountOfPosts);

  useEffect(() => {
    if (posts.length === 0) {
      getPosts(0);
    }
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
  { getPosts, getMorePosts }
)(Posts);
