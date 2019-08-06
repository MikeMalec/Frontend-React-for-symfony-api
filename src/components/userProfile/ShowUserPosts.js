import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions/userActions';
import UserPost from '../../components/posts/UserPost';

const ShowUserPosts = ({ user: { userPosts }, match, getUserPosts }) => {
  useEffect(() => {
    getUserPosts(match.params.id);
    console.log(match.params.id);
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
  { getUserPosts }
)(ShowUserPosts);
