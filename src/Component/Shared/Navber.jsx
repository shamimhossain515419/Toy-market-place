import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { useState } from "react";
const Navber = () => {
const [acctive,SetAccticve]=useState(false);

     return (
          <div className=" shadow-md px-3 bg-[#fff]">

               <div className=" md:flex gap-2  justify-between items-center">
               <div className=" flex justify-between items-center">
               <h1><Link to={'/'}> <img className="  w-40 object-contain h-20 "  src='https://img.freepik.com/free-vector/word-toys-different-types-toys_1308-11410.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais' alt="" /> </Link></h1>  
                <div className="md:hidden">
                  <button onClick={()=>SetAccticve(!acctive)}> {acctive ?  <FaTimes></FaTimes> : <FaBars></FaBars> } </button>
                </div>
               </div>

               <div className={` mt-5 md:flex gap-3 ${acctive ? 'block' :" hidden"}`}>
                  <div className=" md:flex gap-3  ">
                  <NavLink className={({ isActive })=> isActive? " text-xl block  font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "}  to={'/'}>Home</NavLink>  
                  <NavLink className={({ isActive })=> isActive? " text-xl block font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "}  to={'/alltoys'}>All Toys</NavLink>  
                  <NavLink className={({ isActive })=> isActive? " text-xl block  font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "} >Blogs</NavLink>
                  </div>  
                   <div className=" md:flex gap-3   ">
                    <NavLink className={({ isActive })=> isActive? " text-xl  block font-semibold m-3  text-blue-600" : " text-xl  font-semibold m-3  block"} >My Toy</NavLink>  
                    <NavLink className={({ isActive })=> isActive? " text-xl  block  font-semibold m-3  text-blue-600" : " text-xl  font-semibold m-3  block "} >Add A Toy</NavLink> 
                     <FaUser className=" block m-3"></FaUser>
                  </div> 
               </div>
               </div>

          </div>
     );
};

export default Navber;