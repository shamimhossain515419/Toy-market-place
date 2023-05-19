import Footer from "../../Shared/Footer";
import About from "./About";
import Carsoure from "./Carsoure";
import Contact from "./Contact";
import Gallery from "./Gallery";
import ShopCatagoris from "./ShopCatagoris";


const Home = () => {
     return (
          <div>

            <Carsoure></Carsoure> 
            <Gallery></Gallery> 
            <ShopCatagoris></ShopCatagoris>
          <About></About>
          <Contact></Contact>
           </div>
     );
};

export default Home;