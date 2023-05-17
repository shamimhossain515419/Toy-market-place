import { Link, NavLink } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
const Navber = () => {
     return (
          <div className=" shadow-md px-3">

               <div className=" md:flex gap-2  justify-between items-center">
               <div>
               <h1><Link> <img className="  w-40 object-contain h-20 "  src='https://img.freepik.com/free-vector/word-toys-different-types-toys_1308-11410.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais' alt="" /> </Link></h1>  
               </div>
               <div className=" flex gap-3">
                  <div>
                  <NavLink className={({ isActive })=> isActive? " text-xl  font-semibold mx-3  text-blue-600" : " text-xl  font-semibold mx-3 "}  to={'/'}>Home</NavLink>  
                  <NavLink className={({ isActive })=> isActive? " text-xl  font-semibold mx-3  text-blue-600" : " text-xl  font-semibold mx-3 "}  to={'/alltoys'}>All Toys</NavLink>  
                  <NavLink className={({ isActive })=> isActive? " text-xl  font-semibold mx-3  text-blue-600" : " text-xl  font-semibold mx-3 "} >Blogs</NavLink>
                  </div>  
                   <div className=" md:flex gap-3">
                    <NavLink className={({ isActive })=> isActive? " text-xl  font-semibold mx-3  text-blue-600" : " text-xl  font-semibold mx-3 "} >My Toy</NavLink>  
                    <NavLink className={({ isActive })=> isActive? " text-xl  font-semibold mx-3  text-blue-600" : " text-xl  font-semibold mx-3 "} >Add A Toy</NavLink> 
                     <FaUser></FaUser>
                  </div> 
               </div>
               </div>

          </div>
     );
};

export default Navber;