import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserToShow } from '../../actions/userActions';

const ShowUserProfile = ({ getUserToShow, user: { userToShow }, match }) => {
  useEffect(() => {
    getUserToShow(match.params.id);
  }, []);

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
          <div className='text-center mt-3 '>
            <p>{userToShow.description}</p>
          </div>
          <Link to={`/userPosts/${userToShow.id}`}>
            <h3>User posts</h3>
          </Link>
        </Fragment>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUserToShow }
)(ShowUserProfile);
