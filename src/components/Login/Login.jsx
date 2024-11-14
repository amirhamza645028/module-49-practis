import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { } from "firebase/auth/web-extension";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";

import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";

const Login = () => {

    const { singInUser } = useContext(Authcontext)


    // user ba kew login kora ache seta dekhar jonno aaei state
    const [user, setuser] = useState('')

    const provider = new GoogleAuthProvider();

    const singinhandel = () => {


        // nicher 23-30 line context er bujhe naw

        singInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })


        signInWithPopup(auth, provider)
            .then(result => {
                const LOginUser = result.user
                console.log(LOginUser)
                setuser(LOginUser)
            })
            .cath(error => {
                console.log(error)
            })

    }
    const singouthandelar = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setuser(null);
            })
            .cath(error => {
                console.log(error)
            })
    }
    return (

        <div>


            {user ?
                <button onClick={singinhandel}>Google singin </button>
                :
                <button onClick={singouthandelar}>SingOut</button>}

            {
                user &&
                <div>
                    User Name :- {user.displayName
                    }
                    User photo :- {user.photoURL

                    }
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;