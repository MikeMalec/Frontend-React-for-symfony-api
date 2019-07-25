import React from 'react';

const PostFilter = () => {
  return (
    <form className='mt-3'>
      <div className='form-group'>
        <label htmlFor='title'>Post Title</label>
        <input
          type='text'
          className='form-control'
          name='title'
          placeholder='Post title'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='category'>Category</label>
        <select className='form-control' name='category'>
          <option> </option>
          <option>Web Development</option>
          <option>Artificial Intelligence</option>
          <option>Mobile Development</option>
          <option>Raspberry Pi</option>
        </select>
      </div>
      <div className='form-check'>
        <input type='checkbox' className='form-check-input' name='mostLiked' />
        <label className='form-check-label' htmlFor='mostLiked'>
          Most liked
        </label>
      </div>
      <div className='form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          name='mostDisliked'
        />
        <label className='form-check-label' htmlFor='mostDisliked'>
          Most disliked
        </label>
      </div>
      <div className='form-check'>
        <input type='checkbox' className='form-check-input' name='newest' />
        <label className='form-check-label' htmlFor='newest'>
          Newest Posts
        </label>
      </div>
      <div className='form-check'>
        <input type='checkbox' className='form-check-input' name='oldest' />
        <label className='form-check-label' htmlFor='oldest'>
          Oldest Posts
        </label>
      </div>
      <button type='submit' className='btn btn-primary mt-3'>
        Submit
      </button>
    </form>
  );
};

export default PostFilter;
