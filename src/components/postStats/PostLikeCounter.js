import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const PostLikeCounter = ({ posts: { currentPost } }) => {
  return (
    <Fragment>
      <i className='fas fa-thumbs-up mr-2 ml-4' style={{ cursor: 'pointer' }}>
        {currentPost.amountOfLikes}
      </i>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  posts: state.posts
});
export default connect(mapStateToProps)(PostLikeCounter);
