import React, { useContext } from "react";
import Mylink from "./Mylink";
import { AuthContext } from "../Context/Authcontext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase/firebase.config";
import { DotLoader } from "react-spinners";

const Navbar = () => {
  const { info, setInfo, loading } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setInfo(null);
      toast("✅ Signed out successfully");
    } catch (e) {
      toast.error("Could not sign out. Try again.");
      console.error(e);
    }
  };

  const menuItems = (
    <>
      <Mylink to="/" className="p-2 rounded-xl">Home</Mylink>
  
        <Mylink to="/profile" className="p-2 rounded-xl">My Profile</Mylink>
      
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile hamburger */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* CENTER (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>

      {/* RIGHT (auth section) */}
      <div className="navbar-end">
        {loading ? (
          <DotLoader size={24} />
        ) : info ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full" >
                <img
                  alt="user avatar"
                  src={info?.photoURL}
                  title={info?.displayName || "User"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="pointer-events-none">
                <div className="py-2">
                  <div className="font-semibold text-center">{info?.displayName || "User"}</div>
                  <div className="text-xs text-center opacity-70">{info?.email}</div>
                </div>
              </li>
              <l
              i><Mylink to="/profile">My Profile</Mylink></l>
              <li>
                <button onClick={handleSignOut} className="btn btn-sm mt-1">Log Out</button>
              </li>
            </ul>
          </div>
        ) : (
          <Mylink to="/signin" className="btn">Login</Mylink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
