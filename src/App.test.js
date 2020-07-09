import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('App cointains an .app class as first child', () => {
  const { container } = render(<App />);
  const appFirstChild = container.firstChild;
  expect(appFirstChild).toHaveClass('App')
});