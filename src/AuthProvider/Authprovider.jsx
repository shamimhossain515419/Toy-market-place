import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebaseconfig/Firebase.confige";

export const AuthContext = createContext();
const Authprovider = ({ children  }) => {
const [user,setSer]=useState();
const [loading,setloading]=useState(true)
// console.log(user);
const googleprovider=new GoogleAuthProvider();
const auth=getAuth(app);
const singup=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password);
}
const singin=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
}

useEffect( ()=>{
      const unsubcript=onAuthStateChanged(auth ,user=>{
          setSer(user)
          setloading(false)
      })
      return ()=>{
           return unsubcript();
      }
} ,[])

const LogOut=()=>{
      return signOut(auth) 
}

const GoogleSing=()=>{
      return signInWithPopup(auth,googleprovider);
}

const userinfo={
     singup,
     user,
     singin,
     loading,
     LogOut,
     GoogleSing
}

     return (
          <div>
               <AuthContext.Provider value={userinfo}>
                    {children }
               </AuthContext.Provider>
          </div>
     );
};

export default Authprovider;