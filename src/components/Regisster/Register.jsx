import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useContext, useRef, useState } from "react";
// import {  } from "react-icons/fa6";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Authcontext } from "../Provider/Authprovider";
const Register = () => {
    const {createUser}= useContext(Authcontext)

    // nicher gula just from somporkito 
    const [registererror, setregistererror] = useState('')
    const [registersuccess, setregistersuccess] = useState('')
    const [showpw, setshowpw] = useState('')
    const emailRef = useRef(null)
    const showkorpw = () => {
        setshowpw(!showpw)
    }
    // uporer gula just from somporkito 8-16 line

    const fromhandelar = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Accepted = e.target.terms.checked
        console.log(email, password, Accepted)
        // overall apllication e use korar jonno Authconext,usecontext
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })



        // nicher gula just from somporkito 25-78 line
        // reset user
        setregistererror('')
        setregistersuccess('')
        if (password.length < 6) {
            setregistererror('pleace provide upercase')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setregistererror('pleace provide upercase')
            return;
        }
        else if (!Accepted) {
            setregistererror('pleace accept our terms and condition')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user)
                setregistersuccess('user create successfully')
                // email verification
                sendEmailVerification(result.user)
                .then(()=>{
                    alert('check your email for verification')
                })

            })
            .catch(error => {
                console.log(error)
                setregistererror(error.message)
            }
            )
            
            
    }
    const handelResetPw = () => {
        const email = emailRef.current.value;
        if(!email){
            console.log('password change',emailRef.current.value)
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            console.log('pleace write e valid email')

        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('please check your email')
        })
        .cacth(error =>{
            console.log(error)
        })
    }
    // uporer gula just from somporkito 25-78 line
        return (
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={fromhandelar} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    ref={emailRef}
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control relative ">

                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>

                                <input type={showpw ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <span className="absolute top-14 right-3 " onClick={showkorpw}>{showpw ? <FaEyeSlash /> : <FaRegEye />}</span>


                                <label className="label">
                                    <a onClick={handelResetPw} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div>
                                    <input type="checkbox" name="terms" id="" />
                                    <label htmlFor="terms">Accept our <a href="">Trems and condition</a></label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-red-700 font-semibold text-3xl">Submit </button>
                            </div>
                            {
                                registererror && <p className="text-red-700">{registererror}
                                </p>
                            }
                            {
                                registersuccess && <p className="text-green-800 font-bold text-2xl">{registersuccess} </p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    export default Register;