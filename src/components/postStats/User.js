import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <div className='d-flex justify-content-center border'>
      {user.encodedProfilePicture ? (
        <img
          id='thumbnail'
          src={'data:image/jpeg;base64,' + user.encodedProfilePicture}
          alt='thumbnail'
          className='img-thumbnail w-25 h-25'
          style={{ borderRadius: '25px' }}
        />
      ) : (
        <img
          id='thumbnail'
          src='userProfile.png'
          alt='thumbnail'
          className='img-thumbnail w-25 h-25'
        />
      )}
      <div className='card-body'>
        <Link to={`/showUserProfile/${user.id}`}>
          {user.firstName} {user.surname}
        </Link>
      </div>
    </div>
  );
};

export default User;
