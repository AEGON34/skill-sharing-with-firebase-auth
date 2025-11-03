import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Viewdetails from "../Pages/Viewdetails";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'profile',
                element:<Profile></Profile>
            },
            {
                path:'details/:skillId',
                element:<Viewdetails></Viewdetails>
            },
            {
                path:'signin',
                element:<Signin></Signin>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            }
        ]
    }
])