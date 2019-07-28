import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Posts = ({ posts: { post } }) => {
  return <Fragment />;
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(Posts);
