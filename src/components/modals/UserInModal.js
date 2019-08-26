import React from 'react';
import { Link } from 'react-router-dom';

const UserInModal = ({ user }) => {
  return (
    <div>
      <Link
        style={{ marginTop: '8px', color: 'black' }}
        to={`/showUserProfile/${user.id}`}
      >
        <div className='d-flex'>
          <img
            style={{ width: '10%', height: '15%' }}
            src={'data:image/jpeg;base64,' + user.encodedProfilePicture}
            alt='...'
            className='img-thumbnail'
          ></img>
          <div>
            {user.firstName} {user.surname}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserInModal;
