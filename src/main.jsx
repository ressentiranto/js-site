import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'catalog', element: <Catalog /> },
  ]},
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
