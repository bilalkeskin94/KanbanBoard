import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchComponent: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { searchComponent } = searchSlice.actions;

export default searchSlice.reducer;
