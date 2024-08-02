import {configureStore, applyMiddleware } from '@reduxjs/toolkit'
import personal from './personal'
import involvedContent from './involvedContent'
import publicContent from './publicContent'
import focus from './focus'
import communities from './communities'
import push from './push'
import user from './user'
import subAccounts from './subAccounts'
import SetUp from './SetUp'
import { composeWithDevTools } from '@redux-devtools/extension';



const store = configureStore({
    reducer: {
        personal,
        involvedContent,
        publicContent,
        focus,
        communities,
        push,
        user,
        subAccounts,
        SetUp

    },
    middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare({
        serializableCheck:false
    }),
    
    devTools:true
},
// composeWithDevTools(
//     applyMiddleware(...middleware),
//     // other store enhancers if any
//   ),
)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch