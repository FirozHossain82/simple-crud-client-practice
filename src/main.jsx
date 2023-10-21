import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Users from './components/Users.jsx'
import Update from './components/Update.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/users',
    element:<Users></Users>
  },
  {
    path:'/update',
    element:<Update></Update>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
