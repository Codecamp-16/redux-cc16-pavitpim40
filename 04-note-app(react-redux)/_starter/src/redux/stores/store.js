import { createStore } from 'redux';
import { noteReducer } from '../reducers/noteReducer';

// const rootReducer = combineReducers(noteReducer);

export const store = createStore(noteReducer);
