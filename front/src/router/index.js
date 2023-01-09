import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Main from '../pages/Main.jsx'
import Personal from '../pages/Personal.jsx'


const router = createBrowserRouter([
    {
        path: '/personal',
        element: <Personal/>
    },
    {
        path: '/',
        element: <Main/>
    }
])

export default router