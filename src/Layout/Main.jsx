import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/Navber";
import Footer from "../Component/Shared/Footer";


const Main = () => {
  
      return (
          <div>
               <Navber></Navber>
                <div className= " min-h-[50vh]">
                <Outlet></Outlet>
                </div>
               <Footer></Footer>
          </div>
     );
};

export default Main;