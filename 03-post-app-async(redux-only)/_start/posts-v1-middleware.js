/*
Concept 
	1. Middleware (Plugin)
	2. Handle Async Task (Thunk Middleware)
*/

// Step-0 : init state
const initialState = {
  posts: [],
};

// 1. Action
// Promise : Pending กับ Resolve (Fullfilled,Rejected)
const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

// Action Creatore : ฟังก์ชันที่สร้าง Action Object
const fetchPostPending = () => {
  return {
    type: FETCH_POSTS_PENDING,
  };
};

// 2. Reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return { posts: [...state.posts, 'HTML'] }; //mockReturn Value

    default:
      return state;
  }
};

// 3 Store
// 3.5 Middleware
const { createStore, applyMiddleware } = require('redux');
const loggerMiddleware = require('redux-logger').default;

// 3.75 Custom Middle เอง (เขียนตาม template)
const myMiddleware = () => {
  return (next) => {
    return (action) => {
      // Do something
      console.log('Action Fire 🔥', action);

      // Call Next Middleware
      next(action);
    };
  };
};

const rootMiddleware = applyMiddleware(loggerMiddleware, myMiddleware, myMiddleware); // applyMiddleware(...middleware)
const store = createStore(postReducer, rootMiddleware);
// createStore(rootReducer,rootMiddleware)

// 4. Sub / Dispatch
// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(fetchPostPending());
// store.dispatch(fetchPostPending());
