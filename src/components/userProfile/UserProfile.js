import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { updateUserProfile } from '../../actions/userActions';

const UserProfile = ({
  auth: { currentUser },
  updateUserProfile,
  setAlert
}) => {
  const [userProfile, setUserProfile] = useState(currentUser);

  const {
    firstName,
    surname,
    description,
    encodedProfilePicture
  } = userProfile;
  const onChange = e => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const fileAction = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setUserProfile({ ...userProfile, profilePicture: fileReader.result });
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (description === '') {
      setAlert('Tell us something about yourself');
    } else {
      updateUserProfile(userProfile);
    }
  };
  return (
    <Fragment>
      <div className='d-flex justify-content-center'>
        {currentUser.encodedProfilePicture ? (
          <img
            id='thumbnail'
            src={'data:image/jpeg;base64,' + encodedProfilePicture}
            alt='thumbnail'
            className='img-thumbnail w-25 h-25 mt-3'
          />
        ) : (
          <img
            id='thumbnail'
            src={'userProfile.png'}
            alt='thumbnail'
            className='img-thumbnail w-25 h-25 mt-3'
          />
        )}
      </div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
            FirstName
          </label>
          <input
            className='form-control'
            type='text'
            value={firstName}
            readOnly
          />
        </div>
        <div className='form-group'>
          <label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
            Surname
          </label>
          <input
            className='form-control'
            type='text'
            value={surname}
            readOnly
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlTextarea1'>
            Tell us something about yourself
          </label>
          <textarea
            className='form-control'
            rows='3'
            name='description'
            value={description}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlFile1'>
            Set your profile picture
          </label>
          <input
            type='file'
            className='form-control-file'
            onChange={fileAction}
          />
        </div>
        <button type='submit' className='btn btn-primary mb-2'>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { updateUserProfile, setAlert }
)(UserProfile);
