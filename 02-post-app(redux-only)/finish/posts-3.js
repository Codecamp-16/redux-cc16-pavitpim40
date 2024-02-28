const { createStore, combineReducers } = require('redux');

// initial state
const initialState = {
  posts: [],
};

const userInitialState = {
  users: [],
};
// Actions (action,action creator)
// - add post
// - delete post
// - edit post

// ACTION_TYPE CONSTANT
const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
const EDIT_POST = 'EDIT_POST';

const ADD_USER = 'ADD_USER';

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

const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// reducer
const postReducer = (state = initialState, action) => {
  // Convert to switch case
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

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

// root reducer
const rootReducer = combineReducers({
  p: postReducer,
  u: userReducer,
});

// store
const store = createStore(rootReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch
store.dispatch(addPostAction({ id: 1, title: 'post 1' }));
store.dispatch(addPostAction({ id: 2, title: 'post 2' }));
