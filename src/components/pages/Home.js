import React, { Fragment } from 'react';
import PostFilter from '../posts/PostFilter';
import Posts from '../posts/Posts';
import FilteredPosts from '../posts/FilteredPosts';
import { connect } from 'react-redux';

const Home = ({ posts: { currentPartOfFilteredPosts } }) => {
  return (
    <Fragment>
      <PostFilter />
      {currentPartOfFilteredPosts ? <FilteredPosts /> : <Posts />}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(Home);
