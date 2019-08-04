import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
  dislikePost,
  deletePostDislike
} from '../../actions/postDislikeActions';

const PostDislike = ({
  auth: { currentUser },
  posts: { currentPost },
  dislikePost,
  deletePostDislike,
  likedNow,
  setDislikedNow,
  setLikedNow
}) => {
  let userPotentialPostDislike = currentPost.postDislikes.filter(
    postDislike => postDislike.user.id === currentUser.id
  ).length;

  let alreadyDisliked = userPotentialPostDislike === 0 ? false : true;

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

export default connect(
  mapStateToProps,
  { dislikePost, deletePostDislike }
)(PostDislike);
