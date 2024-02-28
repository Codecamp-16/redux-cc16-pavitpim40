const { createStore, applyMiddleware } = require('redux');
const axios = require('axios');
const thunk = require('redux-thunk').default;

const initialState = {
  posts: [],
  error: '',
  loading: false,
};

// Action
const REQUEST_START = 'REQUEST_START';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAILURE = 'REQUEST_FAILURE';

const fetchPostRequest = () => {
  return {
    type: REQUEST_START,
  };
};

const fetchPostSuccess = (posts) => {
  return {
    type: REQUEST_SUCCESS,
    payload: posts,
  };
};

const fetchPostFailure = (err) => {
  return {
    type: REQUEST_FAILURE,
    payload: err,
  };
};

//  action to make the API call
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostRequest());
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(fetchPostSuccess(data));
    } catch (error) {
      dispatch(fetchPostFailure(error.message));
    }
  };
};

// reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: '',
        loading: false,
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// store
const store = createStore(postsReducer, applyMiddleware(thunk));

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

store.dispatch(fetchPosts());
