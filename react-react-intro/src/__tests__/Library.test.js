import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import Library from '../components/Library';

describe('Library Component', () => {
  it('shows empty message', () => {
    renderWithProviders(<Library />, {
      preloadedState: { library: [] },
    });

    expect(
      screen.getByText(/your library is empty/i)
    ).toBeInTheDocument();
  });

  it('removes album when Remove is clicked', () => {
    renderWithProviders(<Library />, {
      preloadedState: {
        library: [{ idAlbum: '1', strAlbum: 'Thriller' }],
      },
    });

    fireEvent.click(screen.getByText(/remove/i));
    expect(screen.queryByText('Thriller')).not.toBeInTheDocument();
  });
});