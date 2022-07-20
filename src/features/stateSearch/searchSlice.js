import { createSlice } from "@reduxjs/toolkit";

const initialSearch = {
  search: "", // строка поиска 
  lengthSearch: 0, // длина массива поиска 
};

const searchSlice = createSlice({
  name: "searchProducts",
  initialState: initialSearch,
  reducers: {
    setInitialSearch: (state, action) => {
      state.search = action.payload;
    },
    setLengthSearch: (state, action) => {
      state.lengthSearch = action.payload;
    },
  },
});

export const { setInitialSearch, setLengthSearch } = searchSlice.actions;
export default searchSlice.reducer;
