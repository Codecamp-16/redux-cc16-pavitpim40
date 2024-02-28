const axios = require('axios');

// Step-0 : init state
const initialState = {
  posts: [],
  loading: false,
  error: '',
};

// 1. Action
// Promise : Pending กับ Resolve (Fullfilled,Rejected)
const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

// Action Creator : ฟังก์ชันที่สร้าง Action Object
const fetchPostPending = () => {
  return {
    type: FETCH_POSTS_PENDING,
  };
};

const fetchPostSuccess = (allPosts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: allPosts,
  };
};

const fetchPostError = (errorMessage) => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: errorMessage,
  };
};

// 2. Reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return { ...state, loading: true, error: '' };
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false, error: '' };
    case FETCH_POSTS_ERROR:
      return { ...state, posts: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

// 3 Store
// 3.5 Middleware
const { createStore, applyMiddleware } = require('redux');
const loggerMiddleware = require('redux-logger').default;
const { thunk } = require('redux-thunk');

const rootMiddleware = applyMiddleware(loggerMiddleware, thunk); // applyMiddleware(...middleware)
const store = createStore(postReducer, rootMiddleware);
// createStore(rootReducer,rootMiddleware)

// Real-Action
const fetchPostFromAPI = () => {
  // return Promise Object
  return async function (dispatch) {
    dispatch(fetchPostPending());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/postsssssssssss');
      dispatch(fetchPostSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostError(error.message));
    }
  };
};

store.dispatch(fetchPostFromAPI());
