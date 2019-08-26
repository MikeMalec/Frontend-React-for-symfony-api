import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getUserNotifications,
  unsetUserNotifications,
  changeStatusOfNotifications
} from '../../actions/UserNotificationActions';
import UserNotification from './UserNotification';

const UserNotifications = ({
  getUserNotifications,
  unsetUserNotifications,
  changeStatusOfNotifications,
  userNotifications: { notifications },
  auth: { currentUser }
}) => {
  const [show, setShow] = useState(false);

  const counterStyle = {
    fontSize: '25px',
    zIndex: '2',
    marginLeft: '30px',
    marginTop: '-11px',
    fontStyle: 'italic'
  };

  useEffect(() => {
    getUserNotifications();
    return () => {
      unsetUserNotifications();
    };
  }, []);

  const onClick = () => {
    if (currentUser.checkedNotifications === false) {
      changeStatusOfNotifications();
    }
    setShow(!show);
  };

  return (
    <Fragment>
      <div>
        <i
          className='far fa-bell fa-3x'
          style={{ cursor: 'pointer' }}
          onClick={onClick}
        >
          <p className='text-primary' style={counterStyle}>
            {currentUser !== null
              ? currentUser.amountOfNotifications > 0
                ? currentUser.amountOfNotifications
                : ''
              : ''}
          </p>
        </i>
      </div>
      {show === true ? (
        <div
          className='overflow-auto'
          style={{
            height: '150px',
            width: '25%',
            left: '0',
            scrollbarWidth: '5px',
            position: 'absolute',
            marginLeft: '75%'
          }}
        >
          {notifications.map(notification => (
            <UserNotification
              userNotification={notification}
              setShow={setShow}
              key={notification.id}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  userNotifications: state.userNotifications,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserNotifications, unsetUserNotifications, changeStatusOfNotifications }
)(UserNotifications);
