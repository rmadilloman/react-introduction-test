import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';

import App from '../App';
import theme from '../theme';
import libraryReducer from '../redux/slices/librarySlice';
import searchReducer from '../redux/slices/searchSlice';

describe('App', () => {
  it('renders main application flow', () => {
    const store = configureStore({
      reducer: {
        library: libraryReducer,
        search: searchReducer,
      },
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    );

    expect(
      screen.getByText(/my music library/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/search for an artist/i)
    ).toBeInTheDocument();
  });
});