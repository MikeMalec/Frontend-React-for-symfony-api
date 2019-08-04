import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, setPost } from '../../actions/postActions';
import Spinner from '../layouts/Spinner';

const UserPost = ({
  post,
  deletePost,
  setPost,
  loading: { loading, currentId },
  auth: { isAuthenticated, currentUser }
}) => {
  const decodedThumbnail = 'data:image/jpeg;base64,' + post.encodedThumbnail;
  const { title, body, createdAt, updatedAt, encodedThumbnail, id } = post;
  const { name } = post.category;

  if (loading && post.id === currentId) {
    return <Spinner />;
  } else {
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
            {currentUser !== null
              ? currentUser.id === post.user.id && (
                  <div className='d-flex justify-content-end'>
                    <Link to='/editPost' onClick={() => setPost(post)}>
                      <i className='fas fa-edit fa-2x' />
                    </Link>
                    <i
                      className='fas fa-trash-alt fa-2x ml-2'
                      style={{ cursor: 'pointer' }}
                      onClick={() => deletePost(post)}
                    />
                  </div>
                )
              : ''}
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, setPost }
)(UserPost);
