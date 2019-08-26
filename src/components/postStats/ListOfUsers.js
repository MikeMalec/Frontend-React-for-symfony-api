import React, { Fragment } from 'react';
import User from './User';
import UsersModal from '../modals/UsersModal';

const ListOfUsers = ({ source, show, setShow }) => {
  const mappedSource = source.map(obj => {
    return {
      firstName: obj.user.firstName,
      surname: obj.user.surname,
      encodedProfilePicture: obj.user.encodedProfilePicture,
      id: obj.user.id
    };
  });
  console.log(mappedSource);
  return (
    <Fragment>
      {show && <UsersModal users={mappedSource} setShowModal={setShow} />}
    </Fragment>
  );
};

export default ListOfUsers;
