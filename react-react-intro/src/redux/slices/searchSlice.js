import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  results: [],
  loading: false,
  error: null,
};

export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (searchTerm) => {
    if (!searchTerm) return [];
        const url = `/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`;
    const response = await axios.get(url);
    return response.data.album || [];  // Return albums array
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch albums';
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;