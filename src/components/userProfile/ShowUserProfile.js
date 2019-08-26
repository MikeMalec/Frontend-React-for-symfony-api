import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getUserToShow,
  getUserFollowers,
  getUserFollowed,
  unsetUserToShow
} from '../../actions/userActions';
import FollowUser from './FollowUser';
import UserFollowers from './UserFollowers';
import UserFollowed from './UserFollowed';

const ShowUserProfile = ({
  getUserToShow,
  getUserFollowers,
  getUserFollowed,
  unsetUserToShow,
  user: { userToShow, userFollowers, userFollowed },
  match,
  auth: { isAuthenticated, currentUser }
}) => {
  useEffect(() => {
    getUserToShow(match.params.id);
    getUserFollowers(match.params.id);
    getUserFollowed(match.params.id);
    return () => {
      unsetUserToShow();
    };
  }, [match.params.id]);

  return (
    <Fragment>
      {userToShow ? (
        <Fragment>
          <h3 className='text-primary text-center mt-3'>
            {userToShow.firstName} {userToShow.surname}
          </h3>
          <div className='d-flex justify-content-center'>
            {userToShow.encodedProfilePicture ? (
              <img
                src={
                  'data:image/jpeg;base64,' + userToShow.encodedProfilePicture
                }
                alt='profile'
                className='img-thumbnail w-50 h-50 mt-3'
              />
            ) : (
              <img
                src='userProfile.png'
                alt='profile'
                className='img-thumbnail w-50 h-50 mt-3'
              />
            )}
          </div>
          <div className='d-flex flex-row-reverse bd-highlight'>
            {isAuthenticated && userToShow.id !== currentUser.id ? (
              <FollowUser
                currentUser={currentUser}
                userFollowers={userFollowers}
                userToShow={userToShow}
              />
            ) : (
              ''
            )}
          </div>
          <div className='text-center mt-3 '>
            <p>{userToShow.description}</p>
          </div>
          <UserFollowers userFollowers={userFollowers} />
          <UserFollowed userFollowed={userFollowed} userToShow={userToShow} />
          <div className='d-flex justify-content-center'>
            <Link to={`/userPosts/${userToShow.id}`}>User posts</Link>
          </div>
        </Fragment>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    getUserToShow,
    getUserFollowers,
    getUserFollowed,
    unsetUserToShow
  }
)(ShowUserProfile);
