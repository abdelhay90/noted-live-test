import React from 'react';
import { Route } from 'react-router-dom';

import Markdown from 'react-markdown';

import NoteHeader from './NoteHeader';
import Editor from '../containers/EditorContainer';

export default (props) => {
  const {
    title, body, match
  } = props;
  return (
    <article className={'content'}>
      <NoteHeader title={title} match={match} />
      <div className={'content__panes'}>
        <Markdown className={'content__pane'} source={body} />
        <Route path="/:id/edit" component={Editor} />
      </div>
    </article>
  );
};
