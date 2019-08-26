import React, { Fragment, useState } from 'react';
import PostLike from './PostLike';
import PostDislike from './PostDislike';
import PostLikeCounter from './PostLikeCounter';
import PostDislislikeCounter from './PostDislikeCounter';
import { connect } from 'react-redux';
import ListOfUsers from './ListOfUsers';
import UsersModal from '../modals/UsersModal';

const PostStats = ({ auth: { isAuthenticated }, currentPost }) => {
  const [likedNow, setLikedNow] = useState(false);
  const [dislikedNow, setDislikedNow] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showDislikes, setShowDislikes] = useState(false);

  const onClick = () => {
    window.scrollTo({
      top: document.body.clientHeight,
      behaviour: 'auto'
    });
  };

  return (
    <div className='d-flex justify-content-between'>
      <div>
        <ListOfUsers
          source={currentPost.postLikes}
          show={showLikes}
          setShow={setShowLikes}
        />
        <ListOfUsers
          source={currentPost.postDislikes}
          show={showDislikes}
          setShow={setShowDislikes}
        />
        <PostLikeCounter
          currentPost={currentPost}
          setShowLikes={setShowLikes}
        />
        <PostDislislikeCounter
          currentPost={currentPost}
          setShowDislikes={setShowDislikes}
        />
      </div>
      {isAuthenticated && (
        <Fragment>
          <div>
            <h4 onClick={onClick} style={{ cursor: 'pointer' }}>
              COMMENT POST
            </h4>
          </div>
          <div>
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
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PostStats);
