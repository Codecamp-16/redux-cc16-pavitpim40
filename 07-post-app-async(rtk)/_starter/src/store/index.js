import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';

const store = configureStore({
  // reducer == กล่องเขียวอ่อน (ตาม docs)
  reducer: {
    R1: postReducer,
  },
});

export default store;
