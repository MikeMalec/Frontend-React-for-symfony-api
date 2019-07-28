import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, setPost } from '../../actions/postActions';

const UserPost = ({ post, deletePost, setPost }) => {
  const [img, setImg] = useState({
    decodedThumbnail: 'data:image/jpeg;base64,' + post.encodedThumbnail
  });
  const { decodedThumbnail } = img;
  const { title, body, createdAt, updatedAt, encodedThumbnail, id } = post;
  const { name } = post.category;

  return (
    <div className='container'>
      <div className='card mt-5'>
        <div className='card-header'>
          <h3>{title}</h3>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>Category: {name}</h5>
          <div className='d-flex'>
            <div className='flex-fill'>
              {encodedThumbnail && (
                <div className='d-inline'>
                  <img
                    id='thumbnail'
                    src={decodedThumbnail}
                    alt='thumbnail'
                    className='img-thumbnail w-100 h-100'
                  />
                </div>
              )}
            </div>
            <div className='flex-fill'>{body.slice(0, 600)}...</div>
          </div>
          <p className='mt-1 text-primary'>Created:{createdAt}</p>
          <p className='text-primary'>
            {updatedAt ? `edited: ${updatedAt}` : ''}
          </p>
          <Link to={`/posts/${id}`} className='btn btn-primary'>
            Read Post
          </Link>
          <div className='d-flex justify-content-end'>
            <Link
              to='/editPost'
              type='button'
              className='btn btn-warning'
              onClick={() => setPost(post)}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn btn-danger ml-1'
              onClick={() => deletePost(post)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deletePost, setPost }
)(UserPost);
