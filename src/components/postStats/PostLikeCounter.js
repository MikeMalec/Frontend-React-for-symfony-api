import React, { Fragment } from 'react';

const PostLikeCounter = ({
  currentPost,
  setShowLikes,
  showLikes,
  showDislikes,
  setShowDislikes
}) => {
  const changeDisplaying = () => {
    if (showDislikes === true) {
      setShowDislikes(false);
    }
    setShowLikes(!showLikes);
  };

  return (
    <Fragment>
      <i
        className='fas fa-thumbs-up mr-2 ml-4'
        onClick={changeDisplaying}
        style={{ cursor: 'pointer' }}
      >
        {currentPost.amountOfLikes}
      </i>
    </Fragment>
  );
};
export default PostLikeCounter;
