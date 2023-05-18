import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home";
import Login from "../User/Login";
import Ragister from "../User/Ragister";
import ShopDetils from "../Component/Pages/Home/ShopDetils";



const router  = createBrowserRouter([
            {
               path:'/',
               element:<Main></Main>,
               children:[
                    {
                    path:'/',
                    element:<Home></Home>
                    },
                    {
                    path:'/login',
                    element:<Login></Login>
                    },
                    {
                    path:'/ragister',
                    element:<Ragister></Ragister>
                    },
                    {
                    path:'/shopdetils/:id',
                    element:<ShopDetils></ShopDetils>,
                    loader:({params})=> fetch(`http://localhost:5000/shopdetils/${params.id}`)
                   
                  }
               ]
            }
       

])

export default router ;