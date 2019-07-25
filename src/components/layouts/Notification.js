import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Notification = ({ auth: { notification } }) => {
  return (
    <Fragment>
      {notification ? (
        <div className='alert alert-success w-25 mt-3 mb-2'>{notification}</div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Notification);
