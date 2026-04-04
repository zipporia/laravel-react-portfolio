import { createBrowserRouter } from 'react-router-dom';

import GuestLayout from './Components/GuestLayout';
import DefaultLayout from './Components/DefaultLayout';
import Login from './views/Login';
import Register from './views/Register';
import Users from './views/Users';
import UserForm from './views/UserForm';
import Store from './views/Store';
import Checkout from './views/Checkout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/users/new',
                element: <UserForm key="UserCreate" />
            },
            {
                path: '/users/:id',
                element: <UserForm key="UserUpdate" />
            },
            {
                path: '/store',
                element: <Store />
            },
            {
                path: '/checkout',
                element: <Checkout />
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
