import React, { Fragment, useEffect } from 'react';
import UserPost from './UserPost';
import { connect } from 'react-redux';
import { getUserPosts, getMoreUserPosts } from '../../actions/postActions';
import Spinner from '../layouts/Spinner';
import { usePagination } from '../../customHooks/paginationHooks/usePagination';

const UserPosts = ({
  posts: { userPosts, amountOfPosts },
  getUserPosts,
  getMoreUserPosts,
  loading: { loading, currentId }
}) => {
  usePagination(getMoreUserPosts, amountOfPosts);

  useEffect(() => {
    getUserPosts(0);
    // eslint-disable-next-line
  }, []);

  if (loading && currentId === null) {
    return <Spinner />;
  }
  return (
    <Fragment>
      {userPosts.map(post => (
        <UserPost key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getUserPosts, getMoreUserPosts }
)(UserPosts);
