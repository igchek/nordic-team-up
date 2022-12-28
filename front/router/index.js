import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Main from '../pages/main.jsx'
import General from '../pages/Messanger.jsx'
import PublicContent from '../pages/PublicContent.jsx'
import InvolvedContent from '../pages/InvolvedContent.jsx'
import Personal from '../pages/personal.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <General/>
    },
    {
        path: '/personal',
        element: <Personal/>
    },
    {
        path: '/public_content',
        element: <PublicContent/>
    },
    {
        path: '/involved_content',
        element: <InvolvedContent/>
    }
])

export default router