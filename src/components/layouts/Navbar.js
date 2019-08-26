import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import UserNotifications from '../UserNotifications/UserNotifications';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const logoutUser = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link to='/myProfile' className='nav-link'>
          My Profile
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/myPosts' className='nav-link'>
          My Posts
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/createPost' className='nav-link'>
          Create Post
        </Link>
      </li>
    </Fragment>
  );

  const logoutLink = (
    <ul className='nav bg-light p-3'>
      <li>
        <UserNotifications />
      </li>
      <li className='nav-item'>
        <button className='btn btn-link' onClick={logoutUser}>
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='nav bg-light p-3'>
      <li className='nav-item'>
        <Link to='/register' className='nav-link'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/login' className='nav-link'>
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-light bg-light justify-content-between'>
      <ul className='nav bg-light p-3'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        {isAuthenticated && authLinks}
      </ul>
      {isAuthenticated ? logoutLink : guestLinks}
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
