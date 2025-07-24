import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the home page with the main heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Check for the main heading on the Home page. Note: The name is split by a <br> tag.
  const headingElement = screen.getByRole('heading', { name: /Lukas Klinga/i, level: 1 });
  expect(headingElement).toBeInTheDocument();
});
