import { useEffect, useState } from 'react';
// import { FaArrowRight, FaRegHandPointRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
// import Rating from 'react-rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from './ShopCard';


const ShopCatagoris = () => {
     const [seletpage, setSeletpage] = useState(0)
     const [shopdata, serShopdata] = useState([]);
     if (seletpage == 1) {
          setSeletpage("truck")
     }

     console.log(seletpage);
     if (seletpage == 0) {
          setSeletpage("sportscar")
     }
     // console.log(shopdata);
     useEffect(() => {

          async function fetchData() {
               try {
                    const response = await fetch(`http://localhost:5000/shop/${seletpage}`);
                    const data = await response.json();
                    serShopdata(data);
               } catch (error) {
                    console.error(error);
                    // Handle error case
               }
          }
          fetchData()
     }, [seletpage])

     if (seletpage == 2) {
          setSeletpage("Mini")
     }
     return (
          <div>
               <h1 className=' text-5xl font-bold text-center mt-6 text-blue-500'> Shop to Category </h1>
               <Tabs defaultIndex={0} onSelect={(index) => setSeletpage(index)} className="bg-white shadow">
                    <TabList className={" my-6 flex justify-center items-center gap-4"}>
                         <Tab className="w-1/3 py-2 px-4 text-center text-2xl  border-b-2  text-gray-500 hover:text-blue-500 font-medium"
                              selectedClassName="border-blue-500 text-2xl  text-blue-500" > Sports Car</Tab>
                         <Tab className="w-1/3 py-2 px-4 text-center text-2xl border-b-2  text-gray-500 hover:text-blue-500 font-medium"
                              selectedClassName="border-blue-500 text-2xl text-blue-500">Truck Car</Tab>
                         <Tab className="w-1/3 py-2 px-4 text-center text-2xl border-b-2  text-gray-500 hover:text-blue-500 font-medium"
                              selectedClassName="border-blue-500 text-2xl  text-blue-500"> Mini Card</Tab>
                    </TabList>

                    <TabPanel>
                         <div className='  my-3    md:grid grid-cols-2 gap-3'>
                              {shopdata?.map(show => <ShopCard key={show._id} showcard={show}></ShopCard>)}
                         </div>


                    </TabPanel>
                    <TabPanel>
                         <div className='  my-3  md:grid grid-cols-2 gap-3'>
                              {shopdata?.map(show => <ShopCard key={show._id} showcard={show}></ShopCard>)}
                         </div>
                    </TabPanel>
                    <TabPanel>
                         <div className=' my-3  md:grid grid-cols-2 gap-3'>
                              {shopdata?.map(show => <ShopCard key={show._id} showcard={show}></ShopCard>)}
                         </div>
                    </TabPanel>
               </Tabs>
          </div>
     );
};

export default ShopCatagoris;