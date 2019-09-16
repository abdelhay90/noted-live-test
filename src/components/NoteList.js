import React from 'react';
import NoteListItem from './NoteListItem';

const NoteList = ({ notes }) => {
  return (
    <section className='notelist'>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {notes.map(note => (
        <NoteListItem {...note} key={note.id} />
      ))}
    </section>
  );
};

export default NoteList;
