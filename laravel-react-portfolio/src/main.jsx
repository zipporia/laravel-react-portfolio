import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './contexts/contextprovider.jsx'
import './StoreAssets/styles/shared/general.css'
import './StoreAssets/styles/shared/header.css'
import './StoreAssets/styles/pages/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>

  </StrictMode>,
)

// 49:00