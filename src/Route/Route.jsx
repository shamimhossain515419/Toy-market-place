import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home";
import Login from "../User/Login";
import Ragister from "../User/Ragister";
import ShopDetils from "../Component/Pages/Home/ShopDetils";
import PrivetRoute from "./PrivetRoute";
import AddToy from "../PrivateToy/AddToy";
import AllToy from "../Component/Pages/Home/AllToy";



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
                    path:'/addtoy',
                    element:<AddToy></AddToy>
                    },
                    {
                    path:'/alltoys',
                    element:<AllToy></AllToy>,
                    loader:()=>fetch('http://localhost:5000/alltoy')
                    },
                    {
                    path:'/shopdetils/:id',
                    element: <PrivetRoute> <ShopDetils></ShopDetils></PrivetRoute> ,
                    loader:({params})=> fetch(`http://localhost:5000/shopdetils/${params.id}`)
                   
                  }
               ]
            }
       

])

export default router ;