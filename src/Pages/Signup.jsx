import React, { useState } from "react";
import bg from "../assets/beautifulbg.png";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
const Signup = () => {
    const [show,setShow]=useState(false);
    const handlesubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(password)
        const regx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{6,}$/
        if(!regx.test(password)){
  toast("❌ Must have 6 chars, uppercase, lowercase, number & special symbol.")
  return }
            createUserWithEmailAndPassword(auth,email,password)
            .then(res=>{
                toast("✅ Signed up successfully")
                console.log(res.user)
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
           <h1 className="text-center text-3xl font-semibold mt-6">
              Sign Up
            </h1>
            <form onSubmit={handlesubmit} className="mt-4 space-y-3 p-10">

            <label >
                <span className="label-text text-white/80 ">Full name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full bg-white/20 placeholder-white/60"
                  required
                />
              </label>   
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
                         <span className="label-text text-white/80 "> Create Password</span>
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
               <label className="flex items-center gap-2 pt-2">
                <input type="checkbox" className="checkbox" required />
                <span className="text-sm text-white/80">
                  I agree to the Terms & Privacy
                </span>
              </label>
                <button className="btn mt-4 w-full">Sign Up</button>
             <p className="mt-4 text-center text-sm text-white/80">
                          Already have an account?{" "}
                          <Link to="/signin" className="link">
                            Sign in
                          </Link>
                        </p>    
            </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
