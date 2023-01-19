import React from 'react'
import {RouterProvider} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import store from './store'
import router from './router'
import styles from './app.module.scss'



const App = () => {

    return <main className={styles.mainWrapper}>
        <ReduxProvider store={store}>
            <RouterProvider router={router}>
            </RouterProvider>
        </ReduxProvider>
    </main>
}

export default App;