import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from './noteActionType';

export const addNote = (newNote) => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

export const fetchNotes = () => {
  return {
    type: FETCH_NOTE,
  };
};
