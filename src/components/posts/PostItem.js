import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = () => {
  return (
    <div className='card mt-5'>
      <div className='card-header' />
      <div className='card-body'>
        <h5 className='card-title' />
        <p className='card-text' />
        <Link to='/posts' className='btn btn-primary'>
          Read Post
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
