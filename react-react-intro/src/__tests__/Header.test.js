import { screen } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import Header from '../components/Header';

it('renders title', () => {
  renderWithProviders(<Header />);
  expect(screen.getByText(/my music library/i)).toBeInTheDocument();
});
