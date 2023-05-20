import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { FaRegEdit, FaTrashAlt,  } from "react-icons/fa";
// import Rating from "react-rating";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/useTitle";


const Mytoy = () => {

     const { user } = useContext(AuthContext);
     const [myAddToy, sermyAddToy] = useState([])
     const URL = `https://toy-marketplace-server.vercel.app/shop?email=${user.email}`
     useEffect(() => {
          fetch(URL).then(res => res.json())
               .then(data => {
                    sermyAddToy(data)
               })
     }, [URL])
     // console.log(myAddToy);
     useTitle("mytoy")
     const handleDelete=(_id)=>{
          Swal.fire({
               title: 'Are you sure?',
               text: "Do you want to delete it?",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
             }).then((result) => {
               if (result.isConfirmed) {
               fetch(`https://toy-marketplace-server.vercel.app/shopDelete/${_id}`, {
               method:"DELETE",
              }).then(res=>res.json())
              .then(data=>{
               console.log(data);
                const findAllData=myAddToy.filter(pd=> pd._id !==_id)
                sermyAddToy(findAllData)
                if(data.deletedCount >0){
                    Swal.fire(
                         'Deleted!',
                         'Your file has been deleted.',
                         'success'
                       )  
                }
               })
            }
             })
     }
    


     return (

          <div>

                 <h1 className=" text-5xl  text-center font-medium my-5 text-blue-500  "> My Toy </h1>
                 {/* <div>
                      <div className=" flex justify-end mt-6 mb-2 items-center">
                         <button onClick={handleacending} className="btn btn-primary mx-2">Ascending</button>
                         <button onClick={handledecending} className="btn btn-primary  mx-2">descending</button>
                            
                         </div>
                      </div> */}
               <div className="min-h-screen   flex justify-center items-center py-20">
                     
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

                                   {myAddToy?.map((product, index) => (
                                        <tr key={product._id}>
                                             <td>{index + 1}</td>

                                             <td>
                                                  <div className="flex items-center space-x-3">

                                                       <div className="mask  rounded  w-16 h-16">
                                                            <img  src={product.image} className=" rounded w-full h-full " alt="Avatar  Tailwind CSS Component" />
                                                       </div>

                                                  </div>
                                             </td>
                                             <td>{product.sellername}</td>
                                             <td>{product.name}</td>
                                             <td>{product.category}</td>
                                             <td>{product.price}</td>
                                             <td>{product.quantity}</td>
                                             <td >
                                                   <div className=" flex gap-5">
                                                   <FaTrashAlt onClick={()=>handleDelete(product._id)} className="text-2xl cursor-pointer text-red-600"></FaTrashAlt>
                                                  <Link  to={`/update/${product._id}`} className=' text-blue-500 text-2xl ' >  <FaRegEdit></FaRegEdit></Link>
                                                   </div>
                                                  
                                              </td>




                                        </tr>
                                   ))}


                              </tbody>


                         </table>
               </div>
          </div>
     );
};

export default Mytoy;