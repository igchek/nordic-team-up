import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import store from './store'
import router from './router'
import * as styles from './App.module.scss'



const App: React.FC = () => {

    return <main className={styles.mainWrapper}>
        <ReduxProvider store={store}>
            <RouterProvider router={router}/>
        </ReduxProvider>
    </main>
}

export default App;