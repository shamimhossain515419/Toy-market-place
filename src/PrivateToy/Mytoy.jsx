import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { FaRegHandPointRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
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

           
           console.log(_id);
     }

     return (
          <div>


               <div className="min-h-screen   flex justify-center items-center py-20">

                    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center   justify-center space-y-4 md:space-y-0">

                         {
                              myAddToy?.map(toy => (
                                   <div key={toy._id}>
                                        <div className="max-w-sm h-full bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg ">

                                             <div className="relative">
                                                  <img className="w-full h-80 rounded-xl" src={toy?.image} alt="Colors" />
                                                  <p className="absolute top-0 bg-blue-500 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${toy?.price }</p>
                                             </div>
                                             <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{toy?.name}</h1>
                                             <div className="my-4">
                                                  <div className="flex space-x-1 items-center">
                                                       <p className=' text-lg '>   {toy?.description} </p>

                                                  </div>
                                                  <div className="flex space-x-1 items-center">
                                                       <FaRegHandPointRight className=' text-blue-600'></FaRegHandPointRight>
                                                       <p className='  font-semibold '>Category: {toy?.category} </p>
                                                  </div>
                                                  <div className="flex space-x-1 items-center">
                                                       <FaRegHandPointRight className=' text-blue-600'></FaRegHandPointRight>
                                                       <p className='  font-semibold '>Quantity: {toy?.quantity}  </p>
                                                  </div>



                                                  <div className=' md:flex justify-between gap-1  items-center'>
                                                       <Rating
                                                            placeholderRating={toy?.rating}
                                                            emptySymbol={<FaStar className='m-1  text-[#ece800]'></FaStar>}
                                                            placeholderSymbol={<FaStar className=' m-1 text-[#ece800]'></FaStar>}
                                                            fullSymbol={<FaStarHalfAlt className=' m-1 text-[#ece800]'></FaStarHalfAlt>}
                                                       />
                                                       <small className=' text-2xl font-semibold '> Rating: {toy?.rating} </small>
                                                  </div>
                                                  <div className=" flex gap-3 ">
                                                  <button onClick={()=>handleDelete(toy?._id)} className="mt-4 text-xl w-full text-white bg-red-500 py-2 rounded-xl shadow-lg">Delete</button>
                                                  <button className="mt-4 text-xl w-full text-white bg-blue-500 py-2 rounded-xl shadow-lg"><Link to={`/update/${toy?._id}`}>Update</Link></button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))
                         }

                         

                    </div>
               </div>
          </div>
     );
};

export default Mytoy;