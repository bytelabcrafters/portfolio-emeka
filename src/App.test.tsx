import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Emeka Abanifi name in hero section', () => {
  render(<App />);
  const nameElement = screen.getByRole('heading', { level: 1, name: /emeka abanifi/i });
  expect(nameElement).toBeInTheDocument();
});
