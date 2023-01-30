import { render, screen } from '@testing-library/react';
import App from './App';

test('Comprobar que renderiza ok', () => {
  render(<App />);
  const title = screen.getByText(/Podcaster/i);
  expect(title).toBeInTheDocument();
});
