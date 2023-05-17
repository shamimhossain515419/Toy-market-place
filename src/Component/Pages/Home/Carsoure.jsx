import { FaArrowRight } from "react-icons/fa";


const Carsoure = () => {
     return (
          <div>
               <div className="carousel w-full">
                    <div id="slide1" className="carousel-item h-[80vh] relative w-full">
                         <img src="https://img.freepik.com/free-photo/red-car-with-christmas-ball-top_1252-296.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" className="w-full" />
                         {/* text corsul  */}

                           <div className=" absolute top-0 left-0 w-full h-full flex items-center text-[#fff] bg-gradient-to-r from-[#090b148e] to-[#090b148a]">
                             <div className="md:ml-20 ">
                             <h3 className=" text-4xl text-[#0f01ce] font-bold  "> Welcome to toy Car</h3>
                               <h1 className=" text-7xl  font-extrabold mt-4 "> Best Way To Find <br/>  Your     <span className=" text-[#0f01ce] "> Dream</span> Car </h1>
                               <div className=" my-4 ">
                              <button className="  py-2 px-5 text-2xl text-white hover:bg-[#9600a3] rounded-lg  bg-[#0f01ce]">Learn More <FaArrowRight  className="    inline-block"></FaArrowRight> </button>
                             </div>
                             </div>
                             
                           </div>
                          
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
                              <a href="#slide4" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide2" className="carousel-item  h-[80vh] relative w-full">
                         <img src="https://img.freepik.com/free-photo/christmas-toy-car-details-christmas-decor-blurred-background_169016-25523.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" className="w-full" />
                            {/* text corsul  */}

                            <div className=" absolute top-0 left-0 w-full h-full flex items-center text-[#fff] bg-gradient-to-r from-[#090b148e] to-[#090b148a]">
                             <div className="md:ml-20 ">
                             <h3 className=" text-4xl text-[#0f01ce] font-bold  "> Welcome to toy Car</h3>
                               <h1 className=" text-7xl  font-extrabold mt-4 "> Best Way To Find <br/>  Your     <span className=" text-[#0f01ce] "> Dream</span> Car </h1>
                               <div className=" my-4 ">
                              <button className="  py-2 px-5 text-2xl text-white hover:bg-[#9600a3] rounded-lg  bg-[#0f01ce]">Learn More <FaArrowRight  className="    inline-block"></FaArrowRight> </button>
                             </div>
                             </div>
                             
                           </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide3" className="carousel-item  h-[80vh] relative w-full">
                         <img src="https://img.freepik.com/free-photo/toy-truck-with-christmas-trees_1252-293.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" className="w-full" />
                             {/* text corsul  */}

                             <div className=" absolute top-0 left-0 w-full h-full flex items-center text-[#fff] bg-gradient-to-r from-[#090b148e] to-[#090b148a]">
                             <div className="md:ml-20 ">
                             <h3 className=" text-4xl text-[#0f01ce] font-bold  "> Welcome to toy Car</h3>
                               <h1 className=" text-7xl  font-extrabold mt-4 "> Best Way To Find <br/>  Your     <span className=" text-[#0f01ce] "> Dream</span> Car </h1>
                               <div className=" my-4 ">
                              <button className="  py-2 px-5 text-2xl text-white hover:bg-[#9600a3] rounded-lg  bg-[#0f01ce]">Learn More <FaArrowRight  className="    inline-block"></FaArrowRight> </button>
                             </div>
                             </div>
                             
                           </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide4" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide4" className="carousel-item h-[80vh] relative w-full">
                         <img src="https://img.freepik.com/free-photo/small-car-with-pine-cone_1252-391.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" className="w-full" />
                            {/* text corsul  */}

                            <div className=" absolute top-0 left-0 w-full h-full flex items-center text-[#fff] bg-gradient-to-r from-[#090b148e] to-[#090b148a]">
                             <div className="md:ml-20 ">
                             <h3 className=" text-4xl text-[#0f01ce] font-bold  "> Welcome to toy Car</h3>
                               <h1 className=" text-7xl  font-extrabold mt-4 "> Best Way To Find <br/>  Your     <span className=" text-[#0f01ce] "> Dream</span> Car </h1>
                               <div className=" my-4 ">
                              <button className="  py-2 px-5 text-2xl text-white hover:bg-[#9600a3] rounded-lg  bg-[#0f01ce]">Learn More <FaArrowRight  className="    inline-block"></FaArrowRight> </button>
                             </div>
                             </div>
                             
                           </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Carsoure;