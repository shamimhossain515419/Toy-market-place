import { FaArrowRight, FaRegHandPointRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";


const ShopCard = ({showcard}) => {
     const {name,price,image,description,rating,category}=showcard;
     return (
          <div className=" m-2 p-1  shadow-md   rounded-md ">
               <div className=' p-2 items-center   mx-auto md:grid grid-cols-2  gap-5 my-4 '>
                              <div>
                                   <img className='   h-80   object-contain w-full' src={image} alt="" /></div>
                              <div className=' space-y-3 '>
                                   <h1 className='text-3xl font-semibold text-blue-600 '> {name}</h1>
                                   {/* <p className=' text-lg '>{description}</p> */}

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
                                        <small className=' text-2xl font-semibold '> Rating: 3.4 </small>
                                   </div>

                                   <button className='  bg-blue-600 text-2xl font-semibold text-white text-center py-1 px-3 rounded-lg my-2'> View Details  <FaArrowRight className=' inline-block mx-1'></FaArrowRight></button>
                              </div>

                         </div>
          </div>
     );
};

export default ShopCard;