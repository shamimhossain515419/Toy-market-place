
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
     useEffect(() => {
          AOS.init(); 
        }, []);

     return (
    <div className=" my-4 mt-5 ">
               <h1 className="  text-center text-5xl my-8 mt-7 font-medium text-blue-500"> Gallery Section</h1>
                 <p className=" w-2/3 mx-auto my-9 text-bs font-medium mt-3 text-center"> The gallery section is a dedicated space within a larger establishment, such as a museum, art gallery, or exhibition hall, designed to showcase a collection of artwork or artifacts. It serves as a curated display area that allows visitors to engage with and appreciate the pieces on display.</p>
                <div className="grid md:grid-cols-4 gap-4 ">
               <div className=" shadow-md border-2 overflow-hidden border-white">
                <img data-aos="zoom-in" className="h-80 duration-300 ease-in-out  hover:scale-125  w-full  rounded" src="https://img.freepik.com/premium-photo/symbols-love-success-happy-woman_116407-3964.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" /> 
               </div>
               <div className=" shadow-md border-2 overflow-hidden border-white">
                <img data-aos="zoom-out" className="h-80 w-full  duration-300 ease-in-out  hover:scale-125   rounded" src="https://img.freepik.com/free-photo/boy-with-toy-car_1149-650.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais" alt="" /> 
               </div>
               <div className=" shadow-md border-2 overflow-hidden  border-white">
                <img data-aos="zoom-in" className="h-80 w-full duration-300 ease-in-out  hover:scale-125  rounded" src="https://img.freepik.com/free-photo/christmas-travel-concept-with-car_23-2149575576.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" /> 
               </div>
               <div className=" shadow-md border-2 overflow-hidden  border-white">
                <img data-aos="zoom-in" className="h-80 w-full duration-300 ease-in-out  hover:scale-125  rounded" src="https://img.freepik.com/premium-photo/new-red-car-with-blue-bow-as-gift-coral_96336-72.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" /> 
               </div>
               <div className=" shadow-md border-2 overflow-hidden  border-white">
                <img data-aos="zoom-in"  className="h-80 w-full duration-300 ease-in-out  hover:scale-125  rounded" src="https://img.freepik.com/free-photo/toy-car-with-pine-cone_1252-373.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" /> 
               </div>
               <div className=" shadow-md border-2 overflow-hidden  border-white">
                <img  data-aos="zoom-in" className="h-80 w-full duration-300 ease-in-out  hover:scale-125  rounded" src="https://img.freepik.com/free-vector/toys-illustrations-vectors_23-2147500929.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" /> 
               </div>
               <div className=" shadow-md border-2 overflow-hidden  border-white">
                <img  data-aos="zoom-in"  className="h-80 w-full duration-300 ease-in-out  hover:scale-125  rounded" src="https://img.freepik.com/free-vector/boy-driving-mini-car-toy-white-background_1308-76150.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" /> 
               </div>
               <div className=" shadow-md border-2 overflow-hidden  border-white">
                <img data-aos="zoom-in"  className="h-80 w-full duration-300 ease-in-out  hover:scale-125  rounded" src="https://img.freepik.com/free-vector/boy-driving-bumper-car-white-background_1308-108023.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" /> 
               </div>
          </div>
          </div>
     );
};

export default Gallery;