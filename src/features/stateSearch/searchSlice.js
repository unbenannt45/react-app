import { createSlice } from "@reduxjs/toolkit";

const initialSearch = {
  search: "",
};

const searchSlice = createSlice({
  name: "searchProducts",
  initialState: initialSearch,
  reducers: {
    setInitialSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setInitialSearch } = searchSlice.actions;
export default searchSlice.reducer;
