import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
 const location =useLocation();
const {user,loading}=useContext(AuthContext);
if(loading){
    return    <h1 className=" flex justify-center h-screen items-center text-3xl font-medium"> Loading... </h1>
}
if(user){
      return children
}

return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivetRoute;