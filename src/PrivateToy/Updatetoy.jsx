import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";


const Updatetoy = () => {
     const [category, setCategory] = useState()
     const updateData = useLoaderData();
     useTitle("updatetoy")
     const { _id, name, price, email, sellername, rating, description, image, quantity } = updateData
     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.title.value;
          const price =parseFloat(form.price.value);
          const email = form.email.value;
          const sellername = form.sellername.value;
          const rating = form.rating.value;
          const description = form.description.value;
          const image = form.photo.value;
          const quantity = form.quantity.value;
          const updateCar = { name, price, email, sellername, rating, description, image, quantity, category };
          console.log(updateCar);

          fetch(`https://toy-marketplace-server.vercel.app/shop/${_id}`,
               {
                    method: "PUT",
                    headers: {
                         'Content-type': 'application/json'
                    },
                    body: JSON.stringify(updateCar)
               }
          ).then(res => res.json()).then(data => {
               console.log(data);
               if (data.modifiedCount > 0) {
                    Swal.fire(' Car update success')
               }
               form.reset();
          })
     }
     return (
          <div>
               <div className=" flex justify-center items-center   relative">
                    <img className="   w-full h-[50vh]" src="https://i.ibb.co/TY7hxjy/transportation-travel-93675-58174.jpg" alt="" />
                    <h1 className=" absolute top-1/2 text-white text-8xl font-extrabold"> Update Toy </h1>
               </div>

               <div>
                    <h1 className=" text-center font-semibold text-5xl my-5 text-blue-500"> Update my Product</h1>
                    <div className=" shadow-md mx-auto py-8">
                         <form onSubmit={handleSubmit} className=" max-w-5xl mx-auto">

                              <div className=" md:grid grid-cols-2 gap-4">
                                   <div className="mb-4 w-full">
                                        <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="name">
                                             Product Title
                                        </label>
                                        <input
                                             type="text"
                                             id="name"
                                             defaultValue={name}
                                             name="title"
                                             className="shadow  w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                             required
                                        />
                                   </div>
                                   <div className="mb-4">
                                        <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="price">
                                             Price
                                        </label>
                                        <input
                                             type="text"
                                             id="price"
                                             name="price"
                                             defaultValue={price}
                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                             required
                                        />
                                   </div>
                              </div>
                              <div className=" md:grid grid-cols-2 gap-4">
                                   <div className="mb-4 w-full">
                                        <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="name">
                                             Seller email
                                        </label>
                                        <input

                                             type="email"
                                             id="name"
                                             name="email" defaultValue={email}
                                             className="shadow  w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                             required
                                        />
                                   </div>
                                   <div className="mb-4">
                                        <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="price">
                                             Seller name
                                        </label>
                                        <input
                                             type="text"
                                             id="Rating"
                                             defaultValue={sellername}
                                             name="sellername"
                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                             required
                                        />
                                   </div>
                              </div>
                              <div className=" md:grid grid-cols-2 gap-4">
                                   <div className="mb-4 w-full">
                                        <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="name">
                                             Picture
                                        </label>
                                        <input
                                             type="text"
                                             id="name"
                                             defaultValue={image}
                                             name="photo"
                                             className="shadow  w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                             required
                                        />
                                   </div>
                                   <div className="mb-4">
                                        <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="price">
                                             Available quantity
                                        </label>
                                        <input
                                             type="text"
                                             id="quantity"
                                             defaultValue={quantity}
                                             name="quantity"
                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                             required
                                        />
                                   </div>
                              </div>
                              <div className=" md:grid grid-cols-2 gap-4">
                                   <div className="mb-4 w-full">
                                        <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="name">
                                             Rating
                                        </label>
                                        <input
                                             type="text"
                                             id="name"
                                             defaultValue={rating}
                                             name="rating"
                                             className="shadow  w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                             required
                                        />
                                   </div>
                                   <div className="mb-4">
                                        <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="price">
                                             Sub-category
                                        </label>
                                        <select
                                             id="category"
                                             defaultValue={category}
                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                             onChange={(e) => setCategory(e.target.value)}
                                             required
                                        >
                                             <option value="truck">truck</option>
                                             <option value="sportscar">sportscar</option>
                                             <option value="Mini">Mini</option>

                                        </select>
                                   </div>
                              </div>
                              <div className="mb-4 w-full">
                                   <label className="block text-gray-700 text-bs font-bold mb-2" htmlFor="name">
                                        Description
                                   </label>
                                   <textarea placeholder="Car description" name="description" id="" cols="5" rows="5" defaultValue={description}
                                        className="shadow  w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                              </div>
                              <div className="flex items-center justify-center">
                                   <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                   >
                                        Update Car
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Updatetoy;