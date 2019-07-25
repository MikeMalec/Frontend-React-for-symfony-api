import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const authLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          My Posts
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          Create Post
        </Link>
      </li>
    </Fragment>
  );

  const logout = (
    <ul className='nav bg-light p-3'>
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          Logout
        </Link>
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

  const authenticated = false;

  return (
    <nav className='navbar navbar-light bg-light justify-content-between'>
      <ul className='nav bg-light p-3'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        {authenticated && authLinks}
      </ul>
      {authenticated ? logout : guestLinks}
    </nav>
  );
};

export default Navbar;
