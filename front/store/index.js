import {configureStore} from '@reduxjs/toolkit'
import personal from './personal'
import general from './general'
import involvedContent from './involvedContent'
import publicContent from './publicContent'
import focus from './focus'



const store = configureStore({
    reducer: {
        main,
        personal,
        general,
        involvedContent,
        publicContent,
        focus
    }
})

export default store