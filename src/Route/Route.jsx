import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home";
import Login from "../User/Login";
import Ragister from "../User/Ragister";
import ShopDetils from "../Component/Pages/Home/ShopDetils";
import PrivetRoute from "./PrivetRoute";
import AddToy from "../PrivateToy/AddToy";
import AllToy from "../Component/Pages/Home/AllToy";
import Mytoy from "../PrivateToy/Mytoy";
import Updatetoy from "../PrivateToy/Updatetoy";
import ErrorPage from "../Component/Shared/ErrorPage";



const router  = createBrowserRouter([
            {
               path:'/',
               element:<Main></Main>,
               errorElement:<ErrorPage></ErrorPage>,
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
                     path:'/update/:id',
                     element:<Updatetoy></Updatetoy>,
                     loader:({params})=> fetch(`https://toy-marketplace-server.vercel.app/shopdetils/${params.id}`)
                    },
                    {
                    path:'/addtoy',
                    element:<AddToy></AddToy>
                    },
                    {
                    path:'/alltoys',
                    element:<AllToy></AllToy>,
                    loader:()=>fetch('https://toy-marketplace-server.vercel.app/shop')
                    },
                    {
                    path:'/mytoy',
                    element: <PrivetRoute><Mytoy></Mytoy></PrivetRoute> ,
                    
                    },
                    {
                    path:'/shopdetils/:id',
                    element: <PrivetRoute> <ShopDetils></ShopDetils></PrivetRoute> ,
                    loader:({params})=> fetch(`https://toy-marketplace-server.vercel.app/shopdetils/${params.id}`)
                   
                  }
               ]
            }
       

])

export default router ;