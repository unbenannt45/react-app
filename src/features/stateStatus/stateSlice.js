import { createSlice } from "@reduxjs/toolkit";

const initialMeanig = {
  initialMeaning: 5, // по сколько должно показывать
  length: 5, // limit на API
};

const stateSlice = createSlice({
  name: "meaning",
  initialState: initialMeanig,
  reducers: {
    setInitialMeaning: (state, action) => {
      state.initialMeaning = +action.payload; // + переводит строковое значение из select в число
    },
    initialLength: (state, action) => {
      state.length = action.payload;
    },
  },
});

export const { setInitialMeaning, initialLength } = stateSlice.actions;
export default stateSlice.reducer;
