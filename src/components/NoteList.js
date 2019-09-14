import React from 'react';
import NoteListItem from './NoteListItem';

const NoteList = ({ notes }) => {
  return (
    <section className={'notelist'}>
      { notes.map(note => <NoteListItem {...note} key={note.id} />) }
    </section>
  );
};

export default NoteList;
