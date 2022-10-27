import { render, screen } from '@testing-library/react';
import App from './App';

it('heading should exist', () => { 
  render(<App />);
  const heading = screen.getByText(/Taskify/i);
  expect(heading).toBeInTheDocument();
  expect(heading).toBeVisible();
})