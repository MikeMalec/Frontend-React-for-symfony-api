import React, { Fragment } from 'react';
import User from './User';

const ListOfUsers = ({ source, showList }) => {
  return (
    <Fragment>
      {showList === true && source.length > 0 ? (
        <div className='overflow-auto w-25 h-75 mb-2'>
          {source.map(user => (
            <User key={user.user.id} user={user.user} />
          ))}
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default ListOfUsers;
