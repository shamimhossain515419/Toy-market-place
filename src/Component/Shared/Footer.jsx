import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
     return (
          <div className=" mt-28 mb-7">
               <footer className="  p-3 ">
                    <div className=" md:grid grid-cols-4 gap-4 mt-1">
                         <div>
                              <div className="text-center">
                                   <img className=" h-16  w-24" src="https://img.freepik.com/free-vector/word-toys-different-types-toys_1308-11410.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais" alt="" />
                              </div>
                              <p className=" my-2 font-normal text-bs">The toy car is a miniature replica of a sleek and sporty race car, designed to captivate the imagination of both children and car enthusiasts alike. It measures approximately 6 inches in length and is made from durable and lightweight plastic, </p>
                             <div className="flex gap-3 ">
                              <Link target="blanck" to={'https://www.facebook.com/Shamim515419'}>
                              <FaFacebook className="text-blue-500 text-3xl m-2"></FaFacebook>
                               </Link>
                               <FaTwitter className=" text-blue-500 text-3xl  m-2"></FaTwitter>
                               <FaInstagram className="  text-purple-700 text-3xl  m-2"></FaInstagram>
                               <FaYoutube className=" text-red-600 text-3xl  m-2"></FaYoutube>
                             </div>
                         </div>
                         <div>
                              <div className="">
                                   <p className=" font-bold text-blue-500 text-2xl my-1">INFORMATION</p>
                                   <ul className=" flex flex-col  space-y-3">
                                        
                                     <Link className=" font-medium hover:text-blue-500  ml-1 text-xl" to={'/'}> Home </Link>
                                     <Link className=" font-medium hover:text-blue-500 ml-1 text-xl" to={'/about'}> About </Link>
                                     <Link className=" font-medium hover:text-blue-500 ml-1 text-xl" to={'/contact'}> Contact </Link>
                                     <Link className=" font-medium hover:text-blue-500 ml-1 text-xl" to={'/blog'}> Blog </Link>
                                       
                                       
                                   </ul>

                              </div>
                         </div>
                         <div>
                              <div className="">
                                   <p className="font-bold text-blue-500 text-2xl my-2">MY ACCOUNT</p>
                                   <ul className=" flex flex-col  space-y-3">
                                        
                                     <Link  className=" font-medium hover:text-blue-500 ml-1 text-xl" to={'/'}> My Account </Link>
                                     <Link className=" font-medium hover:text-blue-500 ml-1 text-xl" to={'/mytoy'}> My Toy </Link>
                                     <Link className=" font-medium hover:text-blue-500 ml-1 text-xl"> Add Toy </Link>
                                     <Link className=" font-medium hover:text-blue-500 ml-1 text-xl" to={'/login'}> Login </Link>
                                       
                                       
                                   </ul>

                              </div>
                         </div>
                         <div>
                              <div className="">
                                   <p className=" font-bold text-blue-500 text-2xl my-2">CONTACT US</p>
                                   <ul className=" space-y-3">
                                        <li className="  items-center  flex gap-1">
                                             <FaPhone className=" text-[#86BA09] text-xl"></FaPhone>
                                             <h1 className=" font-medium  ml-1 text-lg"> No 5058  Bogura, Dhaka ,Bangladesh  </h1>
                                        </li>
                                        <li className="  items-center  flex gap-1">
                                             <FaMapMarkerAlt className=" text-xl text-[#86BA09] "></FaMapMarkerAlt>
                                             <h1 className=" font-medium   ml-1 text-lg"> +088136152141 </h1>
                                        </li>
                                        <li className=" text-lg  items-center  flex gap-1">
                                             <FaEnvelope className=" text-2xl text-[#86BA09] "></FaEnvelope>
                                             <h1 className=" ml-1  font-medium text-lg"> Shamimhossain515419@gmail.com</h1>
                                        </li>
                                   </ul>

                              </div>
                         </div>
                         
                    </div>
                    <hr className=" my-2"></hr>
                    <div className=" text-center text-xl font-normal">
                         <p>Copyright © 2022 Shamim Programimg. </p>
                    </div>
               </footer>









          </div>
     );
};

export default Footer;