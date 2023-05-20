import { useContext, useEffect, useState } from "react";
import { FaArrowRight,} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/Authprovider";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";


const AllToy = () => {

     const { totalCar } = useLoaderData();
     const { user } = useContext(AuthContext)
     const [alltoy, setalltoy] = useState([]);
  
     const [limit, setlimit] = useState(20);
     useTitle("Alltoy");
     const [searchTerm, setSearchTerm] = useState('');
     

     const handleSearchChange = (event) => {
       setSearchTerm(event.target.value);
       }
    
     useEffect(() => {
          fetch(`https://toy-marketplace-server.vercel.app/shop?&limit=${limit}`)
               .then(res => res.json())
               .then(data => setalltoy(data))
     }, [limit])


const handleSearch=()=>{
     fetch(`https://toy-marketplace-server.vercel.app/toyCar/${searchTerm}`)
     .then(res => res.json())
     .then(data => setalltoy(data))
 }
//  sorting 


 

 const handlePriveteRoute = () => {
          if (!user?.email) {
               Swal.fire('You have to log in first to view details')
          }
     }

 
     return (
          <div>
               <h1 className=" text-4xl font-bold  text-blue-500 text-center my-4"> All Toy </h1>
               <div>
                    <div>
                         <div className=" text-center">
                              <input
                                   type="text"
                                   placeholder="Search"
                                     
                                   
                                   onChange={handleSearchChange}
                                   className="px-4 py-2 w-1/3 mx-auto my-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <button onClick={handleSearch} className=" text-xl font-bold bg-blue-500 py-1 mx-2 cursor-pointer px-3 rounded-md " > Search</button> 
                         </div>
                           
                    </div>
                    <div className=" w-full">
                         
                         <table className="table w-full">
                              {/* head */}
                              <thead>
                                   <tr>

                                        <th className="py-2 px-4 border-b">ID</th>
                                        <th className="py-2 px-4 border-b">Image</th>
                                        <th className="py-2 px-4 border-b">Seller</th>
                                        <th className="py-2 px-4 border-b">Toy Name</th>
                                        <th className="py-2 px-4 border-b">Sub-category</th>
                                        <th className="py-2 px-4 border-b">Price</th>
                                        <th className="py-2 px-4 border-b">Quantity</th>
                                        <th className="py-2 px-4 border-b">Action</th>
                                   </tr>
                              </thead>
                              <tbody>

                                   {alltoy?.map((product, index) => (
                                        <tr key={product._id}>
                                             <td>{index + 1}</td>

                                             <td>
                                                  <div className="flex items-center space-x-3">

                                                       <div className="mask  rounded  w-16 h-16">
                                                            <img src={product.image} className=" w-full h-full rounded " alt="Avatar  Tailwind CSS Component" />
                                                       </div>

                                                  </div>
                                             </td>
                                             <td>{product.sellername}</td>
                                             <td>{product.name}</td>
                                             <td>{product.category}</td>
                                             <td>{product.price}</td>
                                             <td>{product.quantity}</td>
                                             <td ><Link onClick={handlePriveteRoute} to={`/shopdetils/${product._id}`} className='  bg-blue-600 text-bs font-semibold text-white text-center py-1 px-3 rounded-lg my-2' > View Details  <FaArrowRight className=' inline-block mx-1'></FaArrowRight> </Link></td>




                                        </tr>
                                   ))}


                              </tbody>


                         </table>
                    </div>

                    <div className=" text-center block mx-auto">
                         {alltoy && alltoy?.length >= 20 ? <button onClick={() => setlimit(totalCar)} className={`text-white ${alltoy && alltoy.length == totalCar ? "hidden" : "block"} bg-blue-600   hover:bg-blue-400 px-3 py-1 rounded-md text-2xl font-semibold `} > See More</button > : ""}
                    </div>
               </div>


          </div>
     );
};

export default AllToy;



