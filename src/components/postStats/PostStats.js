import React, { Fragment, useState } from 'react';
import PostLike from './PostLike';
import PostDislike from './PostDislike';
import PostLikeCounter from './PostLikeCounter';
import PostDislislikeCounter from './PostDislikeCounter';
import { connect } from 'react-redux';

const PostStats = ({ auth: { isAuthenticated } }) => {
  const [likedNow, setLikedNow] = useState(false);
  const [dislikedNow, setDislikedNow] = useState(false);
  console.log('liked NOw = ' + likedNow);
  console.log('disliked now = ' + dislikedNow);
  return (
    <div className='d-flex justify-content-between'>
      <div>
        <PostLikeCounter />
        <PostDislislikeCounter />
      </div>
      <div>
        <h4>COMMENT POST</h4>
      </div>

      <div>
        {isAuthenticated ? (
          <Fragment>
            <PostLike
              dislikedNow={dislikedNow}
              setLikedNow={setLikedNow}
              setDislikedNow={setDislikedNow}
            />
            <PostDislike
              likedNow={likedNow}
              setDislikedNow={setDislikedNow}
              setLikedNow={setLikedNow}
            />
          </Fragment>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PostStats);
