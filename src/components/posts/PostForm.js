import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import { updatePost } from '../../actions/postActions';
import { setAlert } from '../../actions/alertActions';

const PostForm = ({ posts: { created }, createPost, history, setAlert }) => {
  const [file, setFile] = useState(null);

  const [post, setPost] = useState({
    title: '',
    category: 'Web Development',
    body: '',
    video: null,
    thumbnail: null
  });

  const { title, category, body, video } = post;

  useEffect(() => {
    if (created === true) {
      history.push('/myPosts');
    }
  }, [created, history]);

  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const fileAction = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFile(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || category === '' || body === '') {
      setAlert('Please fill in all fields');
    } else {
      if (file) {
        const postWithThumbnail = {
          title: title,
          category: category,
          body: body,
          video: video,
          thumbnail: file
        };
        createPost(postWithThumbnail);
      } else {
        createPost(post);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          className='form-control'
          name='title'
          placeholder='Enter title'
          value={title}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='category'>Category</label>
        <select
          className='form-control'
          name='category'
          value={category}
          onChange={onChange}
        >
          <option>Web Development</option>
          <option>Artificial Intelligence</option>
          <option>Mobile Development</option>
          <option>Raspberry Pi</option>
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='postBody'>Post body</label>
        <textarea
          className='form-control'
          rows='15'
          name='body'
          value={body}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='title'>Youtube video</label>
        <input
          type='text'
          className='form-control'
          name='video'
          placeholder='Enter embed YT link'
          value={video}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='file'
          className='form-control-file'
          onChange={fileAction}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Make post
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { createPost, updatePost, setAlert }
)(PostForm);
