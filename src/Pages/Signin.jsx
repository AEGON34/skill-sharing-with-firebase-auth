import React, { useState } from 'react'
import bg from "../assets/beautifulbg.png"
import { Link } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';
const Signin = () => {
    const [show,setShow]=useState(false);
    const [info,setInfo]=useState(null);
    const handlesubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res.user)
            toast("✅ Signed in successfully")
            setInfo(res.user)
        })
        .catch(err=>{
            toast("error ."+err.message)
        })
    }
    const handlesignout=()=>{
        signOut(auth)
        .then(()=>{
            toast("✅ Signed out successfully")
            setInfo(null)
        })
    }
    const handleGoogleSignin=()=>{
        const googleauthprovider=new GoogleAuthProvider()
        signInWithPopup(auth,googleauthprovider)
        .then(res=>{
            console.log(res.user)
            setInfo(res.user)
            toast("✅ Signed in successfully with google")
        })
        .catch(err=>{
            toast("error ."+err.message)
        })

    }
  return (
     <div className="min-h-screen w-full overflow-hidden relative">
      {/* setting the background */}
      <img className="absolute object-cover w-full h-full" src={bg} alt="" />
      {/* soft dark overlay to increase contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      {/* centered container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        {/* glass card */}

        <div className="card w-full max-w-md border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl">
          {
            info? <div className="card w-full max-w-md border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl">
                <img src={info?.photoURL} className='h-10 w-10 rounded-full  mx-auto' alt="" />
                <h1 className='font-semibold text-white/60 text-center '>{info?.displayName}</h1>
                <h1 className='font-semibold text-white/60 text-center '>{info?.email}</h1>
                <div className="flex justify-center">
                    <button className='border-white/30 bg-white/50 mt-4 w-40 rounded-2xl mb-2 cursor-pointer'  onClick={()=>{handlesignout()}}>Sign Out</button>
                </div>
            </div>: <div>
                 <h1 className="text-center text-3xl font-semibold mt-6">
              Sign In
            </h1>
            <form onSubmit={handlesubmit} className="mt-4 space-y-3 p-10"> 
            <label >
                <span className="label-text text-white/80 ">E-mail</span>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter an email"
                  className="input input-bordered w-full bg-white/20 placeholder-white/60"
                  required
                />
              </label>   
           <div className='relative'>
             <label >
                <span className="label-text text-white/80 "> Password</span>
            </label>   
                <input
                  name="password"
                  type={show?"text":"password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full bg-white/20 placeholder-white/60"
                  required
                />
                <span onClick={()=>setShow(!show)} className='absolute bottom-2
                 right-2 text-2xl cursor-pointer '>
                    {show?<FaEye></FaEye>:<IoEyeOff></IoEyeOff>}
                </span>
           </div>
            
                <button className="btn mt-4 w-full">Sign Up</button>
             <p className="mt-4 text-center text-sm text-white/80">
                          Don't have an account?{" "}
                          <Link to="/signup" className="link">
                            Sign up
                          </Link>
                        </p>    
                        <div className="flex items-center justify-center gap-2 my-2">
                            {/* divider */}
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>
              {/* google signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3  bg-white/20 text-white/50 px-5 py-2 rounded-lg w-full font-semibold hover:bg-white/70 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </form>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Signin