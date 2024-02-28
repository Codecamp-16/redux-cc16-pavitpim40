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
const INCREMENT_BY_FIVE = 'INCREMENT_BY_FIVE';

// Action Object
const increment = {
  type: INCREMENT,
};

const decrement = {
  type: DECREMENT,
};

const reset = {
  type: RESET,
};

const incrementByFive = {
  type: INCREMENT_BY_FIVE,
  payload: 5,
};

// 2. Reducer - FN ที่ใช้อัพเดท Store
// Input  : state,action
// Output : newState (Philo : Immutable จะไม่แก้ไข state เดิม แต่คืนค่า state ใหม่แทน)

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  } else if (action.type === RESET) {
    return initialState;
  } else if (action.type === INCREMENT_BY_FIVE) {
    return { count: state.count + action.payload };
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

console.log(store.getState()); // undefined

store.dispatch(increment);
//console.log(store.getState()); // 1

store.dispatch(increment);
//console.log(store.getState()); // 2

store.dispatch(decrement);
//console.log(store.getState()); // 1

store.dispatch(reset);
//console.log(store.getState()); // 0

store.dispatch(incrementByFive);
store.dispatch(incrementByFive);

// store.getState() , store.subscribe(), store.dispatch()
