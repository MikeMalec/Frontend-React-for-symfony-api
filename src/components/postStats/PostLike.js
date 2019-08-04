import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { likePost, deletePostLike } from '../../actions/postLikeActions';

const PostLike = ({
  auth: { currentUser },
  posts: { currentPost },
  likePost,
  deletePostLike,
  dislikedNow,
  setLikedNow,
  setDislikedNow
}) => {
  let userPotentialPostLike = currentPost.postLikes.filter(
    postLike => postLike.user.id === currentUser.id
  ).length;

  let alreadyLiked = userPotentialPostLike === 0 ? false : true;

  const [liked, setLiked] = useState(alreadyLiked);

  if (dislikedNow === true && liked === true) {
    setLiked(!liked);
  } else if (dislikedNow === true && liked === false) {
    setDislikedNow(false);
  }

  const color = liked === true ? 'blue' : 'black';
  const handleClick = () => {
    if (liked === true) {
      deletePostLike(currentPost.id);
    } else {
      likePost(currentPost.id);
      setLikedNow(true);
    }
    setLiked(!liked);
  };

  return (
    <Fragment>
      <i
        className='far fa-thumbs-up fa-3x'
        style={{ cursor: 'pointer', color: color }}
        onClick={handleClick}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  postLikes: state.postLikes,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { likePost, deletePostLike }
)(PostLike);
