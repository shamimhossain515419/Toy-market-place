import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route'
import Authprovider from './AuthProvider/Authprovider'


ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto '>
    <React.StrictMode>
      <Authprovider>
      <RouterProvider router={router}></RouterProvider>
      </Authprovider>
   
  </React.StrictMode>,
 </div>
)
