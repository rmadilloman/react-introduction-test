import libraryReducer, { addSong, removeSong } from '../redux/slices/librarySlice';
import searchReducer, { resetResults, fetchSongs } from '../redux/slices/searchSlice';

import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
jest.mock('axios');

const createStore = () =>
  configureStore({
    reducer: { search: searchReducer },
  });


// library slice -----
describe('librarySlice', () => {
  it('adds a song', () => {
    const state = [];
    const song = { idAlbum: '1', strAlbum: 'Test' };

    const result = libraryReducer(state, addSong(song));
    expect(result).toHaveLength(1);
  });

  it('removes a song', () => {
    const state = [{ idAlbum: '1', strAlbum: 'Test' }];
    const result = libraryReducer(state, removeSong('1'));

    expect(result).toHaveLength(0);
  });
});

it('does not add duplicate album', () => {
  const initialState = [{ idAlbum: '1' }];
  const action = {
    type: 'library/addSong',
    payload: { idAlbum: '1' },
  };

  const state = libraryReducer(initialState, action);
  expect(state.length).toBe(1);
});


// search slice -----
describe('searchSlice async branches', () => {
  it('handles empty search term (early return)', async () => {
    const store = createStore();

    await store.dispatch(fetchSongs(''));

    const state = store.getState().search;
    expect(state.results).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('handles API returning no albums', async () => {
    axios.get.mockResolvedValueOnce({
      data: { album: null },
    });

    const store = createStore();

    await store.dispatch(fetchSongs('Coldplay'));

    const state = store.getState().search;
    expect(state.results).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });
});

describe('searchSlice main reducer', () => {
  it('should return initial state', () => {
    const state = searchReducer(undefined, { type: 'unknown' });

    expect(state).toEqual({
      results: [],
      loading: false,
      error: null,
    });
  });

  it('should reset results', () => {
    const state = {
      results: [{ idAlbum: '1' }],
      loading: true,
      error: 'Error',
    };

    const result = searchReducer(state, resetResults());

    expect(result).toEqual({
      results: [],
      loading: false,
      error: null,
    });
  });

  it('handles fetchSongs.pending', () => {
    const action = { type: fetchSongs.pending.type };

    const state = searchReducer(undefined, action);

    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('handles fetchSongs.fulfilled', () => {
    const albums = [{ idAlbum: '1', strAlbum: 'Album One' }];
    const action = {
      type: fetchSongs.fulfilled.type,
      payload: albums,
    };

    const state = searchReducer(undefined, action);

    expect(state.loading).toBe(false);
    expect(state.results).toEqual(albums);
  });

  it('handles fetchSongs.rejected with message', () => {
    const action = {
      type: fetchSongs.rejected.type,
      error: { message: 'API failed' },
    };

    const state = searchReducer(undefined, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe('API failed');
  });

  it('handles fetchSongs.rejected without message', () => {
    const action = {
      type: fetchSongs.rejected.type,
      error: {},
    };

    const state = searchReducer(undefined, action);

    expect(state.error).toBe('Failed to fetch albums');
  });
});