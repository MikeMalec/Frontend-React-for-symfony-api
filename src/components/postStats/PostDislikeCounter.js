import React, { Fragment } from 'react';

const PostDislikeCounter = ({ currentPost, setShowDislikes }) => {
  const changeDisplaying = () => {
    setShowDislikes(true);
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
