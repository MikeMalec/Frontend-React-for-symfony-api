import React, { useState, Fragment } from 'react';
import UsersModal from '../modals/UsersModal';

const UserFollowers = ({ userFollowers }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div
        className='d-flex justify-content-center text-primary'
        style={{ cursor: 'pointer' }}
        onClick={() => setShowModal(!showModal)}
      >
        User Followers: {userFollowers.length}
      </div>
      {showModal && (
        <UsersModal users={userFollowers} setShowModal={setShowModal} />
      )}
    </Fragment>
  );
};

export default UserFollowers;
