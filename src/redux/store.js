import { configureStore } from '@reduxjs/toolkit'

import themaReducer from './main'

export const store = configureStore({
    reducer:{
        themaSet: themaReducer,
    },
})