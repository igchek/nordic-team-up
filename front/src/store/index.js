import {configureStore} from '@reduxjs/toolkit'
import personal from './personal'
import involvedContent from './involvedContent'
import publicContent from './publicContent'
import focus from './focus'
import sectionDashboard from './sectionDashboard'



const store = configureStore({
    reducer: {
        personal,
        involvedContent,
        publicContent,
        focus,
        sectionDashboard,

    }
})

export default store