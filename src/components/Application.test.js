import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

describe('Placeholder Test', () => {
  it('runs a test suite, I guess', () => {
    expect(false).toBe(true);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Application />, div);
  });
});
