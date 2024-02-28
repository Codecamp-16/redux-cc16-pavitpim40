// steps :

const { createStore } = require('redux');

// Redux Architecture
// 1.Initial state
const initialState = {
  count: 0,
};
// 2.actions
// action
// {
// 	type: 'INCREMENT',
// }
// action Creator
function incrementAction() {
  return {
    type: 'INCREMENT',
  };
}

// action
// {
// 	type: 'DECREMENT',
// }

// actionCreator
function decrementAction() {
  return {
    type: 'DECREMENT',
  };
}

// action
// {
// 	type: 'RESET',
// }

// actionCreator
function resetAction() {
  return {
    type: 'RESET',
  };
}

// action
// {
// 	type: 'INCREMENT_BY_AMOUNT',
// }

// actionCreator
function incrementByAmountAction(amount) {
  return {
    type: 'INCREMENT_BY_AMOUNT',
    payload: amount,
  };
}

// 3.reducer
const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'INCREMENT_BY_AMOUNT':
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
// 4.store
const store = createStore(counterReducer);

// getState
const stateData = store.getState();
console.log('1', stateData);

// dispatch
store.dispatch(incrementAction());
console.log('2', store.getState());

// subscribe
store.subscribe(() => {
  // console.log('state updated', store.getState());
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(incrementByAmountAction(10));
