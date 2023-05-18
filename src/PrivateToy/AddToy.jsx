import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";

const AddToy = () => {
     const { user } = useContext(AuthContext);

     const [category, setCategory] = useState()
     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.title.value;
          const price = form.price.value;
          const email = form.email.value;
          const sellername = form.sellername.value;
          const rating = form.rating.value;
          const description = form.description.value;
          const image = form.photo.value;
          const quantity = form.quantity.value;
          const car = { name, price, email, sellername, rating, description, image, quantity, category };
          console.log(car);
          fetch('http://localhost:5000/shop', {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(car),
          }).then((res) => res.json())
          .then((result) => {
            console.log(result);
          });

     }
     console.log(category);
     return (
          <div>
               <div className=" flex justify-center items-center   relative">
                    <img className="   w-full h-[50vh]" src="https://i.ibb.co/TY7hxjy/transportation-travel-93675-58174.jpg" alt="" />
                    <h1 className=" absolute top-1/2 text-white text-8xl font-extrabold"> Add Toy </h1>
               </div>

               <div>
                    <h1 className=" text-center font-semibold text-5xl my-5 text-blue-500"> Add my Product</h1>
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
                                             defaultValue={user?.email}
                                             type="email"
                                             id="name"
                                             name="email"
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
                                             defaultValue={user?.displayName}
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
                                   <textarea placeholder="Car description" name="description" id="" cols="5" rows="5" className="shadow  w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                              </div>
                              <div className="flex items-center justify-center">
                                   <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                   >
                                        Add Car
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default AddToy;