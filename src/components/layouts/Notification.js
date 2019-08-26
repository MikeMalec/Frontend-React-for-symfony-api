import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Notification = ({ notification: { notification } }) => {
  return (
    <Fragment>
      {notification ? (
        <div
          className='alert alert-success'
          style={{
            position: 'absolute',
            width: '20%',
            marginLeft: '40%',
            zIndex: 1,
            textAlign: 'center'
          }}
        >
          {notification}
        </div>
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
