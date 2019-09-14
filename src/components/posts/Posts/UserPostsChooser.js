import React, { useState, Fragment, useEffect } from 'react';
import UserPosts from '../UserPosts';
import { connect } from 'react-redux';
import {
  getUserPublishedPosts,
  getMoreUserPublishedPosts,
  getUserUnpublishedPosts,
  getMoreUserUnpublishedPosts
} from '../../../actions/postActions';
import Spinner from '../../layouts/Spinner';

const UserPostsChooser = ({
  getUserPublishedPosts,
  getMoreUserPublishedPosts,
  getUserUnpublishedPosts,
  getMoreUserUnpublishedPosts,
  posts: {
    userPublishedPosts,
    amountOfPublishedPosts,
    userUnpublishedPosts,
    amountOfUnpublishedPosts
  },
  loading: { loading }
}) => {
  const [published, setPublished] = useState(true);

  useEffect(() => {
    if (published === true) {
      getUserPublishedPosts();
    } else {
      getUserUnpublishedPosts();
    }
  }, [published]);

  const pointer = { cursor: 'pointer' };

  return (
    <Fragment>
      <div className='text-center'>
        <h3
          className={published === true ? 'text-primary' : 'text-dark'}
          style={pointer}
          onClick={() => setPublished(true)}
        >
          Published
        </h3>
        <h3
          className={published === false ? 'text-primary' : 'text-dark'}
          style={pointer}
          onClick={() => setPublished(false)}
        >
          Not published
        </h3>
      </div>

      {loading === true ? (
        <Spinner />
      ) : published === true ? (
        <UserPosts
          getMoreUserPosts={getMoreUserPublishedPosts}
          amountOfPosts={amountOfPublishedPosts}
          posts={userPublishedPosts}
        ></UserPosts>
      ) : (
        <UserPosts
          getMoreUserPosts={getMoreUserUnpublishedPosts}
          amountOfPosts={amountOfUnpublishedPosts}
          posts={userUnpublishedPosts}
        ></UserPosts>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  {
    getUserPublishedPosts,
    getMoreUserPublishedPosts,
    getUserUnpublishedPosts,
    getMoreUserUnpublishedPosts
  }
)(UserPostsChooser);
