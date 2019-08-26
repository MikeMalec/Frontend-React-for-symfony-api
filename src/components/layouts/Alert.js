import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Alert = ({ alert: { alert } }) => {
  return (
    <Fragment>
      {alert ? (
        <div
          className='alert alert-danger'
          style={{ position: 'absolute', width: '15%', marginLeft: '22%' }}
        >
          <i className='fas fa-info-circle' /> {alert}
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps)(Alert);
