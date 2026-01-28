import { screen } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
  it('shows loading state', () => {
    renderWithProviders(<SearchResults />, {
      preloadedState: {
        search: { loading: true, error: null, results: [] },
        library: [],
      },
    });

    expect(
      screen.getByText(/loading albums/i)
    ).toBeInTheDocument();
  });

  it('renders albums from state', () => {
    renderWithProviders(<SearchResults />, {
      preloadedState: {
        search: {
          loading: false,
          error: null,
          results: [
            { idAlbum: '1', strAlbum: 'Album One', intYearReleased: '2020' },
          ],
        },
        library: [],
      },
    });

    expect(screen.getByText('Album One')).toBeInTheDocument();
    expect(screen.getByText('Year: 2020')).toBeInTheDocument();
  });

  it('shows error message and retry button', () => {
  renderWithProviders(<SearchResults />, {
    preloadedState: {
      search: { loading: false, error: 'API failed', results: [] },
      library: [],
    },
  });

  expect(screen.getByText(/error: api failed/i)).toBeInTheDocument();
  expect(screen.getByText(/try again/i)).toBeInTheDocument();
});

it('renders fallback image and unknown year', () => {
  renderWithProviders(<SearchResults />, {
    preloadedState: {
      search: {
        loading: false,
        error: null,
        results: [
          { idAlbum: '1', strAlbum: 'Test Album' },
        ],
      },
      library: [],
    },
  });

  expect(screen.getByText('Test Album')).toBeInTheDocument();
  expect(screen.getByText(/unknown/i)).toBeInTheDocument();

  const img = screen.getByRole('img');
  expect(img.src).toContain('placehold.co');
});

});
