/*import { ADD_SONG, REMOVE_SONG } from './libraryActions';

const initialState = [];

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      if (state.some((item) => item.idAlbum === action.payload.idAlbum)) {
        return state; // Avoid duplicates
      }
      return [...state, action.payload];
    case REMOVE_SONG:
      return state.filter((item) => item.idAlbum !== action.payload);
    default:
      return state;
  }
};

export default libraryReducer; */