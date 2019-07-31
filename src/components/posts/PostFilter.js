import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { getFilteredPosts, getPosts } from '../../actions/postActions';

const PostFilter = ({ getFilteredPosts, getPosts }) => {
  const title = useRef('');

  const [params, setParams] = useState({
    category: '',
    mostLiked: null,
    mostDisliked: null,
    newest: null,
    oldest: null
  });

  const { category, mostLiked, mostDisliked, newest, oldest } = params;

  const filterByTitle = e => {
    if (title.current.value !== '') {
      const query = `?title=${title.current.value}`;
      getFilteredPosts(query);
    } else {
      getPosts();
    }
  };

  const onChange = e => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const checkBoxChange = e => {
    if (e.target.value) {
      setParams({ ...params, [e.target.name]: null });
    } else {
      setParams({ ...params, [e.target.name]: 'checked' });
    }
  };

  const filterPosts = e => {
    e.preventDefault();
    let query = `?category=${category}`;
    if (mostLiked && mostDisliked === null) {
      query = query + '&mostLiked=true';
    }
    if (mostDisliked && mostLiked === null) {
      query = query + '&mostDisliked=true';
    }
    if (newest && oldest === null) {
      query = query + '&newest=true';
    }
    if (oldest && newest === null) {
      query = query + '&oldest=true';
    }
    title.current.value = '';
    getFilteredPosts(query);
  };

  return (
    <form className='mt-3' onSubmit={filterPosts}>
      <div className='form-group'>
        <label htmlFor='title'>Post Title</label>
        <input
          ref={title}
          type='text'
          className='form-control'
          name='title'
          placeholder='Post title'
          onChange={filterByTitle}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='category'>Category</label>
        <select className='form-control' name='category' onChange={onChange}>
          <option> </option>
          <option>Web Development</option>
          <option>Artificial Intelligence</option>
          <option>Mobile Development</option>
          <option>Raspberry Pi</option>
        </select>
      </div>
      <div className='form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          name='mostLiked'
          value={mostLiked}
          onChange={checkBoxChange}
        />
        <label className='form-check-label' htmlFor='mostLiked'>
          Most liked
        </label>
      </div>
      <div className='form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          name='mostDisliked'
          onChange={checkBoxChange}
          value={mostDisliked}
        />
        <label className='form-check-label' htmlFor='mostDisliked'>
          Most disliked
        </label>
      </div>
      <div className='form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          name='newest'
          onChange={checkBoxChange}
          value={newest}
        />
        <label className='form-check-label' htmlFor='newest'>
          Newest Posts
        </label>
      </div>
      <div className='form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          name='oldest'
          onChange={checkBoxChange}
          value={oldest}
        />
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

export default connect(
  null,
  { getFilteredPosts, getPosts }
)(PostFilter);
