import React, { Fragment } from 'react';
import PostFilter from '../posts/PostFilter';
import Posts from '../posts/Posts';

const Home = () => {
  return (
    <Fragment>
      <PostFilter />
      <Posts />
    </Fragment>
  );
};

export default Home;
