import React from 'react';
import UserInModal from './UserInModal';

const UsersModal = ({ users, setShowModal }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        left: '0',
        top: '0',
        overflow: 'auto',
        zIndex: 1,
        paddingTop: '400px'
      }}
      onClick={() => setShowModal(false)}
    >
      <div
        style={{
          backgroundColor: '#fefefe',
          margin: 'auto',
          padding: '20px',
          border: '1px solid #888',
          width: '35%',
          height: '40%',
          overflow: 'auto',
          opacity: '1',
          padding: '10px'
        }}
      >
        {users.map(user => (
          <UserInModal user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UsersModal;
