/*
Application สำหรับจัดการ post 

Schemas POST : {id:number, title : string} =
schemas POSTS : Array<{id:number, title : string}>

Action 
	- AddPost : ต่อท้าย (push)
	- removePost 
	- editPost 
*/

// InitalState

// const initialState = []

// 0. State
const initialState = {
  posts: [],
  // users: [],
};

// 1.Action
const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
const EDIT_POST = 'EDIT_POST';

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

// 2. Reducer - FN รับ 2 Params
// const postReducer = (state = initialState, action) => {
//   if (action.type === ADD_POST) {
//     // Best-Practice
//     const newPost = [...state.posts, action.payload];
//     const newState = { ...state, posts: newPost };
//     return newState;

//     // Bad-Practice
//     // state.posts.push(action.payload);
//     // return state;
//   } else if (action.type === REMOVE_POST) {
//     // payload คือ postId
//     const newPost = state.posts.filter((post) => post.id !== action.payload);
//     return { ...state, posts: newPost };
//   } else if (action.type === EDIT_POST) {
//     const { id, title } = action.payload;
//     const newPosts = [...state.posts];

//     const foundedIndex = state.posts.findIndex((post) => post.id === id);
//     if (foundedIndex !== -1) {
//       newPosts[foundedIndex] = { ...newPosts[foundedIndex], title: title };
//     }
//     return { ...state, posts: newPosts };
//   } else {
//     return state;
//   }
// };
const postReducer = (state = initialState, action) => {
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

// 3.Store - Setup
const { createStore } = require('redux');
const store = createStore(postReducer);

// 4.Store - Subscribe & Dispatch
store.subscribe(() => {
  const state = store.getState();
  console.log('>>', state);
});

store.dispatch(addPost({ id: 1, title: 'HTML' }));
store.dispatch(addPost({ id: 2, title: 'CSS' }));
store.dispatch(addPost({ id: 3, title: 'JS' }));
store.dispatch({ type: 'ที่ไม่มีอยู่จริง' });
store.dispatch(removePostById(2));
store.dispatch({ type: 'ที่ typo error' });
store.dispatch(removePostById(1));
store.dispatch(editPost(3, 'Javascript'));
store.dispatch(editPost(4, 'React'));
