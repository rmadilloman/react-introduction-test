import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import SearchBar from '../components/SearchBar';
import * as searchSlice from '../redux/slices/searchSlice'; // worked as a blank call


jest.spyOn(searchSlice, 'fetchSongs'); // seemingly an alternative to mocking, can also work

describe('SearchBar Component', () => {
  it('renders input and button', () => {
    renderWithProviders(<SearchBar />);

    expect(
      screen.getByPlaceholderText(/Search for an artist/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /search/i })
    ).toBeInTheDocument();
  });

   
  it('allows typing', () => {
    renderWithProviders(<SearchBar onSearch={jest.fn()} />);

    const input = screen.getByPlaceholderText(/search for an artist/i);
    fireEvent.change(input, { target: { value: 'Coldplay' } });

    expect(input.value).toBe('Coldplay');
  });

  it('does NOT dispatch when input is empty', () => {
    renderWithProviders(<SearchBar />);

    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(searchSlice.fetchSongs).not.toHaveBeenCalled();
  });
});