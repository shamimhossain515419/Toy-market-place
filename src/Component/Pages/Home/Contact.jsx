

const Contact = () => {
     return (
          <div>
                <div>
                    <h1 className="  text-center text-5xl my-8 mt-7 font-medium text-blue-500"> Contact Us</h1>
                    <p className=" w-2/3 mx-auto my-9 text-bs font-medium mt-3 text-center"> We value your feedback and are always happy to assist you. If you have any questions, comments, or suggestions, please don not hesitate to reach out to us. Here are the various ways you can contact us:</p>
               </div>
          
          <div className=" relative">
                
             <div className=" flex justify-center items-center w-full  h-screen relative ">
             <img className="relative w-full  h-screen " src="https://images.pexels.com/photos/4934786/pexels-photo-4934786.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
             </div>

               <div className="container flex justify-center items-center bg-gradient-to-r from-[#040404ce] h-full to-[#040404ce] absolute top-0 mx-auto">


                    <section className="mb-32 text-white">
                         <div className="flex flex-wrap">
                              <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                   <h2 className="text-4xl font-bold mb-6">Contact us</h2>
                                   <p className="text-white text-bs mb-6">
                                   I apologize, but as an AI language model, I don't have real-time access to specific contact information for businesses or organizations. However, I can provide you with a general template for contact information that you can customize according to your needs. Here's an 
                                   </p>
                                   <p className=" mb-2">Dhaka , 94126, Bangladesh</p>
                                   <p className=" mb-2">+ 01 234 567 89</p>
                                   <p className=" mb-2">shamim5455815@gmail.com</p>
                              </div>
                              <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                   <form>

                                        <div className="form-group mb-6">
                                             <input type="text" className="form-control block w-full  px-3 py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding
                                                border border-solid border-gray-300   rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"   name="name" placeholder="Name" id="" />
                                        </div>
                                        <div className="form-group mb-6">
                                             <input type="email" className="form-control block w-full  px-3 py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding
                                                border border-solid border-gray-300   rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"    name="name" placeholder="Email address" id="" />
                                        </div>
                                        <div className="form-group mb-6">
                                             <textarea type="text" className="form-control block w-full  px-3 py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding
                                                border border-solid border-gray-300   rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"   name="name" placeholder="Email address" id="" rows={3} ></textarea>
                                        </div>
                                        <div className="form-group form-check  mb-6">
                                             <input type="checkbox"
                                                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                                 />
                                             <label className="form-check-label inline-block text-white" >Send me 
                                                  message</label>
                                        </div>
                                        <div className="form-group mb-6">
                                             <input className=" py-1 bg-blue-500 text-white block w-full rounded-md  text-xl font-medium  cursor-pointer " type="submit" name="" id="" value={"Submit"} />
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </section>


               </div>
          </div>
          </div>
     );
};

export default Contact;