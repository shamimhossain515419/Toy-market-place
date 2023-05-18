import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const AllToy = () => {
     const alltoy = useLoaderData();

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
                                        <tr key={product.id}>
                                             <td>{index+1}</td>

                                             <td>
                                                  <div className="flex items-center space-x-3">

                                                       <div className="mask mask-squircle w-12 h-12">
                                                            <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                                       </div>

                                                  </div>
                                             </td>
                                             <td>{product.sellername}</td>
                                             <td>{product.name}</td>
                                             <td>{product.category}</td>
                                             <td>{product.price}</td>
                                             <td>{product.quantity}</td>
                                             <button className='  bg-blue-600 text-bs font-semibold text-white text-center py-1 px-3 rounded-lg my-2'> <Link to={'/'}> View Details  <FaArrowRight className=' inline-block mx-1'></FaArrowRight> </Link>  </button>
                                           
                                             

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



