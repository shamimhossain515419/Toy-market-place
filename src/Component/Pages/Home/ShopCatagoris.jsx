import { useState } from 'react';
import { FaArrowRight, FaRegHandPointRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCatagoris = () => {
     const [seletpage, setSeletpage] = useState(0)

     console.log(seletpage);
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

                         <div style={{
                              boxShadow: '1px 2px 9px #fff',
                              padding: '1em'
                         }} className=' p-2 items-center   mx-auto md:grid grid-cols-3  gap-5 my-4 '>
                              <div>
                                   <img className='   h-80   object-contain w-full' src="https://img.freepik.com/premium-vector/race-icons-set-cartoon-style_96318-712.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" alt="" /></div>
                              <div className=' space-y-3 '>
                                   <h1 className='text-3xl font-semibold text-blue-600 '> Speed Racer</h1>
                                   <p className=' text-lg '>Experience high-speed racing action with the Speed Racer toy car. It features sleek aerodynamic design and real working headlights. </p>
                                  
                                   <div className=' text-2xl  flex  items-center  gap-2' >
                                        <FaRegHandPointRight className=' text-blue-600'></FaRegHandPointRight>
                                        <p className=' text-2xl font-semibold '>Category: Sports </p>
                                   </div>
                                   <div className=' text-2xl  flex  items-center  gap-2' >
                                        <FaRegHandPointRight className=' text-blue-600'></FaRegHandPointRight>
                                        <p className=' text-2xl font-semibold '>Price: $34 </p>
                                   </div>
                                   <div className=' md:flex justify-between gap-1  items-center'>
                                        <Rating
                                             placeholderRating={3.5}
                                             emptySymbol={<FaStar className='m-1  text-[#ece800]'></FaStar>}
                                             placeholderSymbol={<FaStar className=' m-1 text-[#ece800]'></FaStar>}
                                             fullSymbol={<FaStarHalfAlt className=' m-1 text-[#ece800]'></FaStarHalfAlt>}
                                        />
                                        <small className=' text-2xl font-semibold '> Rating: 3.4 </small>
                                   </div>

                                   <button className='  bg-blue-600 text-2xl font-semibold text-white text-center py-1 px-3 rounded-lg my-2'> View Details  <FaArrowRight className=' inline-block mx-1'></FaArrowRight></button>
                              </div>

                         </div>
                    </TabPanel>
                    <TabPanel>
                         <h2 className=' text-3xl '>Any content 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sint, temporibus nemo, ut cupiditate quibusdam ab ad corporis laboriosam consequatur ex mollitia distinctio est earum sequi quaerat harum nulla qui rerum nesciunt quam. Aliquid, eaque dolores, dolore rerum quas alias minus in quo fugiat cumque nisi itaque ut nulla facilis placeat modi vitae libero iure hic. Incidunt ex, aperiam minima voluptatibus sint numquam ad iusto expedita odio natus placeat, nisi officiis cumque est facere ab blanditiis quia minus at modi. Pariatur animi architecto voluptatem. Exercitationem, ab quibusdam? Nesciunt illum delectus quae ratione expedita! Enim veritatis qui fuga impedit eius fugiat.</h2>
                    </TabPanel>
                    <TabPanel>
                         <h2 className=' text-3xl '>Any shamim content 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sint, temporibus nemo, ut cupiditate quibusdam ab ad corporis laboriosam consequatur ex mollitia distinctio est earum sequi quaerat harum nulla qui rerum nesciunt quam. Aliquid, eaque dolores, dolore rerum quas alias minus in quo fugiat cumque nisi itaque ut nulla facilis placeat modi vitae libero iure hic. Incidunt ex, aperiam minima voluptatibus sint numquam ad iusto expedita odio natus placeat, nisi officiis cumque est facere ab blanditiis quia minus at modi. Pariatur animi architecto voluptatem. Exercitationem, ab quibusdam? Nesciunt illum delectus quae ratione expedita! Enim veritatis qui fuga impedit eius fugiat.</h2>
                    </TabPanel>
               </Tabs>
          </div>
     );
};

export default ShopCatagoris;