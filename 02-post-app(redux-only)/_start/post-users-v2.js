/*
Application สำหรับจัดการ post,users

Schemas POST : {id:number, title : string} =
schemas POSTS : Array<{id:number, title : string}>

Action 
	- AddPost : ต่อท้าย (push)
	- removePost 
	- editPost 

Schemas Users : Array <{id:number, name:string}>
Action
  - AddUser
  - RemoveUser

*/

// InitalState

// const initialState = []

// 0. State
const initialState = {
  posts: [], // post-Slice
  users: [], // users-Slice
};

const initialStatePosts = {
  posts: [],
};

const initialStateUsers = {
  users: [],
};

// 1.Action
const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
const EDIT_POST = 'EDIT_POST';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

const addPost = (newPost) => {
  return {
    type: ADD_POST,
    payload: newPost, // {id:number, title:string}
  };
};

const removePostById = (postId) => {
  return {
    type: REMOVE_POST,
    payload: postId, // number
  };
};

const editPost = (id, newTitle) => {
  return {
    type: EDIT_POST,
    payload: { id: id, title: newTitle },
  };
};

const addUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser,
  };
};

const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};

const postReducer = (state = initialStatePosts, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = [...state.posts, action.payload];
      const newState = { ...state, posts: newPost };
      return newState;

    case EDIT_POST:
      const { id, title } = action.payload;
      const newPosts = [...state.posts];
      const foundedIndex = state.posts.findIndex((post) => post.id === id);
      if (foundedIndex !== -1) {
        newPosts[foundedIndex] = { ...newPosts[foundedIndex], title: title };
      }
      return { ...state, posts: newPosts };

    case REMOVE_POST:
      const filteredPost = state.posts.filter((post) => post.id !== action.payload);
      return { ...state, posts: filteredPost };

    default:
      return state;
  }
};

const userReducer = (state = initialStateUsers, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUsers = [...state.users, action.payload];
      const newState = { ...state, users: newUsers };
      return newState;
    case REMOVE_USER:
      return state;
    default:
      return state;
  }
};

// 3.Store - Setup
const { createStore, combineReducers } = require('redux');

const rootReducer = combineReducers({
  P: postReducer,
  U: userReducer,
});

// const store = createStore(postReducer);
// store.subscribe(() => {
//   const state = store.getState();
//   console.log('>>', state); // { posts: [ { id: 3, title: 'JS' } ], users: [] }
// });

const store = createStore(rootReducer);
store.subscribe(() => {
  const state = store.getState();
  console.log('>>', state.P); // การเลือก state ตามชื่อ Reducer ที่ Store รู้จัก => Concept : Selector
  console.log('>>', state.U);
  console.log('--------------------------');
});

// 4.Store - Subscribe & Dispatch

store.dispatch(addPost({ id: 1, title: 'HTML' }));
store.dispatch(addPost({ id: 2, title: 'CSS' }));
store.dispatch(addPost({ id: 3, title: 'JS' }));
store.dispatch({ type: 'ที่ไม่มีอยู่จริง' });
store.dispatch(removePostById(2));
store.dispatch({ type: 'ที่ typo error' });
store.dispatch(removePostById(1));
store.dispatch(editPost(3, 'Javascript'));
store.dispatch(editPost(4, 'React'));

store.dispatch(addUser({ id: 1, name: 'Pavit' }));
store.dispatch(addUser({ id: 2, name: 'Hasun' }));
