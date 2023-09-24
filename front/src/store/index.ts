import {configureStore} from '@reduxjs/toolkit'
import personal from './personal'
import involvedContent from './involvedContent'
import publicContent from './publicContent'
import focus from './focus'



const store = configureStore({
    reducer: {
        personal,
        involvedContent,
        publicContent,
        focus,

    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch