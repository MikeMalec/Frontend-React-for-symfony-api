import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { updatePost, unsetCurrentPost } from '../../actions/postActions';
import { setAlert } from '../../actions/alertActions';
import Spinner from '../layouts/Spinner';
import { useFileHandling } from '../../customHooks/fileHooks/useFileHandling';

const EditForm = ({
  posts: { created, currentPost },
  updatePost,
  unsetCurrentPost,
  history,
  setAlert,
  loading
}) => {
  const fileHandlingHook = useFileHandling();

  const thumbnail = 'data:image/jpeg;base64,' + currentPost.encodedThumbnail;
  const [post, setPost] = useState({});

  const { title, category, body, video } = post;
  useEffect(() => {
    if (created === true) {
      history.push('/myPosts');
    } else {
      currentPost.category = currentPost.category.name;
      setPost(currentPost);
    }
    return () => {
      unsetCurrentPost();
    };
  }, [created, history]);
  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || category === '' || body === '') {
      setAlert('Please fill in all fields');
    } else {
      if (fileHandlingHook.file !== null) {
        const postWithThumbnail = { ...post, thumbnail: fileHandlingHook.file };
        updatePost(postWithThumbnail);
      } else {
        updatePost(post);
      }
    }
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
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
              value={video ? video : null}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='file'>Change thumbnail</label>
            <input
              type='file'
              className='form-control-file'
              onChange={fileHandlingHook.fileAction}
            />
          </div>
          <button type='submit' className='btn btn-primary mt-3 mb-5'>
            Update Post
          </button>
        </form>
        <div>
          <h3>Current thumbnail</h3>
          {currentPost.encodedThumbnail && (
            <img
              id='thumbnail'
              src={thumbnail}
              alt='thumbnail'
              className='img-thumbnail w-100 h-100'
            />
          )}
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading.loading
});

export default connect(
  mapStateToProps,
  {
    updatePost,
    unsetCurrentPost,
    setAlert
  }
)(EditForm);
