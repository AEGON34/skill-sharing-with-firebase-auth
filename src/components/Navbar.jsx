import React from 'react'
import Mylink from './Mylink'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm tt">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <Mylink to="/" className="p-2 rounded-xl">Home</Mylink>
         <Mylink to="/profile" className="p-2 rounded-xl">My Profile</Mylink>

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         <Mylink to="/" className="p-2 rounded-xl">Home</Mylink>
         <Mylink to="/profile" className="p-2 rounded-xl">My Profile</Mylink>
    </ul>
  </div>
  <div className="navbar-end">
    <Mylink to="/signin" className="btn">Sign in</Mylink>
  </div>
</div>
  )
}

export default Navbar