import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import About from "../Pages/About";
import AddUsers from "../Pages/AddUsers";
import User from "../Pages/User";
import Users from "../Pages/Users";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                
            },
            {
                path:'/home',
                element:<Home/>,
                
            },
            {
                path:'/add',
                element:<AddUsers/>,
            },
            {
                path:'/users',
                element:<Users/>,
               
            },
            {
                path:'/user',
                element:<User/>,
                
            },
            {
                path:'/about',
                element:<About/>
            }

    ]
    }
])