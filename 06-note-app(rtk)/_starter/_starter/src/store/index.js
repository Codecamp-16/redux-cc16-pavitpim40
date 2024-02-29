import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';

const store = configureStore({
  reducer: {
    n1: noteReducer,
  },
});

export default store;

/*
Redux Toolkit  

PROS
- ลด OverHead
- Slice == ActionCreator + Reducer 
- ไม่ต้องเขียง ActionType เอง (Type = nameSlice/nameReducer )
- Auto Compose with Devtool
- Pre-install Thunk API
- ไม่ต้อง Combine Reducer เอง
- เขียน code เหมือน mutable แต่เบื้องหลัง immer ทำเป็น Immutable ให้
- implicit return (ไม่ต้องเขียน return state ใหม่เอง)

CONS : ทุกอย่าง Behind the Scence
*/
