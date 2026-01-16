import { createSlice } from '@reduxjs/toolkit';

const initialState = [];  // Empty array for library

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addSong: (state, action) => {
      const song = action.payload;
      if (!state.some((item) => item.idAlbum === song.idAlbum)) {
        state.push(song);
      }
    },
    removeSong: (state, action) => {
      const songId = action.payload;
      return state.filter((item) => item.idAlbum !== songId);
    },
  },
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;