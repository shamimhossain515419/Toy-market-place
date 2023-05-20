import { useContext } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import Swal from "sweetalert2";


export default function Login() {
     const { singin ,GoogleSing} = useContext(AuthContext)
     const navigate=useNavigate();
     const location =useLocation();
   
    const from=location.state?.from?.pathname || '/'
     const handlesubmit = (event) => {
          event.preventDefault();
          const form = event.target;

          const password = form.password.value;
          const email = form.email.value;

          singin(email, password).then(result => {
               if(result.user){
                    Swal.fire('Login  success full')
                     }
                navigate(from,  {replace: true} )
                form.reset();
               

          }).catch(error => {
               console.log(error);
               Swal.fire({
                    icon: 'error',
                    title: 'Authontication Error',
                    text: `${error.massage}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
          })

     }

     const handeleGoolesng=()=>{
          GoogleSing().then(result=>{
                console.log(result.user);
                if(result.user){
               Swal.fire('Google login success full')
                }
                navigate(from,  {replace: true} )
                
          }).catch(error=>{
                console.log(error);
          })
     }
     return (
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
               <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-[#0f01ce] underline">
                         Sign in
                    </h1>
                    <form onSubmit={handlesubmit} className="mt-6">
                         <div className="mb-2">
                              <label
                                   htmlFor="email"
                                   className="block text-bs  font-semibold text-gray-800"
                              >
                                   Email
                              </label>
                              <input
                                   type="email"
                                   name="email"
                                   placeholder="your email"
                                   className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#0f01ce] focus:ring-[#0f01ce] focus:outline-none focus:ring focus:ring-opacity-40"
                              />
                         </div>
                         <div className="mb-2">
                              <label
                                   htmlFor="password"
                                   className="block text-bs  font-semibold text-gray-800"
                              >
                                   Password
                              </label>
                              <input
                                   type="password"
                                   name="password"
                                   placeholder="your password"
                                   className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#0f01ce] focus:ring-[#0f01ce] focus:outline-none focus:ring focus:ring-opacity-40"
                              />
                         </div>
                         <a
                              href="#"
                              className="text-bs   font-medium text-[#0f01ce] hover:underline"
                         >
                              Forget Password?
                         </a>
                         <div className="mt-6">
                              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#0f01ce] rounded-md hover:bg-[#332ab9] focus:outline-none focus:bg-[#3027b8]">
                                   Login
                              </button>
                         </div>
                    </form>
                    <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                         <div className="absolute px-5 bg-white">Or</div>
                    </div>
                    <div className="flex mt-4 gap-x-2">
                         <button onClick={handeleGoolesng}
                              type="button"
                              className="flex items-center justify-center w-full p-2 border  rounded-md focus:ring-2 border-[#0f01ce]"
                         >
                              <svg className="h-8 w-8" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"></path><path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"></path><path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"></path><path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"></path></svg>
                         </button>
                         <button className="flex items-center justify-center w-full p-2 border  rounded-md focus:ring-2 border-[#0f01ce]">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 32 32"
                                   className="w-5 h-5 fill-current"
                              >
                                   <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                              </svg>
                         </button>
                         <button className="flex items-center justify-center w-full p-2 border  rounded-md focus:ring-2 border-[#0f01ce]">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 32 32"
                                   className="w-5 h-5 fill-current"
                              >
                                   <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                              </svg>
                         </button>
                    </div>
                    <p className="mt-8 text-bs   font-medium text-center text-gray-700">
                         {" "}
                         Don not have an account?{" "}
                         <Link
                              href="#"
                              className="font-medium text-[#0f01ce] hover:underline"
                              to={'/ragister'}>
                              Sign up
                         </Link>
                    </p>
               </div>
          </div>
     );
}