import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, setPost, publishPost } from '../../actions/postActions';
import Spinner from '../layouts/Spinner';

const UserPost = ({
  post,
  deletePost,
  setPost,
  publishPost,
  loading: { loading, currentId },
  auth: { currentUser }
}) => {
  const decodedThumbnail = 'data:image/jpeg;base64,' + post.encodedThumbnail;
  const {
    title,
    body,
    createdAt,
    updatedAt,
    encodedThumbnail,
    id,
    published
  } = post;
  const { name } = post.category;

  if (loading && post.id === currentId) {
    return <Spinner />;
  } else {
    return (
      <div className='container'>
        <div className='card mt-5 p-1'>
          <div className='card-header p-1'>
            <h3>
              {title} by{' '}
              <Link to={`/showUserProfile/${post.user.id}`}>
                {post.user.firstName} {post.user.surname}
              </Link>
            </h3>
          </div>
          <div className='card-body p-1'>
            <h5 className='card-title '>Category: {name}</h5>
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
              <div className='flex-fill p-1'>{body.slice(0, 600)}...</div>
            </div>
            <p className='mt-1 text-primary'>Created:{createdAt}</p>
            <p className='text-primary'>
              {updatedAt ? `edited: ${updatedAt}` : ''}
            </p>
            <Link to={`/posts/${id}`} className='btn btn-primary'>
              Read Post
            </Link>
            <i className='fas fa-thumbs-up mr-2 ml-4'>{post.amountOfLikes}</i>
            <i className='fas fa-thumbs-down'>{post.amountOfDislikes}</i>
            {currentUser !== null
              ? currentUser.id === post.user.id && (
                  <div className='d-flex justify-content-end'>
                    {published === true ? (
                      ''
                    ) : (
                      <i
                        style={{ cursor: 'pointer', color: 'green' }}
                        className='far fa-check-circle fa-2x mr-2'
                        onClick={() => publishPost(post)}
                      ></i>
                    )}
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
  { deletePost, setPost, publishPost }
)(UserPost);
