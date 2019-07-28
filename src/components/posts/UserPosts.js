import React, { Fragment, useEffect } from 'react';
import UserPost from './UserPost';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions/postActions';

const UserPosts = ({ posts: { posts }, getUserPosts }) => {
  useEffect(() => {
    getUserPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {posts.map(post => (
        <UserPost key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getUserPosts }
)(UserPosts);
