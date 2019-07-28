import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';

const Login = ({ auth: { isAuthenticated }, login, setAlert, history }) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

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
    if (username === '' || username === '') {
      setAlert('Please fill in all fields');
    } else {
      login(user);
      setUser({ ...user, username: '', password: '' });
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className='w-100'>
        <h1 className='text-center mt-5'>Login</h1>
        <form className='mt-1 bg-light p-5' onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              name='username'
              placeholder='Enter email'
              value={username}
              onChange={onChange}
            />
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
          </div>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login, setAlert }
)(Login);
