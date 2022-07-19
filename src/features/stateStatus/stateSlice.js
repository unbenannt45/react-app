import { createSlice } from "@reduxjs/toolkit";

const initialMeanig = {
  initialMeaning: 5, // по сколько должно показывать
  appState: 5, // начальное значение limita
  length: 5, // limit на API
};

const stateSlice = createSlice({
  name: "meaning",
  initialState: initialMeanig,
  reducers: {
    setInitialMeaning: (state, action) => {
      state.initialMeaning = +action.payload; // + переводит строковое значение из select в число
    },
    initialAppState: (state, action) => {
      state.initialAppState = action.payload; 
    },
    initialLength: (state, action) => {
      state.length = action.payload
    },
  },
});

export const { setInitialMeaning, initialAppState, initialLength } = stateSlice.actions;
export default stateSlice.reducer;
