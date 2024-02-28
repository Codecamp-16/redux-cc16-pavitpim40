import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from '../actions/noteActionType';

const initialState = {
  notes: [],
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNotes = [...state.notes, action.payload];
      return { notes: newNotes };
    case DELETE_NOTE:
      const filteredNotes = state.notes.filter((note) => note.id !== action.payload);
      return { notes: filteredNotes };
    case FETCH_NOTE:
      return state;
    default:
      return state;
  }
};
