import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {signOut,signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

export const Authcontext = createContext(null)

const Authprovider = ({Children}) => {
    const [user, setuser] = useState(null)
    // user make korar jonno 
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // reload dile jate user chole na jay
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser);
            console.log(currentUser)
        })
        return()=>{
           return unSubscribe()
        }
    },[])
    // user ke login korranor jonno
    const singInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    // ata hottche kuriyar service
    const authinfo = {user,createUser,singInUser,logOut}

    return (
       <Authcontext.Provider value={authinfo}> 
            {Children}
       </Authcontext.Provider>
    );
};

export default Authprovider;

Authprovider.propTypes={
    Children: PropTypes.node
}