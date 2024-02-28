const { createStore } = require('redux');

// initial state
const initialState = {
  posts: [],
};

// Actions (action,action creator)
// - add post
// - delete post
// - edit post

// ACTION_TYPE CONSTANT
const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
const EDIT_POST = 'EDIT_POST';

const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: ADD_POST,
    payload: id,
  };
};

const editPostAction = (post) => {
  return {
    type: EDIT_POST,
    payload: post,
  };
};

// reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case EDIT_POST:
      return {
        posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post)),
      };
    default:
      return state;
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
