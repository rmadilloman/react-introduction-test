import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';

import theme from './theme';
import libraryReducer from './redux/slices/librarySlice';
import searchReducer from './redux/slices/searchSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        library: libraryReducer,
        search: searchReducer,
      },
      preloadedState,
    }),
    route = '/',
  } = {}
) {
  return {
    store,
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={[route]}>
            {ui}
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    ),
  };
}
