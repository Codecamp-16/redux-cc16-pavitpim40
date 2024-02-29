import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../store/noteSlice';

import './NotesList.css';

const NotesList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.n1);
  console.log(data);
  const { notes } = data;

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
    // dispatch({type: nt/deleteNote, payload : id}})
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
