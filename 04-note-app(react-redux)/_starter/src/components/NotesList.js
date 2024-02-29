import React, { useEffect } from 'react';
import { deleteNote } from '../redux/actions/noteActionCreator';

import './NotesList.css';
import { useSelector, useDispatch } from 'react-redux';

const NotesList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state); // store.subscribe()
  const { notes } = state;

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      <h1>Notes List</h1>
      <div className='item-container'>
        {notes.map((note) => (
          <div className='item-content' key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;
