import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserPosts, getMoreUserPosts } from '../../actions/userActions';
import UserPost from '../../components/posts/UserPost';
import { usePagination } from '../../customHooks/usePagination';

const ShowUserPosts = ({
  user: { userPosts, amountOfPosts },
  match,
  getUserPosts,
  getMoreUserPosts
}) => {
  usePagination(getMoreUserPosts, amountOfPosts, match.params.id);

  useEffect(() => {
    getUserPosts(match.params.id, 0);
  }, []);

  return (
    <Fragment>
      {userPosts.map(post => (
        <UserPost key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUserPosts, getMoreUserPosts }
)(ShowUserPosts);
