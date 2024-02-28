import React, { useEffect } from 'react';

import './NotesList.css';

const NotesList = () => {
  const handleDelete = (id) => {};

  return (
    <>
      <h1>Notes List</h1>

      <div className='item-container'>
        {[].map((note) => (
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
