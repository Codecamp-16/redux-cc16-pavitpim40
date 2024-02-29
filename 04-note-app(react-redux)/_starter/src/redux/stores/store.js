import { createStore, applyMiddleware } from 'redux';
import { noteReducer } from '../reducers/noteReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

// const rootMiddleware = applyMiddleware(composeWithDevTools());
const rootMiddleware = composeWithDevTools(applyMiddleware());

export const store = createStore(noteReducer, rootMiddleware);
