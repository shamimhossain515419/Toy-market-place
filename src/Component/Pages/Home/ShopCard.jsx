import { useContext } from "react";
import { FaArrowRight, FaRegHandPointRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/Authprovider";
import Swal from "sweetalert2";


const ShopCard = ({showcard}) => {
     const {user}=useContext(AuthContext)
        
       const handlePriveteRoute=()=>{
          if( !user?.email){
               Swal.fire('You have to log in first to view details')
          }
         }
      
     const {name,price, _id ,image,sellername,rating,category}=showcard;
     return (
          <div className=" m-2 p-1  shadow-md   rounded-md ">
               <div className=' p-2 items-center   mx-auto md:grid grid-cols-2  gap-5 my-4 '>
                              <div>
                                   <img className='   h-80   object-contain w-full' src={image} alt="" /></div>
                              <div className=' space-y-3 '>
                                   <h1 className='text-3xl font-semibold text-blue-600 '> {name}</h1>
                                   <p className=' text-lg '>SellerName:  {sellername}</p>

                                   <div className=' text-2xl  flex  items-center  gap-2' >
                                        <FaRegHandPointRight className=' text-blue-600'></FaRegHandPointRight>
                                        <p className=' text-2xl font-semibold '>Category: {category} </p>
                                   </div>
                                   <div className=' text-2xl  flex  items-center  gap-2' >
                                        <FaRegHandPointRight className=' text-blue-600'></FaRegHandPointRight>
                                        <p className=' text-2xl font-semibold '>Price: ${price} </p>
                                   </div>
                                   <div className=' md:flex justify-between gap-1  items-center'>
                                        <Rating
                                             placeholderRating={rating}
                                             emptySymbol={<FaStar className='m-1  text-[#ece800]'></FaStar>}
                                             placeholderSymbol={<FaStar className=' m-1 text-[#ece800]'></FaStar>}
                                             fullSymbol={<FaStarHalfAlt className=' m-1 text-[#ece800]'></FaStarHalfAlt>}
                                        />
                                        <small className=' text-2xl font-semibold '> Rating: {rating} </small>
                                   </div>

                                   <button  className=' bg-blue-600 text-2xl font-semibold text-white text-center py-1 px-3 rounded-lg my-2'> <Link onClick={handlePriveteRoute} to={`/shopdetils/${_id}`}> View Details  <FaArrowRight className=' inline-block mx-1'></FaArrowRight> </Link>  </button>
                              </div>

                         </div>
          </div>
     );
};

export default ShopCard;