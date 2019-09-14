import React, { Fragment, useEffect, useState } from 'react';
import UserPost from './UserPost';
import { usePagination } from '../../customHooks/paginationHooks/usePagination';

const UserPosts = ({ getMoreUserPosts, posts, amountOfPosts }) => {
  usePagination(getMoreUserPosts, amountOfPosts);

  return (
    <Fragment>
      {posts && posts.map(post => <UserPost key={post.id} post={post} />)}
    </Fragment>
  );
};

export default UserPosts;
