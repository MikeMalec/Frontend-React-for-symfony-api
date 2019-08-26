import React, { useState, Fragment } from 'react';
import UsersModal from '../modals/UsersModal';

const UserFollowed = ({ userFollowed, userToShow }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div
        className='d-flex justify-content-center text-primary'
        style={{ cursor: 'pointer' }}
        onClick={() => setShowModal(!showModal)}
      >
        {userToShow.firstName} follows : {userFollowed.length} people
      </div>
      {showModal && (
        <UsersModal users={userFollowed} setShowModal={setShowModal} />
      )}
    </Fragment>
  );
};

export default UserFollowed;
