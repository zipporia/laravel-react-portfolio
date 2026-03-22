import { createBrowserRouter } from 'react-router-dom';

import GuestLayout from './Components/GuestLayout';
import DefaultLayout from './Components/DefaultLayout';
import Login from './views/login';
import Register from './views/register';
import Users from './views/Users';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/users',
                element: <Users />,
            }
        ]

    },
    {
        path: '/',
        element: <GuestLayout />,
        children:[
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ] 
    }
    
])

export default router
