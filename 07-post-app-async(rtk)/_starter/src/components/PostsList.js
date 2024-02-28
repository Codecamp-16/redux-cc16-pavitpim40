import React, { useEffect } from 'react';

import SearchPost from './SearchPost';
import './Posts.css';

const PostsList = () => {
  return (
    <>
      <SearchPost />
      <div className='posts-list'>
        <h1>Total Posts : 0</h1>

        <div className='post-details'>
          <h3>Title</h3>
          <p>Body</p>
        </div>
      </div>
    </>
  );
};

export default PostsList;
