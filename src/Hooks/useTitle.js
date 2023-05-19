import { useEffect } from "react";


const useTitle=title=>{
     useEffect(()=>{
      document.title=  `Toy Car-${title}`;
     },[title])   
}
export default useTitle;