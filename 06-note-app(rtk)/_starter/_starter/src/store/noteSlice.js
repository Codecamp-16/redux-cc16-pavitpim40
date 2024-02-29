// Slice = ชุดข้อมูล : เขียน 1 ได้ถึง 3 (Action,ActionCreator,Reducer)

// 0. State
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  loading: false,
  error: '',
};

// createSlice({name,initState,reducers})

const noteSlice = createSlice({
  name: 'nt', // Prefix ของ type : nt/addNote, nt/deleteNote, nt/fetchNote
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      // เขียน code เหมือน mutable แต่เบื้องหลัง immer ทำเป็น Immutable ให้
      // implicit return (ไม่ต้องเขียน return state ใหม่เอง)
    },
    deleteNote: (state, action) => {
      const foundedIndex = state.notes.findIndex((n) => n.id === action.payload);
      if (foundedIndex !== -1) state.notes.splice(foundedIndex, 1);
    },
    fetchNote: (state, action) => {},
  },
});

// auto generate ActionCreator ให้
const { addNote, deleteNote, fetchNote } = noteSlice.actions;
export { addNote, deleteNote, fetchNote }; // เอาไปให้ dispatch

// auto generate Reducer ให้
const noteReducer = noteSlice.reducer;
export default noteReducer; // เอาไปติดตั้งใน store
