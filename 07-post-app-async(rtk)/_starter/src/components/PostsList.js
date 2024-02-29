import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/slices/postSlice';

import SearchPost from './SearchPost';
import './Posts.css';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((store) => store.R1);

  useEffect(() => {
    // dispatch(actionCreator())
    dispatch(fetchPosts()); // payload : undifined
    // dispatch(fetchPosts(100, 500, 400)); // payload : 100
  }, []);

  /* 
   {
  userId: number
  id: number
  title: string
  body: string
}
  */
  return (
    <>
      <SearchPost />
      <div className='posts-list'>
        <h1>Total Posts : 0</h1>

        <div className='post-details'>
          {error && <div>{error}</div>}
          {!error && loading && posts.length === 0 ? (
            <div>Loading....</div>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PostsList;
