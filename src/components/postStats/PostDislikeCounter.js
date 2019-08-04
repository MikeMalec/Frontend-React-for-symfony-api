import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const PostDislikeCounter = ({ posts: { currentPost } }) => {
  return (
    <Fragment>
      <i className='fas fa-thumbs-down' style={{ cursor: 'pointer' }}>
        {currentPost.amountOfDislikes}
      </i>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostDislikeCounter);
