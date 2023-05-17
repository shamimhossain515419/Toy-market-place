import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route'


ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto '>
    <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
 </div>
)
