import { FaArrowLeft } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
     const error = useRouteError();
               
     return (
          <div className=" flex justify-center items-center">
              
               <div  id="error-page">
                    <h1 className=" text-red-600 text-5xl font-bold text-center my-1">Error?</h1>
                     <img className=" block w-2/3 h-[50vh] mx-auto object-contain" src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" />
                    <p className=" text-3xl font-semibold my-1">Sorry, an unexpected error has occurred.</p>
                    <p className=" text-center mx-auto">
                    <i className=" text-2xl font-semibold">{error.statusText || error.message}</i>
                    </p>
                    <Link className="text-3xl text-center font-bold text-blue-600"><FaArrowLeft className=" inline-block"> </FaArrowLeft> Go Back </Link>
               </div>
              
          </div>
     );
};

export default ErrorPage;