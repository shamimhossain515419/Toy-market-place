import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/Authprovider";
import Swal from "sweetalert2";


const AllToy = () => {
     const alltoy = useLoaderData();
     const {user}=useContext(AuthContext)
        
     const handlePriveteRoute=()=>{
        if( !user?.email){
             Swal.fire('You have to log in first to view details')
        }
       }
     return (
          <div>
               <h1 className=" text-4xl font-bold  text-blue-500 text-center my-4"> All Toy </h1>
               <div>
                    <div className="overflow-x-auto w-full">
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

                                   {alltoy?.map((product,index) => (
                                        <tr key={product._id}>
                                             <td>{index+1}</td>

                                             <td>
                                                  <div className="flex items-center space-x-3">

                                                       <div className="mask  rounded  w-16 h-16">
                                                            <img src={product.image} className=" rounded " alt="Avatar  Tailwind CSS Component" />
                                                       </div>

                                                  </div>
                                             </td>
                                             <td>{product.sellername}</td>
                                             <td>{product.name}</td>
                                             <td>{product.category}</td>
                                             <td>{product.price}</td>
                                             <td>{product.quantity}</td>
                                             <td ><Link onClick={handlePriveteRoute} to={`/shopdetils/${product._id}`}  className='  bg-blue-600 text-bs font-semibold text-white text-center py-1 px-3 rounded-lg my-2' > View Details  <FaArrowRight className=' inline-block mx-1'></FaArrowRight> </Link></td>
                                            
                                           
                                             

                                        </tr>
                                   ))}


                              </tbody>


                         </table>
                    </div>
               </div>


          </div>
     );
};

export default AllToy;



