import { FaArrowLeft,  FaRegHandPointRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";


const ShopDetails = () => {
     const loadData = useLoaderData()
     
     const { name, price, image, description, rating, category } = loadData;

     return (
          <div>
               <div className=" relative  w-full flex justify-center items-baseline ">
                    <img className=" relative h-[70vh] w-full  " src="https://img.freepik.com/free-photo/concept-school-education-with-school-accessories-space-text_185193-109798.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" />
                    <h1 className=" text-white text-7xl font-bold absolute top-1/3 bottom-1/2 "> The Best Car </h1>
               </div>
               <div className=" m-2 p-1  mt-10 shadow-md   rounded-md ">
                 <Link to={'/'} className=" text-2xl text-blue-600 font-bold" > <FaArrowLeft className="  inline-block"></FaArrowLeft> Go Back</Link>
                 <div className=' p-2 items-center   mx-auto md:grid grid-cols-2  gap-5 my-4 '>
                              <div>
                                   <img className='   h-80   object-contain w-full' src={image} alt="" /></div>
                              <div className=' space-y-3 '>
                                   <h1 className='text-3xl font-semibold text-blue-600 '> {name}</h1>
                                   <p className=' text-lg '>{description}</p>

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

                                   <button className='  bg-blue-600 text-2xl font-semibold text-white text-center py-1 px-3 rounded-lg my-2'> Buy New </button>
                              </div>

                         </div>
          </div>
          </div>
     );
};

export default ShopDetails;