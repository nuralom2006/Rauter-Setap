import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home"
import About from "../components/About"
import React from 'react'
import MainLayout from "../Mainlayout/MainLayout";
import Signup from  "../components/Signup"
import Login from "../components/Login"
import Contact from "../components/contact";



const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact/>
            }

        ]
    },

    {
        path:"/signup",
        element:<Signup></Signup>
    },
    {
        path:"/login",
        element:<Login></Login>
    },

]);

export default routes