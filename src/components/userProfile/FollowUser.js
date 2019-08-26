import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow } from '../../actions/userActions';

const FollowUser = ({
  follow,
  unfollow,
  currentUser,
  userToShow,
  userFollowers
}) => {
  let potentialFollow =
    userFollowers.filter(follower => currentUser.id === follower.id).length ===
    0
      ? true
      : false;
  const [userFollow, setFollow] = useState(potentialFollow);
  useEffect(() => {
    setFollow(potentialFollow);
  }, [userFollowers]);

  const onClick = () => {
    if (userFollow) {
      follow(userToShow.id);
      setFollow(!userFollow);
    } else {
      unfollow(userToShow.id);
      setFollow(!userFollow);
    }
  };

  return (
    <div>
      <button
        type='button'
        className='btn btn-light mr-5 p-2'
        onClick={onClick}
      >
        {userFollow === true ? 'Follow' : 'Following'}
      </button>
    </div>
  );
};

export default connect(
  null,
  { follow, unfollow }
)(FollowUser);
