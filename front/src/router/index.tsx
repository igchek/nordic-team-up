import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Main from '../pages/Main'
import Personal from '../pages/Personal'
import Vibe from '../pages/Personal'
import Sync from '../pages/Sync'
import Gig from '../pages/Gig'



const router = createBrowserRouter([
    {
        path: '/personal',
        element: <Personal/>
    },
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/vibe',
        element: <Vibe/>
    },
    {
        path: '/sync',
        element: <Sync/>
    },
    {
        path: '/gig',
        element:<Gig/>
    }
])

export default router