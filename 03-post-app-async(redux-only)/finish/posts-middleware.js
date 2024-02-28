const { createStore, applyMiddleware } = require('redux');
const loggerMiddleware = require('redux-logger').createLogger();

const initialState = {
  posts: [],
};

// Action

const fetchPostRequest = () => {
  return {
    type: 'FETCH_START',
  };
};

const fetchPostSuccess = () => {
  return {
    type: 'FETCH_SUCCESS',
  };
};

const fetchPostFailure = () => {
  return {
    type: 'FETCH_FAILURE',
  };
};
// reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        posts: ['HTML'],
      };

    default:
      return state;
  }
};

// custom middleware
const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log('Action fire: ', action);
      next(action);
    };
  };
};

// store
const store = createStore(postsReducer, applyMiddleware(loggerMiddleware, customLogger));

// store.subscribe(() => {
//   const data = store.getState();
//   console.log(data);
// });

store.dispatch(fetchPostRequest());
