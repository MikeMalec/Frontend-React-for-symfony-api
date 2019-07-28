import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Notification = ({ notification: { notification } }) => {
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
  notification: state.notification
});

export default connect(mapStateToProps)(Notification);
