import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/Navber";
import Footer from "../Component/Shared/Footer";


const Main = () => {
      return (
          <div>
               <Navber></Navber>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;