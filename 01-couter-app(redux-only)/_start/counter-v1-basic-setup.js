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
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

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

store.dispatch({ type: INCREMENT });
//console.log(store.getState()); // 1

store.dispatch({ type: INCREMENT });
//console.log(store.getState()); // 2

store.dispatch({ type: DECREMENT });
//console.log(store.getState()); // 1

store.dispatch({ type: RESET });
//console.log(store.getState()); // 0

// store.getState() , store.subscribe(), store.dispatch()
