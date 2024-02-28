import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { noteReducer } from '../reducer/noteReducer';

// export const store = createStore(noteReducer);
export const store = createStore(noteReducer, composeWithDevTools(applyMiddleware()));
