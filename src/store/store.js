import {configureStore} from '@reduxjs/toolkit'
import stateSlice from '../features/stateStatus/stateSlice'
import searchSlice from '../features/stateSearch/searchSlice'

export const store = configureStore({
    reducer: {
        meaning: stateSlice,
        searchProducts: searchSlice,
    },
})