import { createContext } from "react";

export const AutuContext = createContext();
const Authprovider = ({ children  }) => {

 


     return (
          <div>
               <AutuContext.Provider>
                    {children }
               </AutuContext.Provider>
          </div>
     );
};

export default Authprovider;