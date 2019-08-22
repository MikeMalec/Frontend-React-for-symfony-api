import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getMoreFilteredPosts } from '../../actions/postActions';
import { usePagination } from '../../customHooks/paginationHooks/usePagination';
import UserPost from './UserPost';

const FilteredPosts = ({
  posts: { currentPartOfFilteredPosts, query, amountOfPosts },
  getMoreFilteredPosts
}) => {
  usePagination(getMoreFilteredPosts, amountOfPosts, null, query);
  return (
    <Fragment>
      {currentPartOfFilteredPosts.map(post => (
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
  { getMoreFilteredPosts }
)(FilteredPosts);
