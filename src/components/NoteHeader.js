import React from 'react';
import { Route, Link } from 'react-router-dom';

const EditButton = ({ match }) => (
  <Link className='noteheader__button' to={`${match.params.id}/edit`}>
    Edit
  </Link>
);

const ViewButton = ({ match }) => (
  <Link className='noteheader__button' to={`/${match.params.id}`}>
    View
  </Link>
);

const NoteHeader = ({ title }) => (
  <header className='noteheader'>
    <h2 className='noteheader__title'>{title}</h2>
    <div>
      <Route exact path='/:id' component={EditButton} />
      <Route path='/:id/edit' component={ViewButton} />
      <Link className='noteheader__button' to='/'>
        Close
      </Link>
    </div>
  </header>
);

export default NoteHeader;
