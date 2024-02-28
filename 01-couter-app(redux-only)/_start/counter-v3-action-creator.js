const { createStore } = require('redux');

/* 
REQUIREMENT : Counter APP
	- Action : +,-,reset
	- State ตั้งต้น : 0
*/

const initialState = {
  count: 0,
};

// 1. Action

// Action Constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Action Creator : Function ที่ใช้สร้าง Action Object
const incrementAction = (n = 1) => {
  return {
    type: INCREMENT,
    payload: n,
  };
};

const decrementAction = (n = 1) => {
  return {
    type: DECREMENT,
    payload: n,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

// 2. Reducer - FN ที่ใช้อัพเดท Store
// Input  : state,action
// Output : newState (Philo : Immutable จะไม่แก้ไข state เดิม แต่คืนค่า state ใหม่แทน)

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + action.payload };
  } else if (action.type === DECREMENT) {
    return { count: state.count - action.payload };
  } else if (action.type === RESET) {
    return initialState;
  }
};

// 3. Store
const store = createStore(counterReducer);

// ทำอะไรกับ Store ได้บ้าง
// 1.Dispatch
// 2.Subscribe

// Sub : Fn จะถูกรันทุกครั้งที่ Store เปลี่ยนแปลง
store.subscribe(() => {
  const currentState = store.getState();
  console.log('>>', currentState);
});

// store.dispatch({ type: INCREMENT });
// store.dispatch(increment)
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(20));
store.dispatch(incrementAction(20));
store.dispatch(incrementAction(1));

store.dispatch(decrementAction(5));
store.dispatch(decrementAction(10));

store.dispatch(resetAction());

// store.getState() , store.subscribe(), store.dispatch()
