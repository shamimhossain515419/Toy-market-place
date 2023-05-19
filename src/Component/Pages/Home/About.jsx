

const About = () => {
     return (
          <div className=" mt-10">
               <div>
                    <h1 className="  text-center text-5xl my-8 mt-7 font-medium text-blue-500"> About Section</h1>
                    <p className=" w-2/3 mx-auto my-9 text-bs font-medium mt-3 text-center"> The gallery section is a dedicated space within a larger establishment, such as a museum, art gallery, or exhibition hall, designed to showcase a collection of artwork or artifacts. It serves as a curated display area that allows visitors to engage with and appreciate the pieces on display.</p>
               </div>



               <div className="hero  min-h-[80vh] ">
                    <div className=" grid md:grid-cols-2 gap-4  ">
                         <div className=" ">
                              <h1 className=" text-4xl font-semibold text-blue-500  my-3">Off-Road King </h1>
                              <p className=" w-4/5  text-[#030303a9] text-xl font-medium my-5 p-1">he About section provides an overview and essential information about a person, organization, company, or website. It serves as a concise introduction that gives readers a clear understanding of the entity s purpose, values, history, and goals.

                             In an About section, you can typically find a brief description of the entity s background, including its founding date, location, and any significant milestones or achievements. It may also highlight the mission or vision of the entity, outlining its core values and objectives..</p>
                           </div>

                         <div className="text-center ">
                              <div className=" relative">
                                   <div className="md:w-3/4 relative  w-full   mx-auto  md:left-8 shadow-md ">
                                        <img className=" w-full  relative  border-2 border-white" src="https://images.pexels.com/photos/4488182/pexels-photo-4488182.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                                   </div>
                                   <div className=" md:absolute  md:-bottom-16 bg-white rounded-md  shadow-xl md:w-2/4 w-full  border-2  border-white ">
                                        <img className="  w-full  border-2 p-3  rounded-md  " src="https://images.pexels.com/photos/8612955/pexels-photo-8612955.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                                   </div>

                              </div>

                         </div>



                    </div>
               </div>
          </div>

     );
};

export default About;