import React, { Fragment } from 'react';

const PostDislikeCounter = ({
  currentPost,
  setShowDislikes,
  showDislikes,
  showLikes,
  setShowLikes
}) => {
  const changeDisplaying = () => {
    if (showLikes === true) {
      setShowLikes(false);
    }
    setShowDislikes(!showDislikes);
  };

  return (
    <Fragment>
      <i
        className='fas fa-thumbs-down'
        style={{ cursor: 'pointer' }}
        onClick={changeDisplaying}
      >
        {currentPost.amountOfDislikes}
      </i>
    </Fragment>
  );
};

export default PostDislikeCounter;
