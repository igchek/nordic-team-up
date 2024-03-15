import {configureStore} from '@reduxjs/toolkit'
import personal from './personal'
import involvedContent from './involvedContent'
import publicContent from './publicContent'
import focus from './focus'
import communities from './communities'
import push from './push'
import user from './user'
import subAccounts from './subAccounts'



const store = configureStore({
    reducer: {
        personal,
        involvedContent,
        publicContent,
        focus,
        communities,
        push,
        user,
        subAccounts

    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch