import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders successfully', () => {
  render(<App />);
});

test('has a heading', () => {
  const {getByText} = render(<App />);
  let howdy = getByText('Howdy, Fellow Coaches!');
  expect(howdy).toBeInTheDocument();
  expect(howdy.tagName.toLowerCase()).toBe('h1');
});

