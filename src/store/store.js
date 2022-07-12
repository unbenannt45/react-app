import {configureStore} from '@reduxjs/toolkit'
import stateSlice from '../features/stateStatus/stateSlice'

export const store = configureStore({
    reducer: {
        meaning: stateSlice,
    },
})