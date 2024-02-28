import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from '../actions/noteActionType';

const initialState = {
  notes: [],
};

// note reducer
export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const updatedNotes = [...state.notes, action.payload];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return {
        notes: updatedNotes,
      };
    case DELETE_NOTE:
      const filteredNotes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem('notes', JSON.stringify(filteredNotes));
      return {
        notes: filteredNotes,
      };
    case FETCH_NOTES:
      const data = localStorage.getItem('notes');
      return {
        notes: data ? JSON.parse(data) : [],
      };
    default:
      return state;
  }
};
