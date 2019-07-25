import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register, setAlert } from '../../actions/authActions';

const Register = ({
  auth: { isAuthenticated },
  register,
  setAlert,
  history
}) => {
  const [user, setUser] = useState({
    email: '',
    firstName: '',
    surname: '',
    password: ''
  });

  const { email, firstName, surname, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || firstName === '' || surname === '' || password === '') {
      setAlert('Please fill all fields');
    } else {
      register(user);
      setUser({ ...user, email: '', firstName: '', surname: '', password: '' });
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className='w-100'>
        <h1 className='text-center mt-5'>Account Register</h1>
        <form className='mt-1 bg-light p-5' onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              name='email'
              placeholder='Enter email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              name='firstName'
              placeholder='Enter first name'
              value={firstName}
              onChange={onChange}
            />
            <small className='form-text text-muted'>
              <p className='text-primary'>Use at least 2 characters</p>
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='surname'>Surname</label>
            <input
              type='text'
              className='form-control'
              name='surname'
              placeholder='Enter surname'
              value={surname}
              onChange={onChange}
            />
            <small className='form-text text-muted'>
              <p className='text-primary'>Use at least 2 characters</p>
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              placeholder='Enter password'
              value={password}
              onChange={onChange}
            />
            <small className='form-text text-muted'>
              <p className='text-primary'>Use at least 6 characters</p>
            </small>
          </div>
          <button type='submit' className='btn btn-primary'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { register, setAlert }
)(Register);
