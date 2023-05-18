import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
 const location =useLocation();
const {user}=useContext(AuthContext);

if(user){
      return children
}

return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivetRoute;