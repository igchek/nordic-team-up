import React from 'react'
import {RouterProvider} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import store from './store'
import router from './router'
import classes from './app.modules.css'

import { useEffect } from 'react'
import PersonalSection from '../components/involved/PersonalSection'
import Focus from '../store/focus'
import Public from '../components/public/Public'


const App = () => {

    return <main className={classes.mainWrapper}>
        <ReduxProvider store={store}>
            <RouterProvider router={router}>
            </RouterProvider>
        </ReduxProvider>
    </main>
}

export default App;