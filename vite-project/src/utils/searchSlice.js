// utils/searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => action.payload,  // Update search term
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
