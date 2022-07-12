import { createSlice } from "@reduxjs/toolkit";

const initialMeanig ={
    initialMeaning: 1,
}

const stateSlice = createSlice({
    name: 'meaning',
    initialState: initialMeanig,
    reducers: {
        setInitialMeaning: (state, action) => {
            state.initialMeaning = action.payload
        },
    }
})

export const {setInitialMeaning} = stateSlice.actions
export default stateSlice.reducer