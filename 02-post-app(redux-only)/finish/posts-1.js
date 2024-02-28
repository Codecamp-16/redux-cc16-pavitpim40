const { createStore } = require('redux');

// initial state
const initialState = {
  posts: [],
};

// Actions (action,action creator)
// - add post
// - delete post
// - edit post

const addPostAction = (post) => {
  return {
    type: 'ADD_POST',
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: 'REMOVE_POST',
    payload: id,
  };
};

// reducer
const postReducer = (state = initialState, action) => {
  if (action.type === 'ADD_POST') {
    return {
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === 'REMOVE_POST') {
    return {
      posts: state.posts.filter((post) => post.id !== action.payload),
    };
  }
};

// store
const store = createStore(postReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch
store.dispatch(addPostAction({ id: 1, title: 'post 1' }));
store.dispatch(addPostAction({ id: 2, title: 'post 2' }));
