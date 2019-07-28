import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Alert = ({ alert: { alert } }) => {
  return (
    <Fragment>
      {alert ? (
        <div className='alert alert-danger w-100 mt-5'>
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
