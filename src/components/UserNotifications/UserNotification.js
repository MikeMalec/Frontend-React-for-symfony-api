import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const UserNotification = ({ userNotification, setShow }) => {
  const onClick = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <div
        style={{
          backgroundColor: 'white',
          marginTop: '5px',
          marginBottom: '5px',
          borderBottom: '2px',
          borderBottomStyle: 'solid'
        }}
      >
        <Link
          style={{ marginTop: '8px', color: 'black' }}
          to={`/posts/${userNotification.post.id}`}
          onClick={onClick}
        >
          <div className='d-flex'>
            <img
              style={{ width: '10%', height: '15%' }}
              src={
                'data:image/jpeg;base64,' +
                userNotification.notificationOwner.encodedProfilePicture
              }
              alt='...'
              className='img-thumbnail'
            ></img>
            <div>
              {userNotification.notificationOwner.firstName}{' '}
              {userNotification.notificationOwner.surname} wrote new article!
            </div>
          </div>
          {userNotification.post.title.slice(0, 30)}...
        </Link>
      </div>
    </Fragment>
  );
};

export default UserNotification;
