import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
  dislikePost,
  deletePostDislike
} from '../../actions/postDislikeActions';
import { useUserPostActivity } from '../../customHooks/postStats/useUserPostActivity';

const PostDislike = ({
  auth: { currentUser },
  posts: { currentPost },
  likedNow,
  setDislikedNow,
  setLikedNow
}) => {
  const alreadyDisliked = useUserPostActivity(
    currentPost.dislikes,
    currentUser.id
  );

  const [disliked, setDisliked] = useState(alreadyDisliked);

  if (likedNow === true && disliked === true) {
    setDisliked(!disliked);
  } else if (likedNow === true && disliked === false) {
    setLikedNow(false);
  }

  const color = disliked === true ? 'red' : 'black';

  const handleClick = () => {
    if (disliked === true) {
      deletePostDislike(currentPost.id);
    } else {
      dislikePost(currentPost.id);
      setDislikedNow(true);
    }
    setDisliked(!disliked);
  };

  return (
    <Fragment>
      <i
        className='far fa-thumbs-down fa-3x ml-2 mr-4'
        style={{ cursor: 'pointer', color: color }}
        onClick={handleClick}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
});

export default connect(mapStateToProps)(PostDislike);
